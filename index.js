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
    menuContainer.style.display = 'flex';// Get all the elements to that is involved in menu interactions

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

// Smooth scrolling using jquery

// Get the height of the header
const headerHeight = $("#header").height();

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
      // Close menu before scrolling to the target
    if (window.innerWidth < 768) {
        document.documentElement.style.overflow = 'scroll';
        menuContainer.style.display = 'none';
    }
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
       var scrollToPosition = $(target).offset().top - headerHeight;
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: scrollToPosition
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
      // This hash change will jump the page to the top of the div with the same id
        // so we need to force the page to back to the end of the animation
        $('html').animate({ 'scrollTop': scrollToPosition }, 0);
    }
  });
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
