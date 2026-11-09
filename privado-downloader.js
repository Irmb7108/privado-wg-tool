(async function downloadMyExactTenServers() {
    console.log("%c[*] شروع دانلود ۱۰ سرور منتخب شما...", "color: #00bcd4; font-weight: bold;");

    const myServers = [
        "Amsterdam",
        "Brussels",
        "Istanbul",
        "Washington",
        "Mexico City",
        "Mumbai",
        "Seoul",
        "Singapore",
        "Tokyo",
        "Toronto"
    ];

    const select = document.getElementById("id_city_wg");
    if (!select) {
        console.error("[-] منوی کشویی سرورها پیدا نشد!");
        return;
    }

    const btn = Array.from(document.querySelectorAll("button, input[type='submit'], a"))
        .find(el => el.textContent.trim().toLowerCase().includes("download configuration") || el.value?.toLowerCase().includes("download"));

    if (!btn) {
        console.error("[-] دکمه Download configuration پیدا نشد!");
        return;
    }

    const allOptions = Array.from(select.options);

    for (let i = 0; i < myServers.length; i++) {
        const cityName = myServers[i];

        const targetOpt = allOptions.find(opt => 
            opt.text.toLowerCase().includes(cityName.toLowerCase())
        );

        if (!targetOpt) {
            console.warn(`[!] شهر ${cityName} در لیست پنل پیدا نشد.`);
            continue;
        }

        console.log(`%c[${i + 1}/10] در حال دانلود: ${targetOpt.text.trim()}...`, "color: #4caf50");

        select.value = targetOpt.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));

        await new Promise(r => setTimeout(r, 600));

        btn.click();

        await new Promise(r => setTimeout(r, 2500));
    }

    console.log("%c[✓] هر ۱۰ سرور با موفقیت دانلود شدند! اکنون در ترمینال دستور fix-privado را اجرا کنید.", "color: #8bc34a; font-weight: bold;");
})();