// Fetch visitor data using an IP Data API (replace 'YOUR_API_KEY' with your actual API key)
const apiKey = "fe92c86eeb4e4fa1a81992e01bdcd3db";
const apiUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("visitor-ip").textContent = data.ip;
    document.getElementById("visitor-isp").textContent = data.org;
    document.getElementById(
      "visitor-location"
    ).textContent = `${data.city}, ${data.country_name}`;
    document.getElementById("visitor-os").textContent = data.os.name;
  })
  .catch((error) => console.error("Error fetching visitor data:", error));
