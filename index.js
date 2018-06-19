// Get all the elements to that is involved in menu interactions

// Get a reference to the open menu icon
const openMenuIcon = document.querySelector('.fa-bars');

// Get a reference to the menu container
const menuContainer = document.querySelector('.menu-container');

// Get a reference to the close menu icon
const closeMenuIcon = document.querySelector('.fa-times');

// Show menu and hide the scrollbar when the open menu 
// icon is clicked
openMenuIcon.addEventListener('click', () => {
    menuContainer.style.display = 'flex';
    document.documentElement.style.overflow = 'hidden';
});

// Hide menu and show the scrollbar when the close menu icon is clicked
closeMenuIcon.addEventListener('click', (e) => {
    if (e.target == closeMenuIcon) {
        menuContainer.style.display = 'none';
        document.documentElement.style.overflow = 'scroll';
    }
   
});

// When the menu (mobile menu) is opened and the window is resized 
// (increased) Hide the menu
window.onresize = () => {
    if (window.innerWidth > 768) {
        menuContainer.style.display = 'none';
        document.documentElement.style.overflow = 'scroll';
    }
};