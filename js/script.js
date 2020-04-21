//開閉メニュー
$(function(){
    $('#menu-icon').on('click', function(){
        $('.hung-menu-pc').slideDown();
    });
    $('#close-btn').on('click', function(){
        $('.hung-menu-pc').slideUp();
    });
});

//言語変える
$(function(){
    let JP = "default"
    $('#lang-switcher').click(function(){
        if(JP == "default"){
            $('.lang-jp').text('Bring the sea closer.');
            $('.lang-change').text('Yamada aquarium.')
            JP = "changed"
        } else {
            $('.lang-jp').text('海を、もっと身近に')
            $('.lang-change').text('山 田 水 族 館')
            JP = "default"
        }
    });
});


