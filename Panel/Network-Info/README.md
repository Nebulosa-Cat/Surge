<h1 align="center">Network-Info</h1>

<h4 align="center">一個基於 Surge 4 網路調試工具的網路資訊面板 </h4>

<p align="center">
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/cell.JPG" width="300"></img>
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/wifi.JPG" width="300"></img>
<img src="https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/img/error.JPG" width="300"></img>
</p>
<p align="center">
  <a href="/Panel/Network-Info/README.md">繁體中文</a> |
  <a href="/Panel/Network-Info/READMEs/README.cn.md">简体中文</a> |
  <a href="/Panel/Network-Info/READMEs/README.jpn.md">日本語</a> |
  <a href="/Panel/Network-Info/READMEs/README.en.md">English</a>
</p>

## 功能
1. 行動網路下顯示<br>- 行動數據 ISP 業者* & LTE、SA、NSA 等類型<br>- 本地 IPv4、IPv6 位址<br>- 代理節點 ISP、位置
2. Wi-Fi 下顯示<br>- 本地 IPv4、IPv6 位址<br>- Router IPv4、IPv6 位址<br>- 代理節點 ISP、位置<br>
*註1: iOS 16.4 之後蘋果不再開放 APP 取得 MCC 與 MNC 編碼，因此升級系統後已經不再支援顯示電信業者

## How to use
### 1. 安裝環境
**需要有網路調試工具 Surge ，且要付費至具有面板功能**<br>
最低支援版本 :<br>
>**AppStore 版 4.9.3 或更新版本**<br>
>**TestFlight 版 4.11.0 (2014) 或更新版本**
### 2. 模組安裝連結
> **繁體中文正式版 :** https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/Network-Info.sgmodule<br>
> **簡體中文正式版 :** https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/cn/Network-Info_CN.sgmodule<br>
> **繁體中文測試版 :** https://raw.githubusercontent.com/Nebulosa-Cat/Surge/test/Panel/Network-Info/Network-Info-Test.sgmodule<br>
> **簡體中文測試版 :** https://raw.githubusercontent.com/Nebulosa-Cat/Surge/test/Panel/Network-Info/cn/Network-Info-Test_CN.sgmodule<br>
### 3. 安裝方式
打開 Surge -> 模組 -> 安裝新模組... -> 填入上方安裝連結 -> 完成!
### 4. 更新模組方式
**請按照以下步驟更新**<br>
#### 更新模組本身 : 
>Surge -> 模組 -> 找到本模組 -> 左滑後點擊更新<br>
#### 更新外部資源 : 
>點擊首頁最上方打開 Profile 頁面 -> 更新外部資源 <br>

若仍有問題可以參考[這篇教學](https://www.jkg.tw/p3604/) <br>
**兩次更新之間建議 _間隔 5 分鐘以上_，否則有機率頁面暫存檔尚未更新導致更新失敗<br>
(檢查方式為 Surge -> 腳本 -> 腳本編輯器 -> 載入 -> 選擇networkCheck.js -> 檢查代碼是否與網頁版本相同**


## 注意事項
1. 電信業者顯示功能改使用 $network 實現，透過 MNC 代碼進行查錶，不再透過直連 API 網站以提高隱私性
2. 歡迎透過 Pull Request 提交翻譯版本 與 補充其他電信業者資料 (MNC 代碼)

## 共同作者
**Hiraku :**  code 重構以及電信業者顯示功能編寫<br>
**Samuel :**  Retry 功能及錯誤紀錄功能編寫<br>

## 翻譯作者
**TPCTPCTPC :**  EN 英文版本README翻譯<br>
**Rabbit-Spec :**  CN 簡中版本翻譯<br>

## Special thanks to
> **@Peng-YM :** Net-Info 面板模組原作者<br>
>
> **聰聰 @congcong :** sub-info 面板模組原作者<br>
> 
> **Pysta @mieqq :** 程式支援<br>
> 
> **鴿子 @zZPiglet :** code 重構 <br>

__以上順序不分排名__
