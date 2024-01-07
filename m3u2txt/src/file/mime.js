const MIMETypes = {
  txt: 'text/plain',
};

/**
 * Retrieve the MIME type of a file based on its extension.
 * 
 * @param {string} extension - The extension of the file.
 * @returns {string} - The MIME type of the extension. undefined if not found.
 */
export default function getMIMEType(extension) {
  return MIMETypes[extension];
}