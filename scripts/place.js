// Get DOM elements
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");
const windChillSpan = document.querySelector("#windChill");

// 1. Display current year in the footer
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 2. Display document's last modified date
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

// 3. Static values (from your weather section)
const temperature = -5; // degrees Celsius
const windSpeed = 15;   // km/h

// 4. Wind chill formula for °C (valid when temp <= 10°C and wind > 4.8 km/h)
function calculateWindChill(temp, speed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// 5. Display calculated wind chill or "N/A"
if (windChillSpan) {
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChillSpan.textContent = "N/A";
    }
}
