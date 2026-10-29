const menuhumberger = document.querySelector(".humberger-icon");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");

menuhumberger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

main.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
