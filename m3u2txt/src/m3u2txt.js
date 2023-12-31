import { downloadFile } from './file.js';

/**
 * 将 M3U 文件转换为 TXT。
 * 
 * @param {string} M3U - M3U 文件内容
 * @param {string} fileName - TXT 的文件名
 * @returns {void}
 */
export default function M3U2TXT(M3U, fileName) {
  // M3U 的文件头和信息行
  const M3U_HEAD = '#EXTM3U',
    M3U_INFO = '#EXTINF';

  if (!M3U.includes(M3U_HEAD) || !M3U.includes(M3U_INFO)) {
    throw new Error('M3U 文件无效！');
  }

  const lines = M3U.split(/\r?\n/),
    TXT = [];

  // M3U 第一行为文件头，忽略
  lines.shift();

  for (const line of lines) {
    if (line.startsWith(M3U_INFO)) {
      // 从 M3U 信息行中提取标题
      const [, title] = line.split(',');
      TXT.push(`${title},`);
    } else {
      // 将 M3U 附加到 TXT 中
      TXT.push(`${line}\n`);
    }
  }

  // 删除多余的换行符
  TXT[TXT.length - 1] = TXT[TXT.length - 1].trim();

  const file = new File(TXT, fileName, { type: 'text/plain' });
  downloadFile(file);
}