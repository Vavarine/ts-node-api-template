import chalk from "chalk";
import { format } from "date-fns";

const getCurrentTime = () => {
  return format(new Date(), "HH:mm:ss.SSS");
};

export const logInfo = (subject: string, message: string) => {
  console.log(
    chalk.gray(`${getCurrentTime()} `) +
      chalk.blue(`[${subject.toUpperCase()}] `) +
      `${message}`
  );
};

export const logSucess = (subject: string, message: string) => {
  console.log(
    chalk.gray(`${getCurrentTime()} `) +
      chalk.green(`[${subject.toUpperCase()}] `) +
      `${message}`
  );
};

export const logWarn = (subject: string, message: string) => {
  console.log(
    chalk.gray(`${getCurrentTime()} `) +
      chalk.yellow(`[${subject.toUpperCase()}] `) +
      `${message}`
  );
};

export const logError = (subject: string, message: string) => {
  console.log(
    chalk.gray(`${getCurrentTime()} `) +
      chalk.red(`[${subject.toUpperCase()}] `) +
      `${message}`
  );
};
