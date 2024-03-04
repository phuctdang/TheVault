// pseudocode
// 1. Create an appropriate name for each of the three variables.
// 2. Assign a calculation to the three variables each using a different arithmetic operators.
// 3. The values for each variables are: 10 - 40 - 39
// 4. Creat a dialogue box or alert displaying the 3 combinations.

// naming the variables and assigning an arithmatic operation to each variables
const codeOne = 20 - 10;
const codeTwo = codeOne * 4;
const codeThree = codeTwo / codeOne + 35;

// assigning a string to a variable to make concatenation with other variables easier
const str = "You have received this message because you have been chosen to open an important vault.\nHere is the secret combination: ";
const msg = str + `${codeOne} - ${codeTwo} - ${codeThree}`;
console.log(msg);

//creating an alert box message using the created variables
alert (msg)
