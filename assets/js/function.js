(function ($) {
    'use strict';

    // menu top fixed start
    var headerNav = $(".navbar");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            headerNav.addClass("fixed animated fadeInDown");
        } else {
            headerNav.removeClass("fixed fadeInDown");
        }
    });
    jQuery(document).ready(function () {

        // map menubar onClick
        $('.menu-bar').on('click', function () {
            $('.map-menu').toggleClass('open')
            $(this).toggleClass('active')
        });


        //creating a style object for the ripple effect
        function RippleStyle(width, height, posX, posY) {
            this.width = (width <= height) ? height : width;
            this.height = (width <= height) ? height : width;
            this.top = posY - (this.height * 0.5);
            this.left = posX - (this.width * 0.5);
        }
        $('.btn').on('mousedown', function (e) {
            //appending an element with a class name "btn-ripple"
            var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

            //getting the button's offset position
            var pos = $(this).offset();

            //get the button's width and height
            var width = $(this).outerWidth();
            var height = $(this).outerHeight();

            //get the cursor's x and y position within the button
            var posX = e.pageX - pos.left;
            var posY = e.pageY - pos.top;

            //adding a css style to the ripple effect
            var rippleStyle = new RippleStyle(width, height, posX, posY);
            rippleEl.css(rippleStyle);
        });

        //this event listener will be triggered once the ripple animation is done
        $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function () {
            $(this).remove();
        });

        // map right sidebar
        $(document).ready(function () {
            $('ul.map-menu-list li button').click(function () {
                $('li button, .content-item').removeClass('active');

                let yOffset = -150; 
                let element = document.querySelector( $(this).data('scroll-to'));
                let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});

                $(this).addClass('active');
            });
        });

        // onclick right sidebar
        $(document).ready(function () {
            $('ul.sidebar-menu-list li button').click(function () {
                $('li button, .content-item').removeClass('active');

                let yOffset = -100; 
                let element = document.querySelector( $(this).data('scroll-to'));
                let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});

                $(this).addClass('active');
            });
        });

        // search button
        $('.search-icon').on('click', function () {
            $('input.form-control').toggleClass('active');
            $('.search-icon').toggleClass('active');
        })

        // speech 

        // let text = 'Hello Farin I really love you'
        // let speech = new SpeechSynthesisUtterance(text)

        // speech.volume = 1;
        // speech.rate = 1;
        // speech.pitch = 1;

        // window.speechSynthesis.speak(speech)

        // svg map
        jQuery('.pin image').mouseover(function () {
            jQuery(this).attr('href', jQuery('#pin-alt').attr('src'))
        })
        jQuery('.pin image').mouseout(function () {
            jQuery(this).attr('href', jQuery('#pin').attr('src'));
        })
        jQuery('.map-menu-list li button').mouseover(function () {
            let country = jQuery(this).data('country');
            jQuery('#' + country).attr('href', jQuery('#pin-alt').attr('src'))

        })
        jQuery('.map-menu-list li button').mouseout(function () {
            let country = jQuery(this).data('country');
            jQuery('#' + country).attr('href', jQuery('#pin').attr('src'));

        })

    })

})(jQuery);
