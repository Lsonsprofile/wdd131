const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

// Static values from your weather section
const temperature = 15; // °C
const windSpeed = 5;    // km/h

// Wind chill formula (Environment Canada version)
function calculateWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
  } else {
    return "N/A"; // Not applicable if temp > 10°C or wind too low
  }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  const windChill = calculateWindChill(temperature, windSpeed);

  // Create a new paragraph for wind chill
  const weatherBox = document.querySelector(".weather-box");
  const windChillPara = document.createElement("p");
  windChillPara.textContent = `Wind Chill: ${windChill}°C`;

  // Append to weather section
  weatherBox.appendChild(windChillPara);
});