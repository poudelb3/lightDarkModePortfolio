const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const dark_theme = 'dark';
const light_theme = 'light';

// Dark or Light mode Images
function imageMode(color) {
    image1.src = `img/undraw_certificate_${color}.svg`;
    image2.src = `img/undraw_programming_${color}.svg`;
    image3.src = `img/undraw_personal_trainer_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isDark ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', dark_theme);
        localStorage.setItem('theme', dark_theme);
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', light_theme);
        localStorage.setItem('theme', light_theme);
        toggleDarkLightMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode('dark');
    }
}
