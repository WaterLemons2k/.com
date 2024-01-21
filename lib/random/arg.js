import randomInt from "./int.js";

/**
 * Returns a random argument from the given arguments.
 * @param  {...any} args - The arguments to choose from.
 * @returns {any} - The random argument.
 */
export default function randomArg(...args) {
  return args[randomInt(0, args.length - 1)];
}
