// const xhr = new XMLHttpRequest();
// xhr.open("GET", "header.html", true);
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     document.getElementById("header-placeholder").innerHTML = xhr.responseText;
//   }
// };
// xhr.send();

// document.addEventListener("DOMContentLoaded", () => {
//   const placeholder = document.getElementById("header-placeholder");

//   fetch("header.html") // Файл, який потрібно включити
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to load the file");
//       }
//       return response.text();
//     })
//     .then((data) => {
//       placeholder.innerHTML = data; // Вставляємо вміст у контейнер
//     })
//     .catch((error) => {
//       console.error("Error loading HTML file:", error);
//     });
// });

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
  loadHTML("header.html", "#header-placeholder");
  loadHTML("footer.html", "#footer-placeholder");
  loadHTML("sidebar.html", "#sidebar-placeholder");
  loadHTML("./html/main-article.html", "#main-article-placeholder");
});
