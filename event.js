
window.addEventListener('scroll',function(){
  const header = document.querySelector("header"); 

  header.classList.toggle("sticky",window.scrollY > 200);
})


// navbar 

const dropbar = document.querySelector(".dropdown-menu")

document.addEventListener('DOMContentLoaded', () => {
  const togglebtnicon = document.querySelector('.menu-icon i');
  togglebtnicon.onclick = () => {
    dropbar.classList.toggle('active');

    const isopen = dropbar.classList.contains('active');
    togglebtnicon.classList = isopen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
  };
});

//slider

const carousel = document.querySelector(".value-tank");
const arrowbtn = document.querySelectorAll(".arrow .right");

const firstcar = carousel.querySelector(".all-values").offsetWidth; 

arrowbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstcar : firstcar;
    });
});

const arrowbtn1 = document.querySelectorAll(".arrow .left");

arrowbtn1.forEach(btn => {
  btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "right" ? firstcar : -firstcar;
  });
});