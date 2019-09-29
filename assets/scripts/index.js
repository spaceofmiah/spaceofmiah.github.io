// toggles navbar

const navbar_toggler = document.getElementById('navbar-toggler');
const navbar_content = document.getElementById('navbar-content');
const content = document.getElementById('content');

let flag = false;
navbar_toggler.addEventListener('click', ($event) => {
    if (flag === false){
        navbar_toggler.classList.remove('smooth-right-move');
        navbar_toggler.classList.add('smooth-left-move');
        flag = true
        navbar_content.classList.remove('faint-out')
        navbar_content.classList.add('faint-in')
        content.style.display = 'flex';
    } else {
        navbar_toggler.classList.remove('smooth-left-move');
        navbar_toggler.classList.add('smooth-right-move');
        flag = false
        navbar_content.classList.remove('faint-in')
        navbar_content.classList.add('faint-out')
        content.style.display = 'none'
    }
})