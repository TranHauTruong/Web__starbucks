const open__menu = document.querySelector(".ri-menu-2-line");
const close__menu = document.querySelector(".ri-close-line");
const listMenu = document.querySelector(".content_nav");

function handle__menu(event) {
  event.preventDefault();
  const isChecked = event.target.dataset.open;

  if (isChecked === "true") {
    open__menu.classList.add("none");
    close__menu.classList.add("show__menu");
    listMenu.classList.add("show__menu");
  } else {
    close__menu.classList.remove("show__menu");
    open__menu.classList.remove("none");
    listMenu.classList.remove("show__menu");
  }
}

open__menu.addEventListener("click", handle__menu);
close__menu.addEventListener("click", handle__menu);
