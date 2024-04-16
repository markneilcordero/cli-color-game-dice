const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let yellow = 0, white = 0, pink = 0, blue = 0, red = 0, green = 0;

function generateRandomColor(min, max)
{
  return Math.floor(Math.random() * (max - min) + min);
}

function displayResult()
{
  console.log("Result:");
  for (let x = 0; x < 3; x++)
  {
    switch (generateRandomColor(1, 7))
    {
      case 1:
        yellow += 0.3;
        console.log("Yellow");
        break;
      case 2:
        white += 0.3;
        console.log("White");
        break;
      case 3:
        pink += 0.3;
        console.log("Pink");
        break;
      case 4:
        blue += 0.3;
        console.log("Blue");
        break;
      case 5:
        red += 0.3;
        console.log("Red");
        break;
      case 6:
        green += 0.3;
        console.log("Green");
        break;
      default:
        console.log("Unknown");
    }
  }
  displayPercentage();
}

function displayPercentage()
{
  console.log();
  console.log("Yellow: " + yellow);
  console.log("White: " + white);
  console.log("Pink: " + pink);
  console.log("Blue: " + blue);
  console.log("Red: " + red);
  console.log("Green: " + green);
}

function gamePlay()
{
  r1.question('Press x to continue:', (userInput) => {
    if (userInput == "x")
    {
      displayResult();
    }
  });
}
for (let x = 0; x < 5; x++)
{
  gamePlay();
}