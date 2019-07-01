"use strict";

// Add functionality to btns
const menuBtn = document.querySelector(".nav-trigger");
const closeBtn = document.querySelector(".nav-close");
const navMenu = document.querySelector(".nav");

function toggleMenu() {
  navMenu.classList.toggle("menu-hidden");
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Add img to menuBtn
menuBtn.innerHTML = "";
const menuImg = document.createElement("img");
menuImg.setAttribute("src", "images/ico-menu.svg");
menuBtn.appendChild(menuImg);
