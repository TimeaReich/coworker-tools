/**
 * @description
 * A script for displaying information about coworkers
 * Can be called by running `npm start {command}` in the terminal
 *
 * @example
 * `npm start list`
 * Running this command will call the `runListCommand` function
 */

// The {command} the user types in the terminal e.g. "list"
const command = process.argv[2];

// The array of members that you defined in the previous task
const members = require("./members");

if (command === "list") {
  runListCommand(members);
} else {
  console.log(`Command "${command}" not found. Try "list" instead.`);
}

function runListCommand(array) {
  console.log("Called the list command");
  array.forEach(item => {console.log(`${item.firstName} ${item.lastName}`)
 })

}



