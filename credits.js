function fun(){
    $('#fancy_h1_wrap').css('top', '');
    $('#fancy_h1_wrap').animate({top:"-100%"}, 5000, fun);

}

fun();
