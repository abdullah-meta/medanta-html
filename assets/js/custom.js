$(document).ready(function (e) {
   
    // $('.jsMeetDoctorSlider').slick({
    //     dots: false,
    //     arrows: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     variableWidth: false,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 549,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

        function t() {
            $(this.owl.owlItems).find("li").removeClass("active"), $(this.owl.owlItems[this.owl.currentItem]).find("li").addClass("active"), $(this.owl.owlItems[this.owl.currentItem]).find("li").find("a").click()
        }
        jQuery(window).load(function () {
            $("#loader-main").css("display", "none")
        }); //$("a").each(function(e, t) {
        //$(this).prop("href") == window.location.href && $(this).parent("li").addClass("active")
        //});
        var i = window.location.href;
        i.indexOf("critical-care-units") > 0 || i.indexOf("flying-doctor") > 0 || i.indexOf("day-care") > 0 || i.indexOf("daily-assist") > 0 || i.indexOf("wards-and-rooms") > 0 || i.indexOf("emergency-service") > 0 || i.indexOf("lab-tests-and-diagnostics") > 0 ? $("#facility-service").addClass("active") : i.indexOf("browser-ailment") > 0 || i.indexOf("browser-treatment") > 0 || i.indexOf("browser-technology") > 0 || i.indexOf("browser-institute") > 0 || i.indexOf("healthcare-lifestyle") > 0 || "ailment-detail" == $("#current-url").val() || "treatment-detail" == $("#current-url").val() || "technology-detail" == $("#current-url").val() || "institute-detail" == $("#current-url").val() ? $("#treatment-li").addClass("active") : (i.indexOf("doctor-listing") > 0 || "doctor-detail" == $("#current-url").val()) && $("#doctor-li").addClass("active"), $("#show-more-fd-o").click(function () {
            $("#show-more-overview-fd").css("display", "none"), $("#show-less-overview-fd").css("display", "block"), $("#show-more-fd-o").css("display", "none"), $("#show-less-fd-o").css("display", "block")
        }), $("#show-less-fd-o").click(function () {
            $("#show-more-overview-fd").css("display", "block"), $("#show-less-overview-fd").css("display", "none"), $("#show-less-fd-o").css("display", "none"), $("#show-more-fd-o").css("display", "block")
        }), jQuery("#feedback-submit").click(function () {
            if ("" == $("#feedback-text").val()) return $("#message").html("<div class='alert alert-danger'>Feedback Text is required</div>"), !1;
            if ("" == $("#feedback-respond-feedback-mobile-email").val()) return $("#message").html("<div class='alert alert-danger'>Email or Mobile is required</div>"), !1;
            var e = $("#feedback-form").serialize(),
                t = window.location,
                i = t.protocol + "//" + t.host + "/";
            return $.ajax({
                url: i + "wp-content/themes/medanta/feedbackform-submit.php",
                type: "POST",
                data: e,
                success: function (e) {
                    $("#message").html(e), setTimeout(function () {
                        $("#feedback_modal").modal("hide")
                    }, 3e3)
                }
            }), !1
        }), $("#feedback_modal").on("hidden.bs.modal", function () {
            $("#message").html(""), $("#feedback-visited-hospital-check").prop("checked", !1), $("#feedback-respond-feedback-check").prop("checked", !1), $("#feedback-text").val(""), $("#feedback-visited-hospital-date").val(""), $("#feedback-visited-hospital-UHID").val(""), $("#feedback-respond-feedback-name").val(""), $("#feedback-respond-feedback-mobile-email").val("")
        }), jQuery("#callback_submit").click(function () {
            if ("" == $("#request_callback_name").val()) return $("#callback-message").html("<div class='alert alert-danger'>Name is required</div>"), !1;
            if ("" == $("#request_callback_mobile").val()) return $("#callback-message").html("<div class='alert alert-danger'>Mobile is required</div>"), !1;
            var e = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
            if (!e.test($("#request_callback_mobile").val())) return $("#callback-message").html("<div class='alert alert-danger'>Please put a valid 10 digit mobile number</div>"), !1;
            if (10 != $("#request_callback_mobile").val().length) return $("#callback-message").html("<div class='alert alert-danger'>Please put 10  digit mobile number</div>"), !1;
            var t = {
                    request_callback_name: $("#request_callback_name").val(),
                    request_callback_mobile: $("#request_callback_mobile").val()
                },
                i = window.location,
                a = i.protocol + "//" + i.host + "/";
            return $.ajax({
                url: a + "wp-content/themes/medanta/requestcallbackform-submit.php",
                type: "POST",
                data: t,
                success: function (e) {
                    $("#callback-message").html(e), setTimeout(function () {
                        $("#req_callback").modal("hide")
                    }, 3e3)
                }
            }), !1
        }), $("#req_callback").on("hidden.bs.modal", function () {
            $("#callback-message").html(""), $("#request_callback_name").val(""), $("#request_callback_mobile").val("")
        }), $(function () {
            var e = window.location,
                t = e.protocol + "//" + e.host + "/";
            $("#feedback-visited-hospital-date").datepicker({
                showOn: "button",
                buttonImage: t + "wp-content/uploads/2017/01/calendar.gif",
                buttonImageOnly: !0,
                buttonText: "Select date",
                dateFormat: "dd/mm/yy",
                maxDate: 0
            })
        }), $("#back-to-top").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 500)
        }), $(".casestudy-tab li a").click(function () {
            $(".casestudy-tab").removeClass("in")
        }), $(".list #refinetab").click(function () {
            $(this).toggleClass("active")
        }), $("#wellness-carousel").owlCarousel({
            pagination: true,
            navigation: true,
            responsive: true,
            navigationText: ["<i class='icon icon-35 arrowleft'></i>", "<i class='icon icon-35 arrowright'></i>"],
            items: 3,
            rewindNav: false,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [600, 1]
        }),
        $("#whatsnew-carousel").owlCarousel({
            pagination: false,
            navigation: true,
            responsive: true,
            navigationText: ["<i class='icon icon-35 arrowleft'></i>", "<i class='icon icon-35 arrowright'></i>"],
            items: 3,
            rewindNav: false,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [600, 1]
        }),        
        
        $(".medantaUpdate .single-slider").owlCarousel({
            pagination: !1,
            navigation: !0,
            rewindNav: !1,
            responsive: !0,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsMobile: [500, 1]
        }), $(".casestudy-tab .multi-slider").owlCarousel({
            pagination: !1,
            navigation: !0,
            rewindNav: !1,
            responsive: !0,
            loop: !1,
            items: 6,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [980, 4],
            itemsTablet: [768, 3],
            itemsMobile: [500, 1],
            afterAction: t
        }), $(".casestudy-tab .fivecol").owlCarousel({
            pagination: !1,
            navigation: !0,
            rewindNav: !0,
            responsive: !0,
            loop: !0,
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsMobile: [500, 1],
            afterAction: t
        }), $(".casestudy-tab .fourcol").owlCarousel({
            pagination: !1,
            navigation: !0,
            rewindNav: !1,
            responsive: !0,
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsMobile: [500, 1],
            afterAction: t
        }), $(".casestudy-tab .threecol").owlCarousel({
            pagination: !1,
            navigation: !0,
            rewindNav: !1,
            responsive: !0,
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsMobile: [500, 1],
            afterAction: t
        }), $(".casestudy-tab .threecolGetCost").owlCarousel({
            pagination: !1,
            navigation: !0,
            rewindNav: !1,
            responsive: !0,
            items: 3,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsMobile: [500, 1],
            afterAction: t
        }), $(".additional-benefif-carousel").owlCarousel({
            pagination: !1,
            navigation: !0,
            rewindNav: !1,
            responsive: !0,
            items: 3,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsMobile: [500, 1],
            addClassActive: true,
            afterAction: t
        }), $($(".csr-ul li")[0]).removeClass("active"), $($(".csr-ul li")[1]).addClass("active");
        var a = $(".owl-carousel").data("owlCarousel");
        //a.goTo(0),
        $("#outreach").removeClass("active").addClass("hidden"), $("#research_study").addClass("active").removeClass("hidden"), $(".casestudy-tab .multi-slider li").click(function () {
            $(".casestudy-tab .multi-slider li").removeClass("active")
        }), $(".casestudy-tab .fivecol li").click(function () {
            $(".casestudy-tab .fivecol li").removeClass("active")
        }), $(".casestudy-tab .threecol li").click(function () {
            $(".casestudy-tab .threecol li").removeClass("active")
        }), $(".casestudy-tab .threecolGetCost li").click(function () {
            $(".casestudy-tab .threecolGetCost li").removeClass("active")
        }), $(".casestudy-tab .fourcol li").click(function () {
            $(".casestudy-tab .fourcol li").removeClass("active")
        }), $(".membershipBox .panel-title a").click(function () {
            $(".membershipBox .panel-title a").removeClass("active"), $(this).addClass("active")
        }), $(".tab_leftside .panel-title a").click(function () {
            $(".tab_leftside .panel-title a").removeClass("active"), $(this).addClass("active")
        }), $(".tab_leftside .panel-title a").click(function () {
            $(".tab_leftside .panel-title a").removeClass("active"), $(this).addClass("active")
        }), $("#myTab,#policiesTab").tabCollapse(), $(".numslide").each(function () {
            var e = $(this).parents(".carousel").find(".carousel-inner .item").length;
            $(this).html("<strong> 1 / </strong>" + e)
        }), $(".carousel").on("slid.bs.carousel", function () {
            var e = $(this).data("bs.carousel"),
                t = e.getActiveIndex(),
                i = e.$items.length,
                a = t + 1 + " / ";
            $(this).find(".numslide").html("<strong>" + a + "</strong>" + i)
        }), $("#tabul li a,#tabul2 li a").click(function () {
            var e = $(this).text();
            $("#changedVVal,#changedVVal2").text(e), $("#selectmenu,#selectmenu2").removeClass("in");
            var t = $(this).data("target");
            $("#myTab li a[href='" + t + "']").click()
        }), $(window).scroll(function () {
            var e = $("#tabul li.active a").text(),
                t = $("#tabul2 li.active a").text();
            $("#changedVVal").text(e), $("#changedVVal2").text(t)
        }), $("#selectmenu,#selectmenu2").append('<i class="icon icon-15 crossWhite"></i>'), $(".pagescroll-menu .crossWhite ,.pagescroll-menu .navbar-collapse").click(function () {
            $("#selectmenu,#selectmenu2").removeClass("in")
        }), $(".various").fancybox({
            type: "iframe",
            maxWidth: 800,
            maxHeight: 600,
            fitToView: !1,
            width: "70%",
            height: "70%",
            autoSize: !0,
            closeClick: !1,
            openEffect: "elastic",
            closeEffect: "none",
            afterShow: function () {
                $(".fancybox-iframe").attr("allowfullscreen", "allowfullscreen")
            }
        }), $(".specialized-clinics li a").click(function () {
            $(".clinicdetailBox").addClass("in").css("height", "auto")
        }), $(".clinicdetailBox .close").click(function () {
            $(".specialized-clinics li").removeClass("active")
        }), $(".programs li a").click(function () {
            $(".clinicdetailBox .tab-content .tab-pane").addClass("in").css("height", "auto")
        }), $(".treatment-list .panel h3 > a").click(function () {
            $(".treatment-list .panel h3").removeClass("in active"), $(".treatment-list .panel").removeClass("active"), $(this).parent().next().hasClass("in") ? $(".treatment-list .panel").removeClass("active") : $(this).parent().parent().addClass("active")
        }), $(".popupBox .popupDetail .close").click(function () {
            $(this).parent().removeClass("active"), $(".specialized-clinics li").removeClass("active")
        }), $(".parent_close .jquery_popup_close").click(function () {
            $(this).parent().removeClass("active"), $(".parent_close .accordion-link").removeClass("selected"), $(this).closest(".parent_close").find("li").removeClass("active")
        }), $("ul.ulList li a").click(function (e) {
            $(".blanck").removeClass("active").addClass("hidden");
            var t = $(e.currentTarget).attr("href");
            $(t).addClass("active").removeClass("hidden")
        }), $("ul.csr-ul li a").click(function (e) {
            $(".hide-show-listing").removeClass("active").addClass("hidden");
            var t = $(e.currentTarget).attr("href");
            $(t).addClass("active").removeClass("hidden")
        }), $(".listed_services .diagnoseBox .list-style1 li a").click(function () {
            $(this).toggleClass("active")
        }), $("#f_doctor .search-input").click(function () {
            $("#f_doctor,.serachClick").addClass("active"), $("#find_doc").css("display", "block")
        }), $("#find_doc").click(function () {
            $("#find_doc").css("display", "none"), $("#f_doctor,.serachClick").removeClass("active")
        }), $(".name-property").click(function () {
            $(".collaspe_locaton_cntr").removeClass("hide")
        });
        var s = $(".journey").length;
        s % 2 == 0 ? $(".journey").last().addClass("evenLast") : $(".journey").last().addClass("oddLast"), $(".responsive-tabs").responsiveTabs({
            accordionOn: ["xs", "sm"]
        }), $(".select").niceSelect(), $(".carePrograms .programs.offrtreat li a").click(function () {
            $(this).each(function () {
                $(this).siblings().slideDown(), $(this).parent().siblings().children(".contening").slideUp()
            })
        }), $('[data-toggle="tooltip"]').tooltip(), $("#dd .dropdown-menu li a").click(function () {
            $("#rupee-div").removeClass("hidden")
        }), $("#rupee-div .rupee-btn a").click(function () {
            $(".contact-info-div").removeClass("hidden")
        }), $("#dd .dropdown-menu li a").click(function () {
            $("#rupee-div").removeClass("hidden")
        }), $(".pos.close").click(function () {
            $(".custom-accor-main .panel-title a").addClass("collapsed")
        }), $(".custom-accor-main .panel-title a").click(function (e) {
            $(".custom-accor").addClass("hidden").removeClass("in"), $("li.panel a").addClass("collapsed"), $(e.currentTarget).closest("li.panel").find(".custom-accor").removeClass("hidden")
        }), $(".searchblock li:first-child").click(function (e) {
            $(this).toggleClass("showSearch"), $(".headerSearchBlock,.overlaySearchBlock").fadeToggle(0), $(".menu .addSearch").removeClass("active_a"), $(".overlayMenu").hide(), $('.js-Dropdownmenu').removeClass('open')
        }), $(".overlaySearchBlock").click(function (e) {
            $(this).fadeOut("showSearch"), $(".headerSearchBlock").fadeOut(), $(".searchblock li").removeClass("showSearch")
        }), $(".mobile-link .link-icon li:first-child").click(function (e) {
            $(this).toggleClass("showSearch"), $(".headerSearchBlockMobile,.overlaySearchBlockMobile").fadeToggle(0)
        }), $(".overlaySearchBlockMobile").click(function (e) {
            $(this).fadeOut("showSearch"), $(".headerSearchBlockMobile").fadeOut(), $(".searchblock li").removeClass("showSearch"), $('.js-searchicon-xs').removeClass('showSearch')
        }), $(".filterDate ul.dropdown-menu li").click(function (e) {
            var t = $(this).text();
            $(this).closest(".dropdown-field").find("input").attr("value", t)
        }), $("ul.upperarrow li").click(function (e) {
            $("ul.upperarrow li").removeClass("active"), $(this).addClass("active")
        }), $(".testContent .testListClose").click(function () {
            $(".testPane").removeClass("active")
        }), $(".feedback #for_jq").click(function () {
            $("#cls-in").toggleClass("in", 1e3)
        }), $("#wpml-1email").attr("placeholder", "Enter Email");
        // var i = window.location.href;
        // if (i.indexOf("location") > 0 || i.indexOf("#") > 0) {
        //     var o = i.split("="),
        //         n = "";
        //     o[1] && (n = o[1]), n && ($(".location-name").removeClass("active"), $(".tab-pane").removeClass("active in "), $("." + n).addClass("active"),$("#" + n).addClass("active in "), imgUrl = location.protocol + "//" + location.host + "/wp-content/themes/medanta/assets/images/locations/" + n + ".jpg", $("#location-banner").css("background-image", "url(" + imgUrl + ")"))
        // }
        $(".navbar-toggle").click(function (e) {
            $("body").toggleClass("scrollNone")
        }), $("#changedVVal,#changedVVal2").click(function (e) {
            $("body").addClass("scrollNone")
        }), $(".pagescroll-menu .navbar-nav li a").click(function (e) {
            $("body").removeClass("scrollNone")
        }), $("#selectmenu .crossWhite,#selectmenu2 .crossWhite").click(function (e) {
            $("body").removeClass("scrollNone")
        });

        if($(window).width() > 1199){
            $("div.navbar-fixed-top").autoHidingNavbar();
        }

        //============================== Start Medanta Phase 2 ==============================//

        // Flex slider mission dengue js //
        $('.btn-isotopeImage').click(function () {
            $('.isotopeImageList').addClass('hidden');
            $(this).parents('.newsListingBox').next('.isotopeImageList').removeClass('hidden');
            $(this).parents('.newsListingBox').addClass('hidden');
            $('#flexcarousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 210,
                maxItems: 3,
                itemMargin: 15,
                move: 1,
                asNavFor: '#flex-slider'
            });

            $('#flex-slider').flexslider({
                animation: "fade",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#flexcarousel"
            });
        });
        $('.js-close-box').click(function () {
            $(this).parents('.isotopeImageList').prev('.newsListingBox').removeClass('hidden');
            $(this).parents('.isotopeImageList').addClass('hidden');
        });

        $('.js-Dropdown .btn').on('click', function (event) {
            $(event.target).siblings('.js-Dropdownmenu').toggleClass('open');
            $('.menu-critical .addSearch').removeClass('active_a');
            $('.overlayMenu').hide();
            $(".headerSearchBlock,.overlaySearchBlock").fadeOut(0);
            $(".searchblock li:first-child").removeClass("showSearch");
        });

        //********** Discover SLider **********//


        $('.js-discovercarousel .left').addClass('disabled');

        $('#discoverSlider').on('slid.bs.carousel', function () {
            var carouselData = $(this).data('bs.carousel');
            var currentIndex = carouselData.getActiveIndex();

            if (currentIndex >= 1) {
                $('.js-discovercarousel .left').removeClass('disabled');
            } else {
                $('.js-discovercarousel .left').addClass('disabled');
            }

            if (currentIndex === (carouselData.$items.length - 1)) {
                $('.js-discovercarousel .right').addClass('disabled');
                $('.js-carousel .left').removeClass('disabled');
            } else {
                $('.js-discovercarousel .right').removeClass('disabled');
            }
        });

        // Fancy box //
        $(".js-discoverfancybox").fancybox({
            loop: false,
            prevEffect: 'none',
            nextEffect: 'none',
            transitionIn: 'fade',
            transitionOut: 'fade',
            wrapCSS: 'fancyboxCntrl',
            afterLoad: function (current, previous) {
                if (previous) {
                    var carouselItems = 6;
                    if (current.index > previous.index && current.index % carouselItems == 0) {
                        $('#discoverSlider').carousel('next');
                    } else if (current.index < previous.index && previous.index % carouselItems == 0) {
                        $('#discoverSlider').carousel('prev');
                    }
                }
            }
        });

        $('.js-searchfilter').click(function () {
            var $this = $(this).find('i');
            if ($this.hasClass('icon-filter')) {
                $this.removeClass('icon-filter');
                $this.addClass('icon-close');
            } else {
                $this.addClass('icon-filter');
                $this.removeClass('icon-close');
            }
        });

        //============================== End Medanta Phase 2 ==============================//

    }),
    function (e) {
        var t = e(".masonry-container");
        t.imagesLoaded(function () {
            t.masonry({
                columnWidth: ".item",
                itemSelector: ".item"
            })
        }), e("a[data-toggle=tab]").each(function () {
            var i = e(this);
            i.on("shown.bs.tab", function () {
                t.imagesLoaded(function () {
                    t.masonry({
                        columnWidth: ".item",
                        itemSelector: ".item"
                    })
                })
            })
        })
    }(jQuery), $(window).scroll(function () {
        "block" === $("#find_doc").css("display") && $("html,body").animate({
            scrollTop: 0
        }, 0), $(this).scrollTop() > 300 ? $(".backTotop").show() : $(".backTotop").hide();
        var e = ($(".sticky_nav"), $(window).scrollTop());
        e >= 450 ? ($("#grid9").addClass("fixed_nav"), $("#grid8").hide()) : ($("#grid9").removeClass("fixed_nav"), $("#grid8").show());
        var t = $(window).scrollTop();
        t >= 300 ? ($("#grid11").addClass("fixed_nav"), $("#grid10").hide()) : ($("#grid11").removeClass("fixed_nav"), $("#grid10").show())
    });
