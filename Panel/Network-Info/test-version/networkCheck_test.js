/**
 * Surge 網路詳情面板
 * @Nebulosa-Cat
 * 詳情請見 README
 */
const { wifi, v4, v6 } = $network;

let cellularInfo = '';
const carrierNames = {
  //台灣電信業者 MNC Code
  '466-11': '中華電信', '466-92': '中華電信',
  '466-01': '遠傳電信', '466-03': '遠傳電信',
  '466-97': '台灣大哥大',
  '466-89': '台灣之星',
  '466-05': '亞太電信',
  //中國電信業者 MNC Code
  '460-03': '中國電信', '460-05': '中國電信', '460-11': '中國電信',
  '460-01': '中國聯通', '460-06': '中國聯通', '460-09': '中國聯通',
  '460-00': '中國移動', '460-02': '中國移動', '460-04': '中國移動', '460-07': '中國移動', '460-08': '中國移動',
  '460-15': '中國廣電',
  '460-20': '中國鐵路',
};

const radioGeneration = {
  'GPRS': '2.5G',
  'CDMA1x': '2.5G',
  'EDGE': '2.75G',
  'WCDMA': '3G',
  'HSDPA': '3.5G',
  'CDMAEVDORev0': '3.5G',
  'CDMAEVDORevA': '3.5G',
  'CDMAEVDORevB': '3.75G',
  'HSUPA': '3.75G',
  'eHRPD': '3.9G',
  'LTE': '4G',
  'NRNSA': '5G',
  'NR': '5G',
};

if (!v4.primaryAddress && !v6.primaryAddress) {
  $done({
    title: '沒有網路',
    content: '尚未連接網際網路\n請檢查網際網路狀態後重試',
    icon: 'wifi.exclamationmark',
    'icon-color': '#CB1B45',
  });
} else {
  if ($network['cellular-data']) {
    const carrierId = $network['cellular-data'].carrier;
    const radio = $network['cellular-data'].radio;
    if (carrierId && radio) {
      cellularInfo = carrierNames[carrierId] ?
        carrierNames[carrierId] + ' - ' + radioGeneration[radio] + ' (' + radio + ')' :
        '行動數據 - ' + radioGeneration[radio] + ' (' + radio + ')';
    }
  }
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
      title: wifi.ssid ? wifi.ssid : cellularInfo,
      content:
        (v4.primaryAddress ? `IPv4 : ${v4.primaryAddress} \n` : '') +
        (v6.primaryAddress ? `IPv6 : ${v6.primaryAddress}\n` : '') +
        (v4.primaryRouter && wifi.ssid ? `Router IPv4 : ${v4.primaryRouter}\n` : '') +
        (v6.primaryRouter && wifi.ssid ? `Router IPv6 : ${v6.primaryRouter}\n` : '') +
        `節點 IP : ${info.query}\n` +
        `節點 ISP : ${info.isp}\n` +
        `節點位置 : ${getFlagEmoji(info.countryCode)} | ${info.country} - ${info.city
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
