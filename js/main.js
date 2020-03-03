jQuery.extend( jQuery.easing, {
    def: 'easeOutQuad',
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    }
});
var app = app || {};
app.main = {
    isNavVisible: false,
    mobileMenu: function () {
        $('.mobile-menu-btn').click(function () {
            var $this = $(this),
                $menu = $('.mobile-menu');
            $this.toggleClass('active');
            $menu.toggleClass('active');
            app.main.isNavVisible = !app.main.isNavVisible;
        });
    },
    header: function () {
        var header = document.getElementById('page-header');
        var options = {
            onUnpin: function() {
                if ( app.main.isNavVisible ) {
                    this.elem.classList.remove(this.classes.unpinned);
                    this.elem.classList.add(this.classes.pinned);
                }
                else {
                    this.elem.classList.add(this.classes.unpinned);
                    this.elem.classList.remove(this.classes.pinned);
                }
            }
        };
        var headroom  = new Headroom(header, options);
        headroom.init();
    },
    typed: function () {
        var typed = new Typed('#typed', {
            strings: ["websites", "landing pages", "PSD-to-HTML coding", "Wordpress websites", "corporate websites"],
            startDelay: 1000,
            typeSpeed: 90,
            backSpeed: 60,
            loop: true
        });
    },
    scrollTo: function () {
        $("a.scrollto").click(function () {
            var elementClick = $(this).attr("href"),
                destination = $(elementClick).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100, 'easeInOutCubic');
            if ($('.mobile-menu').hasClass('active') || $('.mobile-menu-btn').hasClass('active')) {
                $('.mobile-menu').removeClass('active');
                $('.mobile-menu-btn').removeClass('active');
            }
            return false;
        });
    },
    portfolio: function () {
        var $projects = $('.projects').isotope({
            itemSelector: '.project',
            layoutMode: 'fitRows'
        });
        $('.projects-filter').on( 'click', '.projects-filter__item', function() {
            var $this = $(this),
                filterValue = $this.attr('data-filter');
            $('.projects-filter__item').removeClass('active');
            $this.addClass('active');
            $projects.isotope({ filter: filterValue });
        });

        $('.project').hover(
            function () {
                var $this = $(this),
                    $preview = $this.find('.project__bg > img'),
                    imgH = $preview.height(),
                    speed = 0.004,
                    duration = imgH * speed + 's';
                $this.addClass('hover');
                $preview.css({
                    transition: 'all '+ duration + ' linear',
                    marginTop: '100%',
                    transform: 'translate(0, -100%)'
                });
            },
            function () {
                var $this = $(this),
                    $preview = $this.find('.project__bg > img');
                $this.removeClass('hover');
                $preview.css({
                    transition: '',
                    marginTop: '',
                    transform: ''
                });
            }
        )
    },
    form: function () {
        $("#contact-form").validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            submitHandler: function(form) {
                var $form = $(form);
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: $form.serialize()
                }).done(function(e) {
                    $form.find('.dispatch-message').removeClass('error').addClass('success').html("Thank you! I'll answer you soon.").slideDown();
                    $form.trigger('reset');
                    setTimeout(function () {
                        $form.find('.dispatch-message').slideUp();
                    }, 5000);
                }).fail(function (e) {
                    $form.find('.dispatch-message').removeClass('success').addClass('error').html('Sorry... Please try again.').slideDown();
                    $form.trigger('reset');
                    setTimeout(function () {
                        $form.find('.dispatch-message').slideUp();
                    }, 5000);
                })
            }
        });
    },
    animations: function () {
        $('#home-content').enllax();
    }
};
app.init = function () {
    app.main.mobileMenu();
    app.main.header();
    app.main.typed();
    app.main.scrollTo();
    app.main.portfolio();
    app.main.form();
    app.main.animations();
};


$(document).ready(function () {
    app.init();
});