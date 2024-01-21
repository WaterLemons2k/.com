/**
 * Generates a random integer between the min and max values.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The random integer.
 */
export default function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
