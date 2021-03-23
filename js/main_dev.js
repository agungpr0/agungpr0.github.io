function jquery_onload() {
    
    $('html, body').animate({
        scrollTop: $('#welcome').offset().top
    }, 0);
    $('html, body').animate({
        scrollLeft: $('#welcome').offset().left
    }, 0);

    $(document).on('click', 'a[href*="#about"]', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollLeft: $('#about').offset().left
        }, 400);
    });
    $(document).on('click', 'a[href*="#loop"]', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#loop').offset().top
        }, 200);
    });
    $(document).on('click', 'a[href*="#contact"]', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollLeft: $('#contact').offset().left
        }, 400);
    });
    $(document).on('click', 'a[href*="#welcome"]', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#welcome').offset().top
        }, 200);
    });

    // $('html, body').animate({
    //     scrollTop: $('#loop').offset().top
    // }, 200);
    // $('html, body').animate({
    //     scrollLeft: $('#loop').offset().left
    // }, 200);

    lazyload();
}

function lazyload() {

    /* lazyload */
    $('[data-src]').each(function() {
        var $this = $(this),
            data_src = $(this).attr('data-src'),
            tag = $(this).prop('tagName').toLowerCase(),
            data_top = $(this).offset().top;

        var window_height = $(window).height() * Number(2);
        if (data_top < window_height) {
            if (tag == 'img' || tag == 'iframe') {
                $this.attr('src', data_src);
                $this.on('load', function() {
                    $this.addClass('loaded');
                    setTimeout(function() {
                        $this.removeClass('loaded').removeAttr('data-src');
                    }, 100);
                });
            } else {
                $('<img/>').attr('src', data_src).on('load', function() {
                    $(this).remove();
                    $this.css('background-image', 'url(' + data_src + ')');
                    $this.addClass('loaded');
                    setTimeout(function() {
                        $this.removeClass('loaded').removeAttr('data-src');
                    }, 100);
                });
            }
        }
    });

    $(window).on('scroll', function() {
        $('[data-src]').each(function() {
            var $this = $(this),
                data_src = $(this).attr('data-src'),
                tag = $(this).prop('tagName').toLowerCase(),
                data_top = $(this).offset().top;

            if(data_src) {
                var window_height = $(window).height();
                var window_top = $(window).scrollTop();
                if (window_top + window_height > data_top) {
                    if (tag == 'img' || tag == 'iframe') {
                        $this.attr('src', data_src);
                        $this.on('load', function() {
                            $this.addClass('loaded');
                            setTimeout(function() {
                                $this.removeClass('loaded').removeAttr('data-src');
                            }, 100);
                        });
                    } else {
                        $('<img/>').attr('src', data_src).on('load', function() {
                            $(this).remove();
                            $this.css('background-image', 'url(' + data_src + ')');
                            $this.addClass('loaded');
                            setTimeout(function() {
                                $this.removeClass('loaded').removeAttr('data-src');
                            }, 100);
                        });
                    }
                }
            }
        });
    });
}