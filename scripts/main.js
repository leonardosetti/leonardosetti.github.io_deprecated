document.addEventListener("DOMContentLoaded", function () {
  const menuList = document.getElementById("menu-list");
  const themeSelect = document.getElementById("theme-select");
  const carouselContainer = document.getElementById("carousel-container");

  // Menu items
  const menuItems = ["Home", "Profile", "Projects"];
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    menuList.appendChild(li);
  });

  // Theme options
  const themeOptions = [
    "Gruvbox Dark",
    "Monokai",
    "Belafonte Day",
    "Chalk",
    "Chalkboard",
  ];
  themeOptions.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme.toLowerCase().replace(" ", "-");
    option.textContent = theme;
    themeSelect.appendChild(option);
  });

  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;
    document.getElementById("theme-style").href = `styles/${selectedTheme}.css`;
  });

  // Carousel items
  const carouselItems = ["SQA", "BDD", "Agile Methods", "FOSS tools for SQA"];
  carouselItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "carousel-item";
    div.textContent = `Brief text about ${item}`;
    carouselContainer.appendChild(div);
  });

  // You can add more JavaScript functionality here if needed
});
