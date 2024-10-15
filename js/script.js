// 1 - HEADER AND HAMBURGER MENU START
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".header__toggler");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const header = document.querySelector(".header");
  const logo = document.querySelector(".header__logo span");
  const menuLinks = document.querySelectorAll(".hamburger-menu__menu a");
  const body = document.querySelector('body');
  const barsIcon = document.querySelector(".fa-bars");
  const xmarkIcon = document.querySelector(".fa-xmark");

  // Initial state: cross icon hidden
  xmarkIcon.style.display = 'none';

  // Toggle menu, icons, and scroll lock on toggler click
  toggler.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    header.classList.toggle("active");
    logo.classList.toggle("white");

    // Toggle between bars (hamburger) and xmark (cross) icons
    if (hamburgerMenu.classList.contains("active")) {
      barsIcon.style.display = 'none';
      xmarkIcon.style.display = 'block';
      body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      barsIcon.style.display = 'block';
      xmarkIcon.style.display = 'none';
      body.style.overflow = ''; // Re-enable scrolling
    }
  });

  // Close the menu when any link is clicked
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      header.classList.remove("active");
      logo.classList.remove("white");

      // Revert to bars icon
      barsIcon.style.display = 'block';
      xmarkIcon.style.display = 'none';
      body.style.overflow = ''; // Re-enable scrolling when menu is closed
    });
  });
});
// HEADER AND HAMBURGER MENU END
// -------------------------------------------
// 2 - FEATURE CAROUSEL START
// Select all buttons and tabs
const buttons = document.querySelectorAll('.feature__tabs-button button');
const tabs = document.querySelectorAll('.feature__tab');
const feature = document.querySelector('.feature'); // Select the feature container for background change

// Function to handle tab switching and background change
function switchTab(event) {
  const targetTab = event.target.getAttribute('data-tab');

  // Remove 'active' class from all tabs and hide them
  tabs.forEach(tab => {
    tab.classList.remove('active');
    tab.style.display = 'none'; // Hide all tabs
  });

  // Add 'active' class to the tab that matches the button and show it
  const activeTab = document.querySelector(`.feature__tab[data-tab-content="${targetTab}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
    activeTab.style.display = 'flex'; // Show the active tab
  }

  // Remove 'active' class from all buttons
  buttons.forEach(button => button.classList.remove('active'));

  // Add 'active' class to the clicked button to highlight it
  event.target.classList.add('active');

  // Change the background image of the feature container
  switch (targetTab) {
    case '1':
      feature.style.backgroundImage = 'url(/image/features/tab-1.png)';
      break;
    case '2':
      feature.style.backgroundImage = 'url(/image/features/tab-2.png)';
      break;
    case '3':
      feature.style.backgroundImage = 'url(/image/features/tab-3.png)';
      break;
    default:
      feature.style.backgroundImage = 'none'; // Reset if no match
  }
}

// Add click event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', switchTab);
});

// Set the first tab and background as active by default
tabs[0].classList.add('active');
tabs[0].style.display = 'flex'; // Show the first tab initially
feature.style.backgroundImage = 'url(/image/features/tab-1.png)'; // Set the default background
buttons[0].classList.add('active'); // Highlight the first button by default
// FEATURE CAROUSEL END
// -------------------------------------------
// 3 - FAQ START
var acc = document.getElementsByClassName("accordion");
var i;

// Loop through each accordion button
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    // Toggle active class for this button to handle icon rotation
    this.classList.toggle("active");
    
    // Grab the .faq__answer.panel by going to the parent's next sibling
    var panel = this.parentElement.nextElementSibling;

    if (panel && panel.style) {
      if (panel.style.display === "block") {
        panel.style.display = "none";     // Close the panel
        this.classList.remove("active");  // Remove active class from button
      } else {
        // Close other open panels and remove active from other buttons
        var allPanels = document.querySelectorAll(".faq__answer.panel");
        var allButtons = document.querySelectorAll(".accordion");

        allPanels.forEach(function(p) {
          p.style.display = "none";       // Close all panels
        });

        allButtons.forEach(function(btn) {
          btn.classList.remove("active"); // Remove active state from all buttons
        });

        panel.style.display = "block";    // Open the clicked panel
        this.classList.add("active");     // Add active state to the clicked button
      }
    }
  });
}
// FAQ END

// EMAIL ERROR START
//   const emailInput = document.getElementById('email');
//   const errorMessage = document.querySelector('.error-message');

//   emailInput.addEventListener('input', function () {
//     // Check if the input is not blank and invalid
//     if (emailInput.value && !emailInput.validity.valid) {
//       errorMessage.style.display = 'block'; // Show error if there's text but it's invalid
//     } else {
//       errorMessage.style.display = 'none'; // Hide error when blank or valid
//     }
//   });