# PrivadoVPN WireGuard / AmneziaWG Toolchain

Toolchain to download, clean, patch (AmneziaWG parameters + DNS + Keepalive), and bundle PrivadoVPN WireGuard configs for WG Tunnel.

## 1. Quick Install on Arch / Linux
```bash
sudo curl -sSL [https://raw.githubusercontent.com/](https://raw.githubusercontent.com/)<YOUR_GITHUB_USERNAME>/privado-wg-tool/main/fix-privado -o /usr/local/bin/fix-privado
sudo chmod +x /usr/local/bin/fix-privado


2. Browser Bookmarklet (One-Click Downloader)
javascript:(async function(){const e=["Amsterdam","Brussels","Istanbul","Washington","Mexico City","Mumbai","Seoul","Singapore","Tokyo","Toronto"],t=document.getElementById("id_city_wg");if(!t)return void alert("منوی شهرها پیدا نشد!");const n=Array.from(document.querySelectorAll("button, input[type='submit'], a")).find((e=>e.textContent.trim().toLowerCase().includes("download configuration")||e.value?.toLowerCase().includes("download")));if(!n)return void alert("دکمه دانلود پیدا نشد!");const o=Array.from(t.options);for(let a=0;a<e.length;a++){const r=e[a],i=o.find((e=>e.text.toLowerCase().includes(r.toLowerCase())));i&&(t.value=i.value,t.dispatchEvent(new Event("change",{bubbles:!0})),await new Promise((e=>setTimeout(e,600))),n.click(),await new Promise((e=>setTimeout(e,2500))) )}})();


3. Usage
Open PrivadoVPN Web Panel -> WireGuard Tab.

Click the Bookmarklet to download the 10 configs.

Open terminal in ~/Downloads/wireguard and run:

fix-privado
Import wgtunnel-import.zip into WG Tunnel.

