function loadHTML(filePath, targetSelector) {
  const targetElement = document.querySelector(targetSelector);

  if (!targetElement) {
    console.error(`Target element not found: ${targetSelector}`);
    return;
  }

  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      targetElement.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading HTML file:", error);
    });
}

// Приклад завантаження елементів
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("./html/header.html", "#header-placeholder");
  loadHTML("./html/footer.html", "#footer-placeholder");
  loadHTML("./html/sidebar.html", "#sidebar-placeholder");
  loadHTML("./html/main-article.html", "#main-article-placeholder");
});
