//日期處理
const dateObject = new Date()
const date = dateObject.getDate()
const month = dateObject.getMonth()
const year = dateObject.getFullYear()
const monthNums = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

let nowDate = `${year}-${monthNums[month]}-${date}`

//程式開始
if (typeof $argument != "undefined") {
    let arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));
    //授權未到期
    if (nowDate < arg.licensesDate){
        $done({
            title: "Surge Pro® Licenses Status",
            content: "授權活躍中",
            icon: 'checkmark.icloud',
            'icon-color': '#5DAC81',
        });
    }
    //授權今日到期
    else if (nowDate > arg.licensesDate){
        $done({
            title: "Surge Pro® Licenses Status",
            content: "授權已過期，請重新訂閱",
            icon: 'xmark.icloud',
            'icon-color': '#DB4D6D',
        });
    }
    else{
        $done({
            title: "Surge Pro® Licenses Status",
            content: "即將過期，請重新訂閱",
            icon: 'exclamationmark.icloud',
            'icon-color': '#F6C555',
        });
    }
}
