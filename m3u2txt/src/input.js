import { renameFileExtensionToTXT, readFileAsText } from './file.js';
import M3U2TXT from './m3u2txt.js';

/**
 * 处理文件输入并将文件内容从 M3U 转换为 TXT。
 * 
 * @returns {Promise<void>}
 */
export default async function handleFileInput() {
  const file = fileInput.files[0]
  if (!file) return;

  const fileName = renameFileExtensionToTXT(file.name);

  try {
    const text = await readFileAsText(file);
    M3U2TXT(text, fileName);
  } catch (e) {
    alert(e);
  }
}