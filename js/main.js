$('.menu-item-102, .menu-item-667, .menu-item-99, .menu-item-103, .menu-item-100, .menu-item-104').click(function(){
    $('.toggle-menu').removeClass('active')
})
$(".to-delivery").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#delivery").offset().top
    }, 1000);
});
$(".to-projects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});
$(".to-about-us").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about-us").offset().top
    }, 1000);
});
$(".to-payment").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#payment").offset().top
    }, 1000);
});
$(".to-contact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$(".process__item").mouseover(function(){
    $('#payment-picture').css('filter','brightness(100%)')
}).mouseout(function(){
    $('#payment-picture').css('filter','brightness(50%)')
})

function setinfo() {
    
    let name = document.getElementById('input_2_1_3').value;
    let phone = document.getElementById('input_2_5').value;
    let message = document.getElementById('input_2_4').value;

    let postInfo = new XMLHttpRequest();
    postInfo.open('GET', `https://api.telegram.org/bot906759928:AAG7oXnhMHlF8_cxBqQ0xzjTV1gLWBVAJUo/sendMessage?text=Імя: ${name}%0A Телефон: ${phone}%0A Повідомлення: ${message}&chat_id=-409155771`,false);
    postInfo.send();

}
$('#gform_submit_button_2').click(function(){
    $(this).attr('disabled','true')
    $(this).html('Відправлено')
    setinfo()
});