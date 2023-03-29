/*
 * Surge 网络信息面板
 * @Nebulosa-Cat
 * 详细请见 README
 */
const { wifi, v4, v6 } = $network;

let cellularInfo = '';

if (!v4.primaryAddress && !v6.primaryAddress) {
    $done({
        title: '没有网络',
        content: '尚未连接网络\n请检查网络后重试',
        icon: 'wifi.exclamationmark',
        'icon-color': '#CB1B45',
    });
} else {
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
            const radio = $network['cellular-data'].radio;
            if (info.city == undefined && info.district == undefined) {
                $done({
                    title: wifi.ssid ? wifi.ssid : info.isp + '(' + radio + ')',
                    content:
                        `公网 IPv4 : ${info.ip}\n` +
                        (v6.primaryAddress ? `IPv6 : ${v6.primaryAddress}\n` : '') +
                        `位置 : ${info.province}-${info.isp}`,
                    icon: wifi.ssid ? 'wifi' : 'simcard',
                    'icon-color': wifi.ssid ? '#007AFF' : '#F9BF45',
                });
            } else if (info.city == undefined && info.district != undefined) {
                $done({
                    title: wifi.ssid ? wifi.ssid : info.isp + '(' + radio + ')',
                    content:
                        `公网 IPv4 : ${info.ip}\n` +
                        (v6.primaryAddress ? `IPv6 : ${v6.primaryAddress}\n` : '') +
                        `位置 : ${info.province}${info.district}-${info.isp}`,
                    icon: wifi.ssid ? 'wifi' : 'simcard',
                    'icon-color': wifi.ssid ? '#007AFF' : '#F9BF45',
                });
            }else if (info.city != undefined && info.district == undefined) {
                $done({
                    title: wifi.ssid ? wifi.ssid : info.isp + '(' + radio + ')',
                    content:
                        `公网 IPv4 : ${info.ip}\n` +
                        (v6.primaryAddress ? `IPv6 : ${v6.primaryAddress}\n` : '') +
                        `位置 : ${info.province}${info.city}-${info.isp}`,
                    icon: wifi.ssid ? 'wifi' : 'simcard',
                    'icon-color': wifi.ssid ? '#007AFF' : '#F9BF45',
                });
            } else {
                $done({
                    title: wifi.ssid ? wifi.ssid : info.isp + '(' + radio + ')',
                    content:
                        `公网 IPv4 : ${info.ip}\n` +
                        (v6.primaryAddress ? `IPv6 : ${v6.primaryAddress}\n` : '') +
                        `位置 : ${info.province}${info.city}${info.district}-${info.isp}`,
                    icon: wifi.ssid ? 'wifi' : 'simcard',
                    'icon-color': wifi.ssid ? '#007AFF' : '#F9BF45',
                });
            };
        };
    });
}
