/**
 * Surge 網路詳情面板
 * 本人 @Nebulosa-Cat僅翻譯為繁體中文自用
 * Net Info 面板模組原始作者 @author: Peng-YM
 * 並與另一位 聰聰大佬(@congcong) 大的節點資訊面板進行整合
 * 並且感謝Pysta大佬、野比大佬(@NobyDa)、皮樂大佬(@Hiraku)技術支援
 * 以及鴿子大佬(@zZPiglet)精簡化code
 */
const { wifi, v4, v6 } = $network;
let radio = $network["cellular-data"].radio;

let carrierName = '';
const carrierMap = {
  AS17421: '中華電信',
  AS9674: '遠傳電信',
  AS24158: '台灣大哥大',
  AS24157: '台灣之星',
  AS24154: '亞太電信',
};

if (!v4.primaryAddress && !v6.primaryAddress) {
  $done({
    title: '沒有網路',
    content: '尚未連接網際網路\n請檢查網際網路狀態後重試',
    icon: 'wifi.exclamationmark',
    'icon-color': '#CB1B45',
  });
} else {
  if (!wifi.ssid) {
    $httpClient.get('https://ipapi.co/asn', function (error, response, data) {
      if (error) {
        return;
      }
      carrierName = carrierMap[data] ? ' - ' + carrierMap[data] : '';
      getNetworkInfo();
    });
  } else {
    getNetworkInfo();
  }
}

function getNetworkInfo() {
  $httpClient.get('http://ip-api.com/json', function (error, response, data) {
    if (error) {
      $done({
        title: '發生錯誤',
        content: '無法獲得目前網路資訊\n請檢查網際網路狀態後重試',
        icon: 'wifi.exclamationmark',
        'icon-color': '#CB1B45',
      });
    }

    const info = JSON.parse(data);
    $done({
      title: wifi.ssid ? wifi.ssid : '行動數據' + carrierName,
      content:
        (wifi.ssid ? '' : `Radio : ${radio} \n`)+
        (v4.primaryAddress ? `IPv4 : ${v4.primaryAddress} \n` : '') +
        (v6.primaryAddress ? `IPv6 : ${v6.primaryAddress}\n` : '') +
        (v4.primaryRouter && wifi.ssid
          ? `Router IPv4 : ${v4.primaryRouter}\n`
          : '') +
        (v6.primaryRouter && wifi.ssid
          ? `Router IPv6 : ${v6.primaryRouter}\n`
          : '') +
        `節點 IP : ${info.query}\n` +
        `節點 ISP : ${info.isp}\n` +
        `節點位置 : ${getFlagEmoji(info.countryCode)} | ${info.country} - ${
          info.city
        }`,
      icon: wifi.ssid ? 'wifi' : 'simcard',
      'icon-color': wifi.ssid ? '#005CAF' : '#F9BF45',
    });
  });
}

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
