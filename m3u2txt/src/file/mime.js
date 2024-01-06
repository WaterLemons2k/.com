const defaultMIMEType = 'text/plain';

const extensionToMIMEType = {
  'txt': defaultMIMEType,
}

/**
 * Retrieve the MIME type of a file based on its extension.
 * 
 * @param {string} extension - The extension of the file.
 * @returns {string} - The MIME type of the extension.
 */
export default function getMIMEType(extension) {
  return extensionToMIMEType[extension] || defaultMIMEType;
}