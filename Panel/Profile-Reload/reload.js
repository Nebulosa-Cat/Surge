!(async () => {
    let panel = { title: "Profile Reload" }

    if (typeof $argument != "undefined") {
        let arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));
        if (arg.title) panel.title = arg.title;
        if (arg.icon) panel.icon = arg.icon;
        if (arg.color) panel["icon-color"] = arg.color;
        if (arg.server == "false") showServer = false;
    }
    if ($trigger == "button") await httpAPI("/v1/profiles/reload");
    panel.content = `配置檔案重載成功`;
    $done(panel);
})();

function httpAPI(path = "", method = "POST", body = null) {
    return new Promise((resolve) => {
        $httpAPI(method, path, body, (result) => {
            resolve(result);
        });
    });
}

/*
$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("配置重載","成功","")
    $done({
        title: "Profile Reload",
        content: "配置檔案重載成功",
        icon: "{{{icon}}}",
        "icon-color": "{{{iconColor}}}",
     })
    });
*/