let menu = document.getElementById('menu');
window.addEventListener('scroll', function(){
    if(window.pageYOffset){
        menu.classList.add('sticky-top');
    }
    else{
        menu.classList.remove('sticky-top');
    }
});
