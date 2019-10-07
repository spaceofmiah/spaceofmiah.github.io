/**
 * toggling navbar
 */
const navbar_toggler = document.getElementById('nav_toggler');
const navbar_links = document.getElementById('navbar_links');
const content_area = document.querySelector('main');

const toggle = () => {
    navbar_links.classList.toggle('active_navbar');
	if (navbar_links.classList.contains('active_navbar')) {
        // show a close button  --> to close the navbar
		navbar_toggler.children[0].classList.replace('fa-bars', 'fa-times');
		navbar_toggler.children[0].style.color = 'coral';
	} else {
        // show an hambourger button --> to open the navbar
		navbar_toggler.children[0].classList.replace('fa-times', 'fa-bars');
		navbar_toggler.children[0].style.color = 'white';
	}
}

navbar_toggler.addEventListener('click', toggle);

/**
 * close navbar when a user touches the screen
 */
content_area.addEventListener('touchstart', ()=> {
    // when a user tries to scroll down a page with the navbar open,
    // automatically close it.
    if(navbar_links.classList.contains('active_navbar')){
        console.log("i")
        toggle();
    };
})


/**
 * close navbar when a user click the screen
 */
content_area.addEventListener('click', ()=> {
    // when a user tries to scroll down a page with the navbar open,
    // automatically close it.
    if(navbar_links.classList.contains('active_navbar')){
        console.log("i")
        toggle();
    };
})

/**
 * hide navbar on window resize
 */
window.addEventListener('resize', () => {
	if (window.innerWidth >= 620) {
		if (navbar_links.classList.contains('active_navbar')) {
            navbar_links.classList.remove('active_navbar');     // remove the navbar
            
            // whenever a navbar is displayed on a small screen, there's also a
            // button to close the navbar, change close button to the default 
            // navbar button
			navbar_toggler.children[0].classList.replace('fa-times', 'fa-bars');
			navbar_toggler.children[0].style.color = 'white';
		}
	}
});
