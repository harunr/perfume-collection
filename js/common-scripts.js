
(function($){
	$(function(){

        
        
        $('.phone-nav').click(function () {
            $("body").toggleClass("navshown");
            $(".nav-wrap").slideToggle(500)
        });
        
        $('.cart-btn, .cart-counter').click(function () {
            $("body").addClass("cart-shown");
        });
        $('.close-area').click(function () {
            $("body").removeClass("cart-shown");
        });
        
        
        /*Header on scroll*/
        var header = new Headroom(document.querySelector(".header-wrap"), {
            tolerance: 5,
            offset: 205,
            classes: {
                initial: "headroom",
                pinned: "header-fixed",
                unpinned: "header-static"
            }
        });

        header.init();
        
        
        //product-wrap main-footer-section news-feed-wrap 
        
        $(window).scroll(function(){
            if ($(window).scrollTop() > 300) {
                $(".main-footer-section, .news-feed-wrap").addClass('stay-sticky');
            }
            else{
                $(".main-footer-section, .news-feed-wrap").removeClass('stay-sticky'); 
            }
        })
        

        if ($(window).width() > 991) {

            var news_feed_mt = $('.main-footer-section').height();
            var footer_bottom = $('.news-feed-slider-item').height();

            $(window).on('resize', function () {
                news_feed_mt = $('.main-footer-section').height();
                footer_bottom = $('.news-feed-slider-item').height();
            });
            var ac_value= footer_bottom + 16;
            var total_mb= news_feed_mt + footer_bottom + 16;
           
            $('.main-footer-section').css({'bottom' : ac_value});
            $('.main-content-wrap').css({'margin-bottom' : total_mb});
        }
        
        
        if ($(window).width() > 1024) {

            var news_feed_mt = $('.main-footer-section').height();
            var footer_bottom = $('.news-feed-slider-item').height();

            $(window).on('resize', function () {
                news_feed_mt = $('.main-footer-section').height();
                footer_bottom = $('.news-feed-slider-item').height();
            });
            var ac_value= footer_bottom + 67;
            var total_mb= news_feed_mt + footer_bottom + 67;

            $('.main-footer-section').css({'bottom' : ac_value});
            $('.main-content-wrap').css({'margin-bottom' : total_mb});
        }
      
        
        //Change Add-to-bag button's Text
        
        $('input[type=radio][name=quantity-radio]').change(function() { 
            var rd_val="";
            rd_val = this.value;
            var pd_price = rd_val * 50;
            $(this).parent().parent().parent().find('.add-bag-btn span').html(pd_price);
        });
        
        $('input[type=radio][name=quantity-radio1]').change(function() { 
            var rd_val="";
            rd_val = this.value;
            var pd_price = rd_val * 32;
            $(this).parent().parent().parent().find('.add-bag-btn span').html(pd_price);
        });
        
        $('input[type=radio][name=quantity-radio2]').change(function() { 
            var rd_val="";
            rd_val = this.value;
            var pd_price = rd_val * 56;
            $(this).parent().parent().parent().find('.add-bag-btn span').html(pd_price);
        });
        
        
        //Seller Items Slider
        if ($(window).width() < 769) {
            
            if ($('.seller-item-wrap').length) {
                $('.seller-item-wrap').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: 'unslick'
                        }
                    ]
                })

                $(window).on('resize', function () {
                    $('.seller-item-wrap').slick('resize');
                });
            }
 
        };
      
        
        //Gentle Section Slider
        if ($('.gentle-slider-wrap').length) {
            $('.gentle-slider-wrap').slick({
                arrows:false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                speed: 700,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 2500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },

                ]
            })
        }
        
        
        
        if ($('.giving-thumb-inner').length) {
            $('.giving-thumb-inner').slick({
                arrows:false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4300,
                speed: 1000,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
            });
            $(window).on('resize', function () {
                $('.giving-thumb-inner').slick('resize');
            });
        }
        
        
        if ($('.news-feed-slider-item-wrap').length) {
            $('.news-feed-slider-item-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 5,
                slidesToScroll: 4,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 4,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.news-feed-slider-item-wrap').slick('resize');

            });
        }
        
        
     
        
        
        
        
        
        // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                }
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');
        
        
        
        
        
        if ($(window).width() < 769) {
            
            $('.seller-item-thumb').removeClass('animated-thumb')
        }
        
        
        
        
        
        
		
	})// End ready function.
   
    


	

})(jQuery)

