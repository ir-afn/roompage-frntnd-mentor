const burgerBtn = document.getElementById('burgerBtn');
const menu = document.getElementById('mobMenu');
const closeBtn = document.getElementById('closeBtn');
const logo = document.getElementById('logo');

burgerBtn.addEventListener('click', function (event) {
  menu.classList.add('menu-active');
  closeBtn.classList.add('close-button-active');
  burgerBtn.classList.add('hidden');
  logo.classList.add('hidden');
});

closeBtn.addEventListener('click', function (event) {
  menu.classList.remove('menu-active');
  closeBtn.classList.remove('close-button-active');
  burgerBtn.classList.remove('hidden');
  logo.classList.remove('hidden');
});