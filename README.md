<div align="center">

# PrivadoVPN WireGuard / AmneziaWG Toolchain

<img src="assets/preview.png" alt="Privado Toolchain Preview" width="700">

<p>Automated PrivadoVPN WireGuard & AmneziaWG patcher for WG Tunnel.</p>

</div>

---


## Features

- **Automated Web Panel Downloader:** Downloads your 10 preferred server profiles in seconds.
- **De-branding & Standard Naming:** Strips `privado` prefixes and names files cleanly (e.g., `Amsterdam ams-033.conf`).
- **AmneziaWG Obfuscation:** Injects obfuscation parameters (`Jc = 4`, `Jmin = 40`, `Jmax = 70`, `H1-H4`, `S1-S2`, `MTU = 1280`).
- **High-Performance DNS & Keepalive:** Enforces Cloudflare and Google resolvers (`1.1.1.1`, `8.8.8.8`) with `PersistentKeepalive = 25`.
- **One-Click Packaging:** Automatically generates `wgtunnel-import.zip` ready for import.
- **Auto Cleanup:** Automatically purges configuration files older than 3 days.

---

## WG Tunnel Installation & Service Management

### Installation (Arch Linux / CachyOS)

Install WG Tunnel directly from the AUR using your preferred helper:

```bash
yay -S wgtunnel-bin
```
Service Management (Systemd)
Start and enable the background daemon service:
# Enable and start immediately
```bash
sudo systemctl enable --now wgtunnel
```

Installation (fix-privado CLI)
Run this command to download and install the CLI tool directly:
```bash
sudo curl -sSL [https://raw.githubusercontent.com/Irmb7108/privado-wg-tool/main/fix-privado](https://raw.githubusercontent.com/Irmb7108/privado-wg-tool/main/fix-privado) -o /usr/local/bin/fix-privado && sudo chmod +x /usr/local/bin/fix-privado
```
Browser Automation Setup (Auto-Downloader)
You can automate the download of all 10 profiles using the code stored in privado-downloader.js. Choose either method below:

## Method 1: One-Click Bookmarklet (Recommended)
Open privado-downloader.js and copy its entire raw code.

Show your browser bookmarks bar (Ctrl + Shift + B).

Right-click the bar and select Add Page (or Add Bookmark).

Set the Name to: ⚡ Download 10 Privado

In the URL field, type javascript: and immediately paste the copied code after it.

Click Save.

## Method 2: DevTools Snippets (Console)
Open the PrivadoVPN WireGuard panel and press F12.

Go to the Sources tab, click the >> icon in the left pane, and choose Snippets.

Click + New snippet, name it privado-downloader, and paste the contents of privado-downloader.js.

Press Ctrl + S to save.

Press Ctrl + Enter anytime you want to run the script.

How to Use
Log into your PrivadoVPN dashboard and navigate to the manual WireGuard section:https://app.privadovpn.com/en/admin-panel

Click your browser bookmarklet (or run the snippet) and wait until all 10 profiles are saved.

Open your terminal in the directory where the profiles were downloaded (e.g., ~/Downloads/wireguard) and execute:
```bash
fix-privado
```
Open the WG Tunnel app and import the generated wgtunnel-import.zip archive.
CLI Options
Plaintext
Usage: fix-privado [OPTIONS]

Options:
  -h, --help       Show help and usage details
  -v, --version    Show version information
  -c, --clean      Purge output directory and zip archive
  
