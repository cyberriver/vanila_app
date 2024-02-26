// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers/index";
import "./controllers/application";
import "./controllers/hello_controller";

document.addEventListener("DOMContentLoaded", () => {
  // Находим элемент с классом .notice-show
  const noticeElement = document.querySelector(".notice-show");

  // Если элемент найден, добавляем класс для скрытия через 4 секунды
  if (noticeElement) {
    setTimeout(() => {
      noticeElement.classList.remove("notice-show");
    }, 4000); // 4000 миллисекунд (4 секунды)
  }
});


