const main = () => {
  if (location.hostname !== 'waterlemons2k.com' &&
    location.hostname.startsWith('waterlemons2k')) {
    location.replace('http://waterlemons2k.com');
  }

  generateLink();
}

const generateLink = () => {
  const link = {
    counter: '计数器',
    stopwatch: '秒表',
    time: '时间',
    'http://github.com/WaterLemons2k': 'GitHub',
    'http://alpine.waterlemons2k.com': 'Alpine',
    'http://blog.waterlemons2k.com': '博客',
    'http://file.waterlemons2k.com': '文件',
    marquee: '滚动文字',
    text: '文字',
    '3minutes.gif': '泡面3分钟',
    lmbtfy: '让我帮你百度一下',
    swftoexe: 'SWF 转 EXE',
    Coin: '掷硬币',
    QRCode: '二维码',
    Snake: '贪吃蛇',
  };

  const ul = document.createElement('ul');

  let ulInnerHTML = '';
  for (const [href, content] of Object.entries(link)) {
    ulInnerHTML += `<li>
      <a href="${href}">${content}</a>
    </li>`;
  }
  ul.innerHTML = ulInnerHTML;

  document.body.appendChild(ul);
}

main();