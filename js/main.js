// Global variables
const menuTogleIcon = document.getElementById('menu-toggle-icon')
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-mobile .list-link');

console.log(navLinks);
// Toggle navigation
const toggleMenu = () =>{
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);

//Add/remove header border bottom on scroll
const headerScorllEvent = () => {
    if(this.scrollY >= 30){
        headerElement.classList.add('active-scroll');
    }else{
        headerElement.classList.remove('active-scroll');
    }
}

window.addEventListener('scroll', headerScorllEvent)

// Add selected link styles to the link clicked and close navigation when clicking the links
navLinks.forEach(Link => Link.addEventListener('click', () => {
    navMobile.classList.remove('active');
    headerElement.classList.remove('active');

    let current = document.getElementsByClassName('current');
    current[0]
}));

// Scroll Reveal