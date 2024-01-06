// M3U's head and info line.
const M3U_HEAD = '#EXTM3U',
  M3U_INFO = '#EXTINF';

/**
 * Converts a M3U string to TXT.
 * @param {string} M3U - The M3U file to convert.
 * @throws {Error} If the M3U file is invalid.
 * @returns {string[]} - The converted TXT.
 */
export default function M3U2TXT(M3U) {
  if (!isValidM3U(M3U)) {
    throw new Error('Invalid M3U file!');
  }

  const lines = M3U.split(/\r?\n/);
  // The first line of the M3U file is the M3U head, so skip it.
  lines.shift();

  const TXT = [];
  for (const line of lines) {
    TXT.push(parseM3ULine(line));
  }

  // Trim the last line.
  TXT[TXT.length - 1] = TXT[TXT.length - 1].trim();

  return TXT;
}

/**
 * Check if the M3U string is valid.
 *
 * @param {string} M3U - The M3U string to be checked.
 * @return {boolean} Whether the M3U string is valid or not.
 */
function isValidM3U(M3U) {
  return M3U.includes(M3U_HEAD) && M3U.includes(M3U_INFO);
}

/**
 * Parses a line from a M3U file.
 *
 * @param {string} line - The line to parse.
 * @return {string} - The parsed line.
 */
function parseM3ULine(line) {
  if (line.startsWith(M3U_INFO)) {
    // Extract the title from the M3U info line.
    const [, title] = line.split(',');
    return `${title},`;
  }

  return `${line}\n`;

}