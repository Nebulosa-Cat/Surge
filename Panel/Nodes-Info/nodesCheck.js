let url = "http://ip-api.com/json"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
  body = {
    title: "节点信息",
    content: `內部 IP：${ip} \n`
    + (wifi.ssid ? `路由器地址：${router}\n` : "")
    + `外部 IP：${externalIP}`
    + `ISP: ${isp}\n`
    + `位置: ${emoji}${country} - ${city}`,
    icon: "network"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}