var h_height = $(".yearlife").height() + $(".for-height-count").height();
$(window).scroll(function () {
        $(this).scrollTop() > h_height && $(".count-checkup").removeClass("hidden")
    }), $(function () {
        $("a.page-scroll").bind("click", function (e) {
            var t = $(this);
            $("html, body").stop().animate({
                scrollTop: $(t.attr("href")).offset().top - 222
            }, 1500, "easeInOutExpo"), e.preventDefault()
        })
    }), equalheight = function (e) {
        var t, i = 0,
            a = 0,
            s = new Array;
        $(e).each(function () {
            if (t = $(this), $(t).height("auto"), topPostion = t.position().top, a != topPostion) {
                for (currentDiv = 0; currentDiv < s.length; currentDiv++) s[currentDiv].height(i);
                s.length = 0, a = topPostion, i = t.height(), s.push(t)
            } else s.push(t), i = i < t.height() ? t.height() : i;
            for (currentDiv = 0; currentDiv < s.length; currentDiv++) s[currentDiv].height(i)
        })
    }, $(window).bind("load resize", function () {
        equalheight(".eq-height > li"), equalheight(".eq-height1 > li"), equalheight(".eq-height2 > li"), equalheight(".eq-height3 > li"), equalheight(".eq-height4 > li"), equalheight(".eq-height5 > li"), equalheight(".eq-height6 > li"), equalheight(".main-mission-div .mission-wrap .sub-mission")
    }), $(window).bind("load resize", function (e) {
        $(".menu .addSearch > a").unbind("click"), $(window).width() <= 991 ? $(".menu .addSearch > a").click(function () {
            "none" == $(this).next(".dropdown-menu").css("display") ? ($(".dropdown-menu").slideUp(), $(this).next(".dropdown-menu").slideDown()) : $(".dropdown-menu").slideUp()
        }) : "resize" == e.type && $(".dropdown-menu").removeAttr("style"), $(".menu .addSearch > a").click(function () {
            $(".headerSearchBlock,.overlaySearchBlock").fadeOut(0), $(".searchblock li:first-child").removeClass("showSearch"), "none" == $(this).parent(".addSearch").find(".doctorSearch.dropdown-menu").css("display") ? ($(".overlayMenu").show(), $(".menu .addSearch").removeClass("active_a"), $(this).parent(".addSearch").addClass("active_a"), $('.js-Dropdown .js-Dropdownmenu').removeClass('open')) : ($(".overlayMenu").hide(), $(".menu .addSearch").removeClass("active_a"))
        }), $(".overlayMenu").click(function () {
            $(".menu .addSearch").removeClass("active_a"), $(".overlayMenu").hide()
        })

        //=================================== Medanta Phase 2 ===================================//
        // Small Screen Menu List //
        if ($(window).width() <= 991) {

            $('.js-dropmenu').click(function () {
                $(this).parents('.navMenu-xs').addClass('hidden');
                $('.js-closemenu').removeClass('hidden');
                $('.js-overlay-xs, .js-headSearch-xs').css('display', 'none');
                $('.navMenu-xs .js-searchicon-xs').removeClass('showSearch');
            });

            $('.js-closemenu').click(function () {
                $(this).addClass('hidden');
                $('.navMenu-xs').removeClass('hidden');
                $("body").removeClass("scrollNone");
                $(this).parents('div.headerbottomBox').find('#navbarCollapse').removeClass('in');
            });

            $('.js-moremenu').click(function () {
                $('#Moremenu').toggleClass('hidden');
                var $this = $(this).find('i');
                if ($this.hasClass('icon-align-down2')) {
                    $this.removeClass('icon-align-down2');
                    $this.addClass('icon-align-top');
                } else {
                    $this.addClass('icon-align-down2');
                    $this.removeClass('icon-align-top');
                }
            });

            $('.js-value').click(function () {
                $(this).parents('.js-backdrop').toggleClass('backdropBox');
            });

            $('.js-searchfilter').click(function () {
                $(this).parents('.searchFiltersBox').toggleClass('backdropBox');
            });
        }

    }), $(".for-func li a").click(function () {
        var e = $(this).text();
        $(".btn-drop span.choose-span").text(e)
    }),
    function (e, t, i) {
        "function" == typeof define && define.amd ? define(["jquery"], function (a) {
            return i(a, e, t), a.mobile
        }) : i(e.jQuery, e, t)
    }(this, document, function (e, t, i, a) {
        ! function (e, t, i, a) {
            function s(e) {
                for (; e && "undefined" != typeof e.originalEvent;) e = e.originalEvent;
                return e
            }

            function o(t, i) {
                var o, n, c, l, r, d, u, h, v, p = t.type;
                if (t = e.Event(t), t.type = i, o = t.originalEvent, n = e.event.props, p.search(/^(mouse|click)/) > -1 && (n = q), o)
                    for (u = n.length, l; u;) l = n[--u], t[l] = o[l];
                if (p.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== p.search(/^touch/) && (c = s(o), p = c.touches, r = c.changedTouches, d = p && p.length ? p[0] : r && r.length ? r[0] : a))
                    for (h = 0, v = D.length; v > h; h++) l = D[h], t[l] = d[l];
                return t
            }

            function n(t) {
                for (var i, a, s = {}; t;) {
                    i = e.data(t, T);
                    for (a in i) i[a] && (s[a] = s.hasVirtualBinding = !0);
                    t = t.parentNode
                }
                return s
            }

            function c(t, i) {
                for (var a; t;) {
                    if (a = e.data(t, T), a && (!i || a[i])) return t;
                    t = t.parentNode
                }
                return null
            }

            function l() {
                V = !1
            }

            function r() {
                V = !0
            }

            function d() {
                Y = 0, I.length = 0, N = !1, r()
            }

            function u() {
                l()
            }

            function h() {
                v(), M = setTimeout(function () {
                    M = 0, d()
                }, e.vmouse.resetTimerDuration)
            }

            function v() {
                M && (clearTimeout(M), M = 0)
            }

            function p(t, i, a) {
                var s;
                return (a && a[t] || !a && c(i.target, t)) && (s = o(i, t), e(i.target).trigger(s)), s
            }

            function f(t) {
                var i = e.data(t.target, x);
                if (!(N || Y && Y === i)) {
                    var a = p("v" + t.type, t);
                    a && (a.isDefaultPrevented() && t.preventDefault(), a.isPropagationStopped() && t.stopPropagation(), a.isImmediatePropagationStopped() && t.stopImmediatePropagation())
                }
            }

            function m(t) {
                var i, a, o = s(t).touches;
                if (o && 1 === o.length && (i = t.target, a = n(i), a.hasVirtualBinding)) {
                    Y = X++, e.data(i, x, Y), v(), u(), P = !1;
                    var c = s(t).touches[0];
                    B = c.pageX, E = c.pageY, p("vmouseover", t, a), p("vmousedown", t, a)
                }
            }

            function $(e) {
                V || (P || p("vmousecancel", e, n(e.target)), P = !0, h())
            }

            function b(t) {
                if (!V) {
                    var i = s(t).touches[0],
                        a = P,
                        o = e.vmouse.moveDistanceThreshold,
                        c = n(t.target);
                    P = P || Math.abs(i.pageX - B) > o || Math.abs(i.pageY - E) > o, P && !a && p("vmousecancel", t, c), p("vmousemove", t, c), h()
                }
            }

            function g(e) {
                if (!V) {
                    r();
                    var t, i = n(e.target);
                    if (p("vmouseup", e, i), !P) {
                        var a = p("vclick", e, i);
                        a && a.isDefaultPrevented() && (t = s(e).changedTouches[0], I.push({
                            touchID: Y,
                            x: t.clientX,
                            y: t.clientY
                        }), N = !0)
                    }
                    p("vmouseout", e, i), P = !1, h()
                }
            }

            function k(t) {
                var i, a = e.data(t, T);
                if (a)
                    for (i in a)
                        if (a[i]) return !0;
                return !1
            }

            function w() {}

            function y(t) {
                var i = t.substr(1);
                return {
                    setup: function (a, s) {
                        k(this) || e.data(this, T, {});
                        var o = e.data(this, T);
                        o[t] = !0, O[t] = (O[t] || 0) + 1, 1 === O[t] && z.bind(i, f), e(this).bind(i, w), j && (O.touchstart = (O.touchstart || 0) + 1, 1 === O.touchstart && z.bind("touchstart", m).bind("touchend", g).bind("touchmove", b).bind("scroll", $))
                    },
                    teardown: function (a, s) {
                        --O[t], O[t] || z.unbind(i, f), j && (--O.touchstart, O.touchstart || z.unbind("touchstart", m).unbind("touchmove", b).unbind("touchend", g).unbind("scroll", $));
                        var o = e(this),
                            n = e.data(this, T);
                        n && (n[t] = !1), o.unbind(i, w), k(this) || o.removeData(T)
                    }
                }
            }
            var C, T = "virtualMouseBindings",
                x = "virtualTouchID",
                _ = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
                D = "clientX clientY pageX pageY screenX screenY".split(" "),
                S = e.event.mouseHooks ? e.event.mouseHooks.props : [],
                q = e.event.props.concat(S),
                O = {},
                M = 0,
                B = 0,
                E = 0,
                P = !1,
                I = [],
                N = !1,
                V = !1,
                j = "addEventListener" in i,
                z = e(i),
                X = 1,
                Y = 0;
            e.vmouse = {
                moveDistanceThreshold: 10,
                clickDistanceThreshold: 10,
                resetTimerDuration: 1500
            };
            for (var A = 0; A < _.length; A++) e.event.special[_[A]] = y(_[A]);
            j && i.addEventListener("click", function (t) {
                var i, a, s, o, n, c, l = I.length,
                    r = t.target;
                if (l)
                    for (i = t.clientX, a = t.clientY, C = e.vmouse.clickDistanceThreshold, s = r; s;) {
                        for (o = 0; l > o; o++)
                            if (n = I[o], c = 0, s === r && Math.abs(n.x - i) < C && Math.abs(n.y - a) < C || e.data(s, x) === n.touchID) return t.preventDefault(), void t.stopPropagation();
                        s = s.parentNode
                    }
            }, !0)
        }(e, t, i),
        function (e) {
            e.mobile = {}
        }(e),
        function (e, t) {
            var a = {
                touch: "ontouchend" in i
            };
            e.mobile.support = e.mobile.support || {}, e.extend(e.support, a), e.extend(e.mobile.support, a)
        }(e),
        function (e, t, a) {
            function s(t, i, a) {
                var s = a.type;
                a.type = i, e.event.dispatch.call(t, a), a.type = s
            }
            var o = e(i);
            e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (t, i) {
                e.fn[i] = function (e) {
                    return e ? this.bind(i, e) : this.trigger(i)
                }, e.attrFn && (e.attrFn[i] = !0)
            });
            var n = e.mobile.support.touch,
                c = "touchmove scroll",
                l = n ? "touchstart" : "mousedown",
                r = n ? "touchend" : "mouseup",
                d = n ? "touchmove" : "mousemove";
            e.event.special.scrollstart = {
                enabled: !0,
                setup: function () {
                    function t(e, t) {
                        i = t, s(o, i ? "scrollstart" : "scrollstop", e)
                    }
                    var i, a, o = this,
                        n = e(o);
                    n.bind(c, function (s) {
                        e.event.special.scrollstart.enabled && (i || t(s, !0), clearTimeout(a), a = setTimeout(function () {
                            t(s, !1)
                        }, 50))
                    })
                }
            }, e.event.special.tap = {
                tapholdThreshold: 750,
                setup: function () {
                    var t = this,
                        i = e(t);
                    i.bind("vmousedown", function (a) {
                        function n() {
                            clearTimeout(r)
                        }

                        function c() {
                            n(), i.unbind("vclick", l).unbind("vmouseup", n), o.unbind("vmousecancel", c)
                        }

                        function l(e) {
                            c(), d === e.target && s(t, "tap", e)
                        }
                        if (a.which && 1 !== a.which) return !1;
                        var r, d = a.target;
                        a.originalEvent, i.bind("vmouseup", n).bind("vclick", l), o.bind("vmousecancel", c), r = setTimeout(function () {
                            s(t, "taphold", e.Event("taphold", {
                                target: d
                            }))
                        }, e.event.special.tap.tapholdThreshold)
                    })
                }
            }, e.event.special.swipe = {
                scrollSupressionThreshold: 30,
                durationThreshold: 1e3,
                horizontalDistanceThreshold: 30,
                verticalDistanceThreshold: 75,
                start: function (t) {
                    var i = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                    return {
                        time: (new Date).getTime(),
                        coords: [i.pageX, i.pageY],
                        origin: e(t.target)
                    }
                },
                stop: function (e) {
                    var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                    return {
                        time: (new Date).getTime(),
                        coords: [t.pageX, t.pageY]
                    }
                },
                handleSwipe: function (t, i) {
                    i.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - i.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - i.coords[1]) < e.event.special.swipe.verticalDistanceThreshold && t.origin.trigger("swipe").trigger(t.coords[0] > i.coords[0] ? "swipeleft" : "swiperight")
                },
                setup: function () {
                    var t = this,
                        i = e(t);
                    i.bind(l, function (t) {
                        function s(t) {
                            n && (o = e.event.special.swipe.stop(t), Math.abs(n.coords[0] - o.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
                        }
                        var o, n = e.event.special.swipe.start(t);
                        i.bind(d, s).one(r, function () {
                            i.unbind(d, s), n && o && e.event.special.swipe.handleSwipe(n, o), n = o = a
                        })
                    })
                }
            }, e.each({
                scrollstop: "scrollstart",
                taphold: "tap",
                swipeleft: "swipe",
                swiperight: "swipe"
            }, function (t, i) {
                e.event.special[t] = {
                    setup: function () {
                        e(this).bind(i, e.noop)
                    }
                }
            })
        }(e, this)
    }), $(document).ready(function () {
        $('.jsBookAppointment').click(function(){
            $('.headerCntr.headerCntr-new .headerbottomBox .menu .navbar').toggleClass('add-book-appointment');
            $('.footerCntr').toggleClass('add-book-appointment');
            $('.site-dropdown-red').toggleClass('open-booking');
        })
        $(".carousel.slide").swiperight(function () {
            $(this).carousel("prev")
        }), $(".carousel.slide").swipeleft(function () {
            $(this).carousel("next")
        })

        $('.js-viewDept').fadeIn(100);
        $('.js-viewDept a').click(function () {
            $(this).parent('li').fadeOut(100);
            $(this).parent('li').nextAll('li').fadeIn(1000);
        })

        $(".scroll-height").mCustomScrollbar({
            theme: "dark",
        });

        $('#mapmodal').modal('show');


        $('.jsLocationSlider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            variableWidth: false,
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: true
                    }
                }
            ]
        });

        $('.jsTreeLifeSlider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        centerMode: true,
                        centerPadding: '30px',
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        centerMode: true,
                        centerPadding: '10px',
                        variableWidth: false,
                    }
                }
            ]
        });        

        //   advance eco system   

        // exchange value in circle box
        // $('.js-ecoImageSlider .eco-circle-text .eco-text').each(function(){
        //     $(this).click(function(){
        //         var getTextActive = $('.js-ecoImageSlider .eco-circle-text.active .eco-text').text();
        //         var getText = $(this).text();

        //         $(this).text(getTextActive); 
        //         $('.js-ecoImageSlider .eco-circle-text.active .eco-text').text(getText);
        //     })
        // })

        // replace circle image and content
        $('.js-circle').click(function () {
            // $('.js-circle').removeClass('disabled-text'); 
            // $(this).addClass('disabled-text');
            $('.js-circle').removeClass('active');
            $(this).addClass('active');
            $('.btn-next').removeClass('disabled');
            $('.btn-prev').removeClass('disabled');
            var ele_tar = $(this).attr('data-image');
            var ele_content = $(this).attr('data-value');
            $('.js-image-content').addClass('opacity-0');
            $('#' + ele_tar).removeClass('opacity-0');
            $('.js-content').addClass('opacity-0');
            $('#' + ele_content).removeClass('opacity-0');
        });

        $('body').on('click', '.btn-next', function () {
            $('.js-circle').removeClass('disabled-text');
            $('.btn-prev').removeClass('disabled');
            $('.js-circle').removeClass('active');
            var index = $('.ecoslider-content .ecosystem-slide-info:not(".opacity-0")').index();
            // var index2 = $('.ecosystem-banner-outer .ecosystem-banner:not(".opacity-0")').index();
            var len = $('.ecoslider-content .ecosystem-slide-info').length;

            var nextIndex = (index - 1);

            $('.js-circle').eq(nextIndex).addClass('active');

            $('.ecosystem-banner-outer .ecosystem-banner').addClass('opacity-0');
            $('.ecosystem-banner-outer .ecosystem-banner').eq(nextIndex).removeClass('opacity-0');
            $('.ecoslider-content .ecosystem-slide-info').addClass('opacity-0');
            $('.ecoslider-content .ecosystem-slide-info').eq(nextIndex).removeClass('opacity-0');
            // if(nextIndex == 1){
            //     // $('.ecosystem-banner-outer .ecosystem-banner:first-child').removeClass('opacity-0');
            //     // $('.ecoslider-content .ecosystem-slide-info:first-child').removeClass('opacity-0');
            //     $('.btn-next').addClass('disabled'); 
            //     $('.btn-prev').removeClass('disabled'); 
            // }

        })

        $('body').on('click', '.btn-prev', function () {
            $('.js-circle').removeClass('disabled-text');
            $('.btn-next').removeClass('disabled');
            $('.js-circle').removeClass('active');
            var index = $('.ecoslider-content .ecosystem-slide-info:not(".opacity-0")').index();
            // var index2 = $('.ecosystem-banner-outer .ecosystem-banner:not(".opacity-0")').index();
            var len = $('.ecoslider-content .ecosystem-slide-info').length;
            var nextIndex = (index + 1) % len;

            $('.js-circle').eq(nextIndex).addClass('active');

            $('.ecosystem-banner-outer .ecosystem-banner').addClass('opacity-0');
            $('.ecosystem-banner-outer .ecosystem-banner').eq(nextIndex).removeClass('opacity-0');
            $('.ecoslider-content .ecosystem-slide-info').addClass('opacity-0');
            $('.ecoslider-content .ecosystem-slide-info').eq(nextIndex).removeClass('opacity-0');
            // if(nextIndex === (len-1) ){
            //     $('.js-circle').eq(nextIndex).addClass('active');
            //     // $('.ecosystem-banner-outer .ecosystem-banner:last-child').addClass('opacity-0');
            //     // $('.ecoslider-content .ecosystem-slide-info:last-child').addClass('opacity-0');
            //     // $('.ecosystem-banner-outer .ecosystem-banner:first-child').removeClass('opacity-0');
            //     // $('.ecoslider-content .ecosystem-slide-info:first-child').removeClass('opacity-0');
            // }

        })


        // end demo



        /* verticle slider */
        var $slider = $(".jsVericleSlider");
        $slider
            .slick({
                dots: true,
                vertical: true,
                infinite: true,
                arrows: false,
                autoplay: false,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                customPaging: function (slider, i) {
                    // var thumb = $($slider.$slides[i]).data();
                    return '<a class="dots">0' + (i + 1) + '</a>';
                },
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        dragable: false,
                        swipeToSlide: false,
                        swipe: false,
                        touchMove: false,
                        draggable: false,
                        accessibility: false,
                    }
                }]
            });



        var winwidth = $(window).width();
        if (winwidth > 767) {
            $slider.on('wheel', (function (e) {
                e.preventDefault();

                if (e.originalEvent.deltaY < 0) {
                    $(this).slick('slickNext');
                } else {
                    $(this).slick('slickPrev');
                }
            }));
        }

        // growth scroll Section
        $('.js-growthscrollPage a').on('click', function () {
            var scrollAnchor = $(this).attr('data-scroll'),
                scrollPoint = $('#' + scrollAnchor).offset().top - 112;

            $('body,html').animate({
                scrollTop: scrollPoint
            }, 500);
            return false;
        });

        $('.jsSubmit').click(function () {
            $('.jsQueryform').addClass('hidden');
            $('.floating-form-thankyou').removeClass('hidden');
        });

         // Start tree of live wizard //

        $('[data-wizard="prev"]').click(function(){
            var prev_fs = $(this).data('prev');
            var active_fs = $(this).data('active');

            $(this).parents('.form-wizard').find('.tabwizard').addClass('hidden');
            $(this).parents('.form-wizard').find('#' + prev_fs).removeClass('hidden');

            $(this).parents('.form-wizard').find('.ecard-tab li').removeClass('active');
            $(this).parents('.form-wizard').find('#' + active_fs).addClass('active');
            $(this).parents('.form-wizard').find('.ecard-tab li.active').removeClass('completed');

        });

        $('[data-wizard="next"]').click(function(){
            var next_fs = $(this).data('next');
            var active_fs = $(this).data('active');
            var img_url = $('.ecard-box.active').find('img').attr('src');

            $(this).parents('.form-wizard').find('.tabwizard').addClass('hidden');
            $(this).parents('.form-wizard').find('#' + next_fs).removeClass('hidden');

            $(this).parents('.form-wizard').find('.ecard-tab li').removeClass('active');
            $(this).parents('.form-wizard').find('#' + active_fs).addClass('active');
            $(this).parents('.form-wizard').find('.ecard-tab li.active').prev('.ecard-tab li').addClass('completed');
            $(this).parents('.form-wizard').find('.update_img').attr("src", img_url);

        });

        $('[data-innerwizard="wizard"]').click(function(){
            var prev_fs = $(this).data('prev');
            var next_fs = $(this).data('next');

            $(this).parents('.personalizedform-wizard').find('.personalized-wizard').addClass('hidden');
            $(this).parents('.personalizedform-wizard').find('#' + prev_fs).removeClass('hidden');
            $(this).parents('.personalizedform-wizard').find('#' + next_fs).removeClass('hidden');
        });

        $('[data-confirm="wizard"]').click(function(){
            var prev_fs = $(this).data('prev');
            var next_fs = $(this).data('next');
            var innerprev_fs = $(this).data('innerprev');
            var active_fs = $(this).data('active');
            var img_url = $('.ecard-box.active').find('img').attr('src');

            $(this).parents('.form-wizard').addClass('hidden')
            $(this).parents('.form-wizard').find('.tabwizard').addClass('hidden');
            $(this).parents('.form-wizard').find('.personalizedform-wizard .personalized-wizard').addClass('hidden');
            $(this).parents('.form-wizard').find('#' + prev_fs).removeClass('hidden');
            $(this).parents('.form-wizard').find('#' + innerprev_fs).removeClass('hidden');
            $(this).parents('.ecard-wizard').find('#' + next_fs).removeClass('hidden');

            $(this).parents('.form-wizard').find('.ecard-tab li').removeClass('active');
            $(this).parents('.form-wizard').find('#' + active_fs).addClass('active');

            $(this).parents('.ecard-wizard').find('.ecard-thankyou .update_img').attr("src", img_url);

        });

        $("input[name='ecard-selection']").click(function () {
            $(".ecard-mainBox .ecard-box").removeClass("active");
            if ($(this).is(":checked")) {
                $(this).parents('.ecard-box').addClass("active");
            }
        });

        // End tree of live wizard //

       

    });

