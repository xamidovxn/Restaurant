"use script"

const navMenu = document.querySelector('.menu');
const navSidebar = document.querySelector('.sidebar');

navMenu.addEventListener('click', function() {
    navSidebar.classList.toggle('hide');
})