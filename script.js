// var typed = new Typed('.auto-type', {
//     strings: ["Developer.", "UI Designer."],
//     typeSpeed: 120,
//     backSpeed: 120,
//     loop: true
// })

$('document').ready(()=>{
    $('.project').slice(0,3).show();
    $('.btn2').on('click', () => {
        $('.project:hidden').slice(0,3).slideDown();
        if($('.project:hidden').length == 0){
            $('.btn2').hide()
            $('.btn3').show()
        }
    })
    $('.btn3').on('click', () => {
        $('.project:visible:gt(2)').slideUp();
        if($('.project:visible').slice(0,3).length == 3){
            $('.btn2').show()
            $('.btn3').hide()
        }
    })
})
