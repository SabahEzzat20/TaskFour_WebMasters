let backToTopButton = document.getElementById('back-top-btn');
let menuBar = document.getElementsByClassName('menu-icon')[0];
let menu = document.querySelector('.menu');
console.log(menu);

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
        backToTopButton.style.opacity = "1"; // Show the button in a transition
    } else {
        backToTopButton.style.display = "none";
        backToTopButton.style.opacity = "0"; // Hide the button
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    }); 
}

menuBar.addEventListener('click', function () {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        menu.style.transition = 'display 0.4s'
    } else {
        menu.style.display = 'flex';
    }
});