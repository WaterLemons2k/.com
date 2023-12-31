import handleFileInput from './input.js';

/**
 * @type {HTMLInputElement}
 */
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', handleFileInput);