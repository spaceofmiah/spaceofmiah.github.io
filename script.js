// Available togglable theme scheme
let THEME_SCHEME = {
    moon: {foreground: '#ffffff',background: '#232323', cls:'lynk'},
    sun: {foreground: '#232323',background: '#ffffff', cls:'lynk'}
}

localStorage.removeItem('theme')

/*
Event handler that responds to theme change action.
main construct that initiates theme change.
*/
const changeTheme = (event) => {
    if(localStorage.getItem('theme') === 'sun'){
        localStorage.setItem('theme', 'moon');
    } 
    else {
        localStorage.setItem("theme", 'sun');
    }  
    updateTheme();
    changeThemeBtnIcon(event.target);
}

/*
changes the foreground and background of theme-able component
*/
const updateTheme = () => {
    let theme;

    localStorage.getItem('theme') === "sun" ? 
        theme = THEME_SCHEME.sun : theme = THEME_SCHEME.moon;
    document.querySelector('body').classList.toggle('light-bdy');
    document.querySelectorAll('a').forEach(tag => tag.classList.toggle(theme.cls));
}

/*
changes a theme button icon

: themeBtn -> DOMelement that initiates theme changing.
*/
const changeThemeBtnIcon = (themeBtn) => {
    if (themeBtn.classList.contains('fa-sun-o')) {
        themeBtn.classList.remove('fa-sun-o');
        themeBtn.classList.add('fa-moon-o')
    } else {
        themeBtn.classList.remove('fa-moon-o');
        themeBtn.classList.add('fa-sun-o');
    }
}