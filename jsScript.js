const dropContainer1 = document.getElementById("drop-container1");
const dropContainer2 = document.getElementById("drop-container2");
const drop1 = document.querySelectorAll(".drop1");
const drop2 = document.querySelectorAll(".drop2");
const nav = document.querySelector("nav");
const dropdown1 = function () {
  drop1.forEach((element) => {
    element.classList.toggle("drop-text");
  });
  // nav.style.backgroundColor = "transparent";
};
const dropdown2 = function () {
  drop2.forEach((element) => {
    element.classList.toggle("drop-text");
  });
  // nav.style.backgroundColor = "transparent";
};
dropContainer1.addEventListener("mouseenter", dropdown1);
dropContainer1.addEventListener("mouseleave", dropdown1);
dropContainer2.addEventListener("mouseenter", dropdown2);
dropContainer2.addEventListener("mouseleave", dropdown2);


const menuBars = document.getElementById('menu-bars');
const close1 = document.querySelector('.close-menu')
const menuFunction = function () {
    nav.style.display = "flex";
    close1.style.display = "block";
}
menuBars.addEventListener("click", menuFunction);

const closeFunction = function () {
    nav.style.display = "none";
    close1.style.display = "none";
}
close1.addEventListener('click', closeFunction);
