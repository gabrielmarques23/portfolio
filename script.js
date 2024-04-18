
let btnOpenNav = document.querySelector('button.btnHamb');
let btnCloseNav = document.querySelector('button.btnClose');

let headerNav = document.querySelector('.navHeaderDiv');

function openNav() {
    headerNav.classList.remove('hiddenHeaderNav');
    headerNav.classList.add('.oppenHeaderNav');
}
function hiddenNav() {
    headerNav.classList.add('hiddenHeaderNav');
    headerNav.classList.remove('.oppenHeaderNav');
}

btnOpenNav.addEventListener("click", function () {
    btnOpenNav.classList.add('changeNav');
    btnCloseNav.classList.remove('changeNav');
    openNav()
});

btnCloseNav.addEventListener("click", function () {
    btnOpenNav.classList.remove('changeNav');
    btnCloseNav.classList.add('changeNav');
    hiddenNav()
});

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






