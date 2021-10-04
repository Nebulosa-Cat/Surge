<h1 align="center">Network-Info</h1>

<h4 align="center">一個基於 Surge 4 網路調試工具的網路資訊面板 </h4>

<p align="center">
  <a href="/README.md">繁體中文</a> |
  <a href="/READMEs/README.en.md">English</a> |
  <a href="/READMEs/README.jpn.md">日本語</a>
</p>

### 功能
1. 行動網路下顯示<br>- 行動數據 ISP 業者 & LTE、SA、NSA 等類型<br>- 本地 IPv4、IPv6 位址<br>- 代理節點 ISP、位置
2. Wi-Fi 下顯示<br>- 本地 IPv4、IPv6 位址<br>- Router IPv4、IPv6 位址<br>- 代理節點 ISP、位置

# How to use
### 安裝環境
需要有網路調試工具 Surge ，且要付費至具有面板功能<br>- AppStore 版 4.9.3 或更新版本<br>- TestFlight 版 4.11.0 (2014) 或更新版本
### 模組安裝連結
繁體中文正式版 : https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/Network-Info.sgmodule<br>
簡體中文正式版 : https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/cn/Network-Info_CN.sgmodule<br>
測試版 : https://raw.githubusercontent.com/Nebulosa-Cat/Surge/main/Panel/Network-Info/test-version/Network-Info_test.sgmodule

# 注意事項
1. 電信業者顯示功能改使用 $network 實現，透過 MNC 代碼進行查錶，不再透過直連 API 網站以提高隱私性
2. 歡迎透過 PR 補充其他電信業者資料 (MNC 代碼)

# 共同作者
### @hirakujira `code 重構以及電信業者顯示功能編寫`
# Special thanks to
### @Peng-YM `Net-Info 面板模組原作者`
### 聰聰 @congcong `sub-info 面板模組原作者`
### Pysta @mieqq `程式支援`
### 鴿子 @zZPiglet `code 重構`
`以上順序不分排名`
