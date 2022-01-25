/**
 * Surge 网络信息面板
 * @Nebulosa-Cat
 * 详细请见 README
 */
const { wifi, v4, v6 } = $network;

let cellularInfo = '';
const carrierNames = {
    //中国电信运营商 MNC Code
    '460-03': '中国电信', '460-05': '中国电信', '460-11': '中国电信',
    '460-01': '中国联通', '460-06': '中国联通', '460-09': '中国联通',
    '460-00': '中国移动', '460-02': '中国移动', '460-04': '中国移动', '460-07': '中国移动', '460-08': '中国移动',
    '460-15': '中国广电',
    '460-20': '中国铁通',
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
        title: '没有网络',
        content: '尚未连接网络\n请检查网络后重试',
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
                '蜂窝数据 - ' + radioGeneration[radio] + ' (' + radio + ')';
        }
    }
    $httpClient.get('https://api.taokai.cc', function (error, response, data) {
        if (error) {
            $done({
                title: '发生错误',
                content: '无法获得当前网络信息\n请检查网络状态后重试',
                icon: 'wifi.exclamationmark',
                'icon-color': '#CB1B45',
            });
        } else {
            const info = JSON.parse(data);
            if (info.province == undefined) {
                $done({
                    title: wifi.ssid ? wifi.ssid : cellularInfo,
                    content:
                        `公网 IPv4 : ${info.ip}\n` +
                        (v6.primaryAddress ? `IPv6 : ${v6.primaryAddress}\n` : '') +
                        `位置 : ${info.city}${info.district}-${info.isp
                        }`,
                    icon: wifi.ssid ? 'wifi' : 'simcard',
                    'icon-color': wifi.ssid ? '#007AFF' : '#F9BF45',
                });
            } else {
                $done({
                    title: wifi.ssid ? wifi.ssid : cellularInfo,
                    content:
                        `公网 IPv4 : ${info.ip}\n` +
                        (v6.primaryAddress ? `IPv6 : ${v6.primaryAddress}\n` : '') +
                        `位置 : ${info.province}${info.city}${info.district}-${info.isp
                        }`,
                    icon: wifi.ssid ? 'wifi' : 'simcard',
                    'icon-color': wifi.ssid ? '#007AFF' : '#F9BF45',
                });
            };
        };
    });
}
