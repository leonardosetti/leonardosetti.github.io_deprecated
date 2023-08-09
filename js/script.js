// Fetch visitor data using an IP Data API (replace 'YOUR_API_KEY' with your actual API key)
const apiKey = "1be9a6884abd4c3ea143b59ca317c6b2";
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
