import downloadFile from './file/download.js';
import Filename from './file/filename.js';
import readAsText from './file/reader.js';
import M3U2TXT from './m3u2txt.js';

/**
 * @type {HTMLInputElement}
 */
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', async () => {
  /**
   * @type {File}
   */
  const [file] = fileInput.files;
  if (!file) return;

  try {
    const m3u = await readAsText(file);
    const txt = M3U2TXT(m3u);

    const filename = new Filename(file.name);
    filename.extension = 'txt';

    downloadFile(txt, filename);
  } catch (e) {
    alert(e);
  }
});
