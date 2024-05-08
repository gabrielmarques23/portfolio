
//function clickToOpenNav() {
//    btnOpenNav.classList.add('changeNav');
//    btnCloseNav.classList.remove('changeNav');
//    openNav()
//}

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
    headerNav.classList.remove('hiddenHeaderNav');
    headerNav.classList.add('.openHeaderNav');
}
function closeNav() {
    headerNav.classList.add('hiddenHeaderNav');
    headerNav.classList.remove('.openHeaderNav');
}


//Button to Scroll to Top
let clickBtnToTop = document.querySelector('button.myBtnToUp');

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






