let $ = document;

let navbar = $.querySelector('.navbar');
let menuBtn = $.querySelector('#menu-btn');
menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('active');
})