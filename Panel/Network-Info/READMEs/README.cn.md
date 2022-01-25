<h1 align="center"> Network-Info (网络信息) </h1>

<h4 align="center"> 一个基于 Surge 4 客户端展示网络信息面板工具 </h4>

<p align="center">
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/Cell.PNG" width="300"></img>
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/wifi.PNG" width="300"></img>
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/error.PNG" width="300"></img>
</p>
<p align="center">
  <a href="/Panel/Network-Info/READMEs/README.cn.md">简体中文</a> |
  <a href="/Panel/Network-Info/README.md">繁體中文</a> |
  <a href="/Panel/Network-Info/READMEs/README.jpn.md">日本語</a> |
  <a href="/Panel/Network-Info/READMEs/README.en.md">English</a>
</p>

## 功能
1. 蜂窝网络下显示<br>- 蜂窝数据 ISP  & LTE、SA、NSA 等类型<br>- 本地 IPv4、IPv6 位址<br>- 代理节点 ISP、位置
2. Wi-Fi 下显示<br>- 本地 IPv4、IPv6 地址<br>- 路由器 IPv4、IPv6 地址<br>- 代理节点 ISP、位置

## How to use
### 1. 安装环境
**需要安装 Surge 客户端 ，并解锁面板功能**<br>
最低支持 :<br>
>**AppStore 商店版 4.9.3 或更新版本**<br>
>**TestFlight 测试版 4.11.0 (2014) 或更新版本**
### 2. 模块安装链接
> **繁体中文正式版 :** https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/Network-Info.sgmodule<br>
> **简体中文正式版 :** https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/cn/Network-Info_CN.sgmodule<br>
### 3. 安裝方式
打开 Surge -> 模块 -> 安装新模块... -> 复制上方链接地址进行安装 -> 完成!
### 4. 更新模块方式
**请按照以下方式进行更新**<br>
#### 模块更新 : <br>
>Surge -> 模块 -> 找到需要更新的模块 -> 右滑点击更新完成更新<br>
#### 更新外部资源 : <br>
>点击首页左上角打开 配置列表 页面 -> 点击外部资源找到需要更新的资源，右滑点击完成更新，或者点击全部更新等待资源更新完成 <br>

其他问题可以参考 [这篇教程](https://www.jkg.tw/p3604/) <br>
**更新时间建议间隔 5 分钟以上 ，更新间隔时间过短可能因页面缓存导致更新失败<br>
(检查更新是否完成) Surge -> 脚本 -> 编辑器 -> 載入需要更新的脚本 -> 检查代码是是否与网页最新版本相同**


## 注意事項
1. 运营商显示功能改使用 $network 实现，通过 MNC 代码进行查询，不再使用 API 网站查询以提高隐私性
2. 欢迎通过 拉取请求 提交更多语言翻译版本 与 补充其他电信运营商资料 (MNC 代码)

## 共同作者
### **@hirakujira :**  code 重构以及增加电信运营商信息显示
## Special thanks to
> **@Peng-YM :** Net-Info 面板模块原作者<br>
>
> **聪聪 @congcong :** sub-info 面板模块原作者<br>
> 
> **Pysta @mieqq :** 友情协助<br>
> 
> **鸽子 @zZPiglet :** code 重构 <br>

__以上出场排名不分先后__
