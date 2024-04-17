let clickBtnToTop =  document.querySelector('button.myBtnToUp');

window.onscroll = function(){
    if(document.documentElement.scrollTop > 550 || document.body.scrollTop > 550){
        clickBtnToTop.style.display = "block";
    } else{
        clickBtnToTop.style.display = "none";
    }

}


function scrollToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}





