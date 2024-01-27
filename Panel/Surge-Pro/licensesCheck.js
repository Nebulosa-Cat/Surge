//日期處理
const dateObject = new Date()
const date = dateObject.getDate()
const month = dateObject.getMonth()
const year = dateObject.getFullYear()
const monthNums = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

let nowDate = `${year}-${monthNums[month]}-${date}`
let licensesDate = "2024-05-28"

//字串轉 Unix Time
let nowDateStamp = new Date(nowDate);
let licensesDateStamp = new Date(licensesDate);
//相差日期計算
let timeDiffCalc = function(nowDateStamp, licensesDateStamp){
    result = parseInt(Math.abs(licensesDateStamp - nowDateStamp) / 86400000);
    return result;
}
let timeDiff = timeDiffCalc(nowDateStamp,licensesDateStamp);

if (typeof $argument != "undefined") {
    let arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));
    //授權未過期
    if (nowDate < arg.licensesDate){
        $done({
            title: "Surge Pro® Licenses Status",
            content: `授權活躍中，再 ${timeDiff} 後過期。`,
            icon: 'checkmark.icloud',
            'icon-color': '#5DAC81',
        });
    }
    //授權已過期
    else if (nowDate > arg.licensesDate){
        $done({
            title: "Surge Pro® Licenses Status",
            content: `授權已過期 ${timeDiff} 天，請重新訂閱`,
            icon: 'xmark.icloud',
            'icon-color': '#DB4D6D',
        });
    }
    else{
        $done({
            title: "Surge Pro® Licenses Status",
            content: "今天即將過期，請重新訂閱",
            icon: 'exclamationmark.icloud',
            'icon-color': '#F6C555',
        });
    }
}