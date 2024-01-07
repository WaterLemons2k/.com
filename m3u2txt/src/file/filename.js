import getMIMEType from './mime.js';

/**
 * Represents a filename, including the extension and the MIME type.
 */
export default class Filename {
  /**
   * @param {string} filename - The name of the file.
   */
  constructor(filename) {
    this.filename = filename;
  }

  /**
   * Gets the MIME type of the file based on its extension.
   * 
   * @returns {string} - The MIME type of the extension. undefined if not found.
   */
  get type() {
    return getMIMEType(this.extension);
  }

  /**
   * Gets the extension of the filename.
   * 
   * @returns {string} - The extension of the file.
   */
  get extension() {
    return this.filename.slice(this.filename.lastIndexOf('.') + 1);
  }

  /**
   * 
   * Sets the extension of the filename.
   * 
   * For example, if the filename is 'foo.txt' and the new extension is 'md',
   * then the filename will be 'foo.md'.
   * 
   * @param {string} newExtension - The new extension to set for the filename.
   */
  set extension(newExtension) {
    const filenameParts = this.filename.split('.');

    // If the filename has an extension, remove it.
    if (filenameParts.length > 1) {
      filenameParts.pop();
    }

    filenameParts.push(newExtension);
    this.filename = filenameParts.join('.');
  }


  /**
   * Converts the filename to a string.
   *
   * @returns {string} - The filename.
   */
  toString() {
    return this.filename;
  }
}
