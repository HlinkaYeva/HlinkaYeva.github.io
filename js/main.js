const searchBtn = document.querySelector('#search-btn'),
      searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const menuBtn = document.querySelector('#menu-btn'),
      navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
  });