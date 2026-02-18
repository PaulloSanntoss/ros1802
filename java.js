const hamburger = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

// Alterna a visibilidade do menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Fecha o menu ao clicar em qualquer link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});