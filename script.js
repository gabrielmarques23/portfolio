
let headerNav = document.querySelector('.navHeaderDiv');
let checkbox = document.querySelector('#checkbox');

function toggleNav() {
if(checkbox.checked){
    openNav() 
} else{
    closeNav()
}
}

function openNav() {
    headerNav.classList.add('visibleHeaderNav');
}
function closeNav() {
    headerNav.classList.remove('visibleHeaderNav');
}


//Button to Scroll to Top
let clickBtnToTop = document.querySelector('.myBtnToUp');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 550 || document.body.scrollTop > 550) {
        clickBtnToTop.style.display = "block";
    } else {
        clickBtnToTop.style.display = "none";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}






