let backToTopButton = document.getElementById('back-top-btn');
let menuBar = document.getElementsByClassName('menu-icon')[0];
let menu = document.querySelector('.menu');
let linksMenus = document.querySelectorAll('.link-menu');
let dropdownMenus = document.querySelectorAll('.dropdown-menu');
let chevron = document.querySelectorAll('.link-menu i')



// aside dropdown menus functionality

chevron.forEach(function (arrow,index) {
    arrow.setAttribute('data-ind', index);
})


dropdownMenus.forEach(function (dropMenu,i) {
    dropMenu.setAttribute('data-i', i);
    console.log(dropMenu.getAttribute('data-i'));
})


linksMenus.forEach(function (menu,index) {
    menu.setAttribute('data-index', index);
    menu.addEventListener('click', function (e) {
            showMenu(menu.getAttribute('data-index'));
    })
})


function showMenu(i) {
    dropdownMenus.forEach((dropMenu) => {
        // Only toggle the dropdown menu that matches the clicked link menu
        if (dropMenu.getAttribute('data-i') === i) {
            if (dropMenu.style.display === 'block') {
                dropMenu.style.display = 'none';
                unRotateArrow(i);
            } else {
                dropMenu.style.display = 'block';
                rotateArrow(i);
            }
        } else {
            dropMenu.style.display = 'none';
            unRotateArrow(dropMenu.getAttribute('data-i'));
        }
    });
}


function rotateArrow(i) {
    chevron.forEach(function (arrow) {
        if (arrow.getAttribute('data-ind') === i) {
            arrow.classList.add('rotated-arrow');
        } else {
            arrow.classList.remove('rotated-arrow');
        }
    });
}


function unRotateArrow(i) {
    chevron.forEach(function (arrow) {
        if (arrow.getAttribute('data-ind') === i) {
            arrow.classList.remove('rotated-arrow');
        }
    })
}



// back to top button functionality

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



// header navigation icon functionality

menuBar.addEventListener('click', function () {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

