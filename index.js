const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const colors = {
  1: "Yellow",
  2: "White",
  3: "Pink",
  4: "Blue",
  5: "Red",
  6: "Green"
};

const colorCounts = {
  Yellow: 0,
  White: 0,
  Pink: 0,
  Blue: 0,
  Red: 0,
  Green: 0
};

const max_rounds = 5;
const colors_to_generate = 3;
const percentage = 0.3;

function generateRandomColor()
{
  return Math.floor(Math.random() * 6) + 1;
}

function displayResult()
{
  console.log("Result:");
  for (let i = 0; i < colors_to_generate; i++)
  {
    const colorNumber = generateRandomColor();
    const colorName = colors[colorNumber];
    colorCounts[colorName] += percentage;
    console.log(colorName);
  }
  displayPercentage()
}

function displayPercentage()
{
  console.log();
  Object.keys(colorCounts).forEach(color => {
    console.log(`${color}: ${colorCounts[color]}`);
  });
}

function gamePlay(roundsLeft)
{
  if (roundsLeft === 0)
  {
    r1.close();
    return;
  }

  r1.question('Press x to continue:', (userInput) => {
    if (userInput.trim().toLowerCase() === "x")
    {
      displayResult();
      gamePlay(roundsLeft - 1);
    }
    else
    {
      console.log("Invalid input. Press 'x' to continue.");
      gamePlay(roundsLeft);
    }
  });
}

gamePlay(Infinity);