$(window).scroll(function () {
    var windscroll = $(window).scrollTop();

    $('.scroll-section').each(function (index, item) {
        if ($(this).position().top - 114 <= windscroll) {
            $('.js-growthscrollPage a.active').removeClass('active');
            $('.js-growthscrollPage a').eq(index).addClass('active');
        }
    });

    var ele_bannerHeight = $('.js-bannerHeight').height() - 114;
    if (windscroll > ele_bannerHeight) {
        $('.js-growthscrollPage').removeClass('hidden');
    } else {
        $('.js-growthscrollPage').addClass('hidden');
    }

    if(windscroll > 1) {        
        $('.jsHeaderScroll .headertopBox').addClass('hidden');
        $('.jsHeaderScroll .breadcrumbCntr').addClass('hidden');
        $('.jsHeaderScroll').parents('.wrapper').addClass('new-padding-top');
    }
    else {
        $('.jsHeaderScroll .headertopBox').removeClass('hidden');
        $('.jsHeaderScroll .breadcrumbCntr').removeClass('hidden');
        ('.jsHeaderScroll').parents('.wrapper').removeClass('new-padding-top');
    }
});



$('ul.term-list').each(function () {
    var LiN = $(this).find('li').length;
    var ele_total = LiN - 5
    if (LiN > 5) {
        $('li', this).eq(4).nextAll().hide().addClass('toggleable');
        $(this).append('<li class="more"><a href="javascript:void()">See ' + ele_total + ' More</a></li>');
    }
});

$('.more a').on('click', function () {
    var LiN = $(this).parents('ul.term-list').find('li').length;
    var ele_total = LiN - 6;

    if ($(this).text() == "See Less") {
        $(this).text('See ' + ele_total + ' More');
    } else {
        $(this).text('See Less');
    }

    $(this).parent('.more').siblings('li.toggleable').slideToggle();
});

$(window).resize(function () {
    $('.slick-slider').slick('refresh');
})


$('.moreless-button').click(function () {
    if ($('.show-read-more').css('display') == 'none') {
        $('.show-read-more').show(100)
        $(this).text("Read Less");
    } else {
        $('.show-read-more').hide(100)
        $(this).text("Read More")
    }

    // $('.moretext').slideToggle();
    // if ($('.moreless-button').text() == "Read More") {
    //   $(this).text("Read Less")
    // } else {
    //   $(this).text("Read More")
    // }
});
