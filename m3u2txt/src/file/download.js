import Filename from './filename.js';

/**
 * Download a file with the given content and filename.
 * 
 * @param {string} content - The content of the file.
 * @param {Filename} filename - The name of the file.
 */
export default function downloadFile(content, filename) {
  const file = new File(content, filename, { type: filename.type }),
    objectURL = URL.createObjectURL(file),
    a = document.createElement('a');

  a.href = objectURL;
  a.download = filename;
  document.body.append(a);

  a.click();
  a.remove();
  URL.revokeObjectURL(objectURL);
}