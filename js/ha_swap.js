// mainimg 변경 
$('.img-box li').click(function() {
    const num = $(this).index();
    imgboxHancle(num);
});

function imgboxHancle(num) {
    $('.change > img').css({'display': 'none'});
    $('.change > img').eq(num).css({'display': 'block'});
}

$('.img-box li').mouseover(function() {
    const num = $(this).index();
    imgboxHancle(num);
});

$('.change > img:not(:first-child)').css({'display': 'none'});





