<h1 align="center">Network-Info</h1>

<h4 align="center">A network information panel base on Surge 4 iOS. </h4>

<p align="center">
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/Cell.PNG" width="300"></img>
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/wifi.PNG" width="300"></img>
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/error.PNG" width="300"></img>
</p>
<p align="center">
  <a href="/Panel/Network-Info/README.md">繁體中文</a> |
  <a href="/Panel/Network-Info/READMEs/README.cn.md">简体中文</a> |
  <a href="/Panel/Network-Info/READMEs/README.jpn.md">日本語</a> |
  <a href="/Panel/Network-Info/READMEs/README.en.md">English</a>
</p>

## What to show
1. In Cellular<br>- ISP's names & service type(LTE/5G NSA/5G SA)<br>- IPv4/IPv6 address<br>- IPv4/IPv6 address & location for proxy
2. In Wi-Fi<br>- IPv4/IPv6 address<br>- Router's IPv4/IPv6 address<br>- IPv4/IPv6 address & location for proxy

## How to use
### 1. Installation
**Download Surge 4 on AppStore and purchase for Surge Pro, update and resubscribe for the panel feature if you found it invalid despite as a Pro user.**<br>
Minimum version required:<br>
>**4.9.3 on AppStore**<br>
>**4.11.0(2014) on TestFlight**
### 2. Download Link for the Module
> **Traditional Chinese:** https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/Network-Info.sgmodule<br>
> **Simplified Chinese:** https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/cn/Network-Info_CN.sgmodule<br>
> **English:** Not available yet:(<br>
### 3. Installation of Module
Open Surge app -> Modules -> Install New Module... -> Paste the URL -> OK and check!
### 4. Update the Module
**Instructions**<br>
#### File: 
>Surge -> Modules -> This Module -> Swipe left and click update.<br>
#### External Resources:
>Click the Profile name -> Click 'External Resources'. <br>

Still need a hand? Check this [Instruction](https://www.jkg.tw/p3604/)! <br>
**5-minute update intervals are recommended, or the update may failed due to the previous buffer.<br>
(Review in Surge -> Utilities -> Script Editor -> Load... -> choose networkCheck.js**


## Others
1. In concerns of privacy in looking-up for ISP information, this script uses $network to check the MNC code but the unsafe API.
2. Multi-language and more MNC codes are warmly welcommed, feel free to pull requests!

## Working on with
### **@hirakujira :**  code 重構以及電信業者顯示功能編寫
## Special thanks to
> **@Peng-YM :** Net-Info 面板模組原作者<br>
>
> **聰聰 @congcong :** sub-info 面板模組原作者<br>
> 
> **Pysta @mieqq :** 程式支援<br>
> 
> **鴿子 @zZPiglet :** code 重構 <br>

__以上順序不分排名__
