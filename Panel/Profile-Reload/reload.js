$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("配置重載","成功","")
    $done({
        icon: "arrow.triangle.2.circlepath.doc.on.clipboard",
        title: "Profiles Reload",
        content: "配置檔案重載成功",
        "icon-color": "#8B81C3"
     })
    });