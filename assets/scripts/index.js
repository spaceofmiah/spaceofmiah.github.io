/**
 * toggling navbar
 */
const navbar_toggler = document.getElementById('nav_toggler');
const navbar_links = document.getElementById('navbar_links');
navbar_toggler.addEventListener('click', () => {
    navbar_links.classList.toggle('ani-smooth-out');
    navbar_links.classList.toggle('active_navbar');
});

/**
 * hide navbar on resize
 */
window.addEventListener('resize', ()=> {
    if (window.innerWidth >= 620){
        navbar_links.classList.contains('active_navbar') ? 
            navbar_links.classList.remove('active_navbar'): console.log()
    }
})