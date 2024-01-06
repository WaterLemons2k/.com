/**
 * Read the contents of the specified file as a text string.
 * 
 * @param {File} file - The file which to read.
 * @returns {Promise<string>} - The content of the file.
 */
export default async function readAsText(file) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);

    reader.readAsText(file);
  });
}
