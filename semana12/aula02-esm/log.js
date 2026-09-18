import chalk from "chalk";

const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); // Orange color

export function chalkLog() {
  console.log(error("Error!"));
  console.log(warning("Warning!"));
}
