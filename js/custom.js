$(function () {
    const MAINEVENTSLIDE = new Swiper('.main_flower_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_flower .arrows .prev',
            prevEl: '.main_flower .arrows .next',
        },
              breakpoints : {
            541 : {
                slidesPerView: 3,
            }
        }
       
    })
});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    });

    // 반응형
$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });
    
    $('.header .gnb>ul>li>a').on('click', function (e) {
        if($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }
        
       
    });
    
    $(window).on('resize', function(){
        let w = $(window).width();
    
        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style');
        }
    });
    
    })