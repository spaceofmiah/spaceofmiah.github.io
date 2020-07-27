// Available togglable theme scheme
let THEME_SCHEME = {
    moon: {foreground: '#ffffff',background: '#232323'},
    sun: {foreground: '#232323',background: '#ffffff'}
}

/*
Event handler that responds to theme change action.
main construct that initiates theme change.
*/
const changeTheme = (event) => {
    localStorage.getItem('theme') === 'moon' ? 
        localStorage.setItem('theme', 'sun'): localStorage.setItem("theme", 'moon');
    updateTheme();
    changeThemeBtnIcon(event.target);
}

/*
changes the foreground and background of theme-able component
*/
const updateTheme = () => {
    let theme;
    localStorage.getItem('theme') === "sun" ? theme = THEME_SCHEME.sun : theme = THEME_SCHEME.moon;
    document.querySelector('body').style.backgroundColor = theme.background;
    document.querySelector('body').style.color = theme.foreground;
    document.querySelectorAll('a').forEach(tag => tag.style.color = theme.foreground);
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