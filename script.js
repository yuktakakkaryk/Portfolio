let menu = document.getElementById('menu');
console.log(menu)
window.addEventListener('scroll', function(){
    if(window.pageYOffset){
        menu.classList.add('sticky-top');
    }
    else{
        menu.classList.remove('sticky-top');
    }
});