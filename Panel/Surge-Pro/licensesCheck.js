if (typeof $argument != "undefined") {
    const arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));

    const licensesDate = arg.licensesDate;

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const todayTimestamp = Date.parse(today);
    const licensesDateTimestamp = Date.parse(licensesDate);

    // 相差日期計算
    const timeDiffCalc = function (a, b) {
        result = parseInt(Math.abs(a - b) / 86400000);
        return result;
    }
    const timeDiff = timeDiffCalc(todayTimestamp, licensesDateTimestamp);

    // 授權未過期
    if (todayTimestamp < licensesDateTimestamp) {
        $done({
            title: "Surge Pro® License Status",
            content: `授權活躍中，在 ${timeDiff} 天後過期。`,
            icon: 'checkmark.icloud',
            'icon-color': '#5DAC81',
        });
    }
    // 授權已過期
    else if (todayTimestamp > licensesDateTimestamp) {
        $done({
            title: "Surge Pro® License Status",
            content: `授權已過期 ${timeDiff} 天，請重新訂閱`,
            icon: 'xmark.icloud',
            'icon-color': '#DB4D6D',
        });
    } else {
        $done({
            title: "Surge Pro® License Status",
            content: "今天即將過期，請重新訂閱",
            icon: 'exclamationmark.icloud',
            'icon-color': '#F6C555',
        });
    }
}
