/**
 * Surge 網路詳情面板
 * 本人 @Nebulosa-Cat僅翻譯為繁體中文自用
 * Net Info 面板模組原始作者 @author: Peng-YM
 * 並與另一位 @聰聰 大的節點資訊面板進行整合
 * 並且感謝Pysta大老、野比大佬(@NobyDa)、皮樂大佬(@Hiraku)技術支援
 * 以及鴿子大老(@zZPiglet)精簡化code
 */
 const { wifi, v4 } = $network;
 const v4IP = v4.primaryAddress;
 let url = "http://ip-api.com/json"

 ;(async () => {
    let result ={
        title: "Network Info Panel",
        content: "尚未連接網際網路\n請檢察網際網路狀態後再度測試",
        icon: "wifi.exclamationmark",
        'icon-color': "#CB1B45"
    }
    // No network connection
    if (!v4IP) {
        $done(result)
    } else {
    $httpClient.get(url, function(error, response, data){
        let jsonData = JSON.parse(data)
        let externalIP = jsonData.query
        let country = jsonData.country
        let emoji = getFlagEmoji(jsonData.countryCode)
        let city = jsonData.city
        let isp = jsonData.isp
        result['title'] =  wifi.ssid ? wifi.ssid : "行動數據"
        result['content'] = (wifi.ssid ? 內部 IP：${v4IP} \n : `內部 IP：${v4IP} \n`)
                            + (wifi.ssid ? 路由器地址：${v4.primaryRouter}\n : "")
                            + (wifi.ssid ? 外部 IP：${externalIP}\n : `外部 IP：${externalIP}\n`)
                            + (wifi.ssid ? 節點 ISP : ${isp}\n : `節點 ISP : ${isp}\n`)
                            + (wifi.ssid ? 節點位置 : ${emoji} ${country} | ${city} : `節點位置 : ${emoji} ${country} | ${city}`)
        result['icon'] = wifi.ssid ? "wifi" : "simcard"
        result['icon-color'] = wifi.ssid ? "#005CAF" : "#F9BF45"
        $done(result)
    })
}
 })()
 
 function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}