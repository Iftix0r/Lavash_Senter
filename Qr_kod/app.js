/**
 * Lavash Senter - Free Wi-Fi QR Code Application Code
 * Handles Lucide icons, QR code compilation, and interactive styles.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide Icons for premium visual badges
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    } else {
        console.warn("Lucide library not loaded.");
    }

    // 2. Wi-Fi QR Code Parameters
    const ssid = "LavashSentr";
    const password = "Lavashzakaz";
    const security = "WPA";
    const isHidden = false;

    // Standard Wi-Fi QR code payload format:
    // WIFI:S:<SSID>;T:<WPA|WEP|blank>;P:<PASSWORD>;H:<true|false|blank>;;
    const qrPayload = `WIFI:S:${ssid};T:${security};P:${password};H:${isHidden};;`;

    // 3. Generate QR Code
    const qrContainer = document.getElementById("qrcode");
    if (qrContainer) {
        // Clear any loading indicator
        qrContainer.innerHTML = "";

        try {
            new QRCode(qrContainer, {
                text: qrPayload,
                width: 220,
                height: 220,
                colorDark: "#201D1A",  // High-contrast charcoal to guarantee 100% scanner compatibility
                colorLight: "#FFFFFF", // Pure white background for maximum scanning reliability
                correctLevel: QRCode.CorrectLevel.H // High correction level (better scanner resilience)
            });
        } catch (error) {
            console.error("Failed to generate QR Code: ", error);
            qrContainer.innerHTML = "<p style='color: red; font-size: 12px;'>Xatolik yuz berdi. QR Kod yaratilmadi.</p>";
        }
    }
});

/**
 * Toggles color theme between standard Warm Cream and Luxury Dark
 * (Only affects on-screen browser preview; print mode remains optimized for white paper)
 */
function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    const themeButton = document.getElementById("theme-btn");
    
    if (currentTheme === "dark") {
        htmlElement.removeAttribute("data-theme");
        if (themeButton) {
            themeButton.innerHTML = `<i data-lucide="palette"></i> Rang mavzusi`;
            lucide.createIcons();
        }
    } else {
        htmlElement.setAttribute("data-theme", "dark");
        if (themeButton) {
            themeButton.innerHTML = `<i data-lucide="sun"></i> Och rang`;
            lucide.createIcons();
        }
    }
}
