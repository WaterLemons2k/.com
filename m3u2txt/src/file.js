/**
 * 将文件扩展名重命名为 TXT。
 *
 * @param {string} fileName - 文件的名称。
 * @returns {string} - 扩展名为 TXT 的新文件名。
*/
export function renameFileExtensionToTXT(fileName) {
  const fileNameParts = fileName.split('.')

  // 如果文件名中有扩展名则删除
  if (fileNameParts.length > 1) {
    fileNameParts.pop();
  }

  fileNameParts.push('txt');
  return fileNameParts.join('.');
}

/**
 * 读取文本文件。
 * 
 * @param {File} file - 要读取的文件。
 * @returns {Promise<string>} - 以字符串形式 resolve 文件内容的 Promise。
 */
export async function readFileAsText(file) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);

    reader.readAsText(file);
  });
}

/**
 * 下载文件。
 * 
 * @param {File} file - 要下载的文件。
 */
export function downloadFile(file) {
  const a = document.createElement('a');
  const objectURL = URL.createObjectURL(file);

  a.href = objectURL;
  a.download = file.name;
  document.body.append(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(objectURL);
}