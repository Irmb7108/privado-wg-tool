# PrivadoVPN WireGuard / AmneziaWG Toolchain
<p align="center">
  <img src="assets/preview.png" alt="Privado Toolchain Preview" width="700">
</p>
Automated toolchain to download, sanitize, patch, and package PrivadoVPN WireGuard profiles with AmneziaWG obfuscation for WG Tunnel.

---

## Features
- Automated Web Panel Downloader: Downloads your 10 preferred server profiles in seconds.
- De-branding & Standard Naming: Strips privado prefixes and names files cleanly (e.g. Amsterdam ams-033.conf).
- AmneziaWG Obfuscation: Injects parameters (Jc=4, Jmin=40, Jmax=70, H1-H4, S1-S2, MTU=1280).
- High Performance DNS: Sets resolvers to 1.1.1.1 and 8.8.8.8 with PersistentKeepalive = 25.
- One-Click Packaging: Automatically generates wgtunnel-import.zip ready for import.
- Auto Cleanup: Removes configurations older than 3 days.

---

## Installation (Arch Linux / Linux)

Run this command to install the CLI tool:

sudo curl -sSL https://raw.githubusercontent.com/Irmb7108/privado-wg-tool/main/fix-privado -o /usr/local/bin/fix-privado && sudo chmod +x /usr/local/bin/fix-privado

---

## Browser Bookmarklet (One-Click Downloader)


---

## How to Use

1. Log into your PrivadoVPN dashboard and navigate to the WireGuard section:
   https://app.privadovpn.com/en/admin-panel
2. Click your browser bookmarklet and let it download the 10 profiles.
3. Open your terminal in the directory where files are downloaded and execute:
   fix-privado
4. Import wgtunnel-import.zip directly into WG Tunnel.

---

## CLI Options

fix-privado -h : Show help and usage details
fix-privado -v : Show version
fix-privado -c : Clean output folder and zip file
