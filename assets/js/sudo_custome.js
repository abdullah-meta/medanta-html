$(document).ready(function() {
    var ajaximages = [
        'assets/images/slide/slide1.jpg',
        'assets/images/slide/slide2.jpg',
        'assets/images/slide/slide3.jpg',
        'assets/images/slide/slide4.jpg',
        'assets/images/slide/slide1.jpg'
    ];


    var totalSlides = ajaximages.length;

    $(document).ready(function() {
        // Initializing. 
        var mainSlider = $("#slider").sudoSlider({
            continuous: true,
            preloadajax: true,
            prevNext: false,
            effect: "fade",
            controlsFade: false,
            ajax: ajaximages,
            /*ajaxLoad: function(t) {
                // Caption.
                $(this).css("position", "relative").append('<div class="caption" >' + imagestext[t - 1] + '</div>');
            },*/
            beforeAnimation: function(t) {
                // Caption
                $(this).children('.caption').hide();

                // Thumbnails fade to which is current.
                var allSlides = controlsSlider.children().children();
                var currentThumbnail = controlsSlider.getSlide(t).add(controlsSlider.getSlide(t + totalSlides)).add(controlsSlider.getSlide(t + 2 * totalSlides));
                allSlides.not(currentThumbnail).fadeTo(400, 0.5);
                currentThumbnail.fadeTo(400, 1);

                var dir = (t - 1) + totalSlides;
                var currentSlide = controlsSlider.getValue("currentSlide");
                var diff = -currentSlide + dir;
                var targetSlide = dir;

                var newDiff = -currentSlide + dir + totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir + totalSlides;
                    diff = newDiff;
                }

                newDiff = -currentSlide + dir - totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir - totalSlides;
                }

                controlsSlider.goToSlide(targetSlide);
            },
            afterAnimation: function(t) {
                // Caption.
                $(this).children('.caption').slideDown(400);
            }
        });
        // The controls slider
        var controlsSlider = $("#sliderControls").sudoSlider({
            ajax: ajaximages.concat(ajaximages).concat(ajaximages),
            prevNext: false,
            slideCount: 4,
            moveCount: 1,
            vertical: true,
            startSlide: totalSlides,
            continuous: true,
            customLink: "#sliderControlsContainer .controls a",
            ajaxLoad: function(t) {
                // Width to height ratio.
                $img = $(this).find('img');
                var height = $img.height("auto").height();
                var width = $img.width("auto").width();
                var widthToHeight = width / height;
                // Width of slider is 696. I use 7 px of spacing between each thumbnail. And i have 4 thumbnails.
                var thumbNailWidth = (696 - 7 * 3) / 4;
                var thumbNailHeight = thumbNailWidth / widthToHeight;

                $img.width(thumbNailWidth).height(thumbNailHeight);
                controlsSlider.adjust();
                $img.attr("data-target", t);
                // I got some CSS that makes sure that the image is only shown, when the class loaded is added.
                $img.addClass("loaded");

                // Making sure all thumbnails are faded except the current one.
                if (t % totalSlides != mainSlider.getValue("currentSlide")) {
                    controlsSlider.getSlide(t).fadeTo(0, 0.5);
                }
            },
            afterAnimation: function(t) {
                if (t <= totalSlides) {
                    controlsSlider.goToSlide(t + totalSlides, 0);
                } else if (t > 2 * totalSlides) {
                    controlsSlider.goToSlide(t - totalSlides, 0);
                }
            }
        });

        // Making the thumbnails do something.
        $("#sliderControls").on("click", "img", function() {
            $('.slidesContainer div img').removeClass('active');
            $(this).addClass('active');
            var slide = $(this).attr("data-target");
            mainSlider.goToSlide(Number(slide) % totalSlides);
        });
    });
});

$(document).ready(function() {
    var ajaximages = [
        'assets/images/slide/slide1.jpg',
        'assets/images/slide/slide2.jpg',
        'assets/images/slide/slide3.jpg',
        'assets/images/slide/slide4.jpg',
        'assets/images/slide/slide1.jpg'
    ];


    var totalSlides = ajaximages.length;

    $(document).ready(function() {
        // Initializing. 
        var mainSlider = $("#slider2").sudoSlider({
            continuous: true,
            preloadajax: true,
            effect: "fade",
            prevNext: false,
            controlsFade: false,
            ajax: ajaximages,
            /*ajaxLoad: function(t) {
                // Caption.
                $(this).css("position", "relative").append('<div class="caption" >' + imagestext[t - 1] + '</div>');
            },*/
            beforeAnimation: function(t) {
                // Caption
                $(this).children('.caption').hide();

                // Thumbnails fade to which is current.
                var allSlides = controlsSlider.children().children();
                var currentThumbnail = controlsSlider.getSlide(t).add(controlsSlider.getSlide(t + totalSlides)).add(controlsSlider.getSlide(t + 2 * totalSlides));
                allSlides.not(currentThumbnail).fadeTo(400, 0.5);
                currentThumbnail.fadeTo(400, 1);

                var dir = (t - 1) + totalSlides;
                var currentSlide = controlsSlider.getValue("currentSlide");
                var diff = -currentSlide + dir;
                var targetSlide = dir;

                var newDiff = -currentSlide + dir + totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir + totalSlides;
                    diff = newDiff;
                }

                newDiff = -currentSlide + dir - totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir - totalSlides;
                }

                controlsSlider.goToSlide(targetSlide);
            },
            afterAnimation: function(t) {
                // Caption.
                $(this).children('.caption').slideDown(400);
            }
        });
        // The controls slider
        var controlsSlider = $("#sliderControls2").sudoSlider({
            ajax: ajaximages.concat(ajaximages).concat(ajaximages),
            prevNext: false,
            slideCount: 4,
            moveCount: 1,
            vertical: true,
            startSlide: totalSlides,
            continuous: true,
            customLink: "#sliderControlsContainer2 .controls a",
            ajaxLoad: function(t) {
                // Width to height ratio.
                $img = $(this).find('img');
                var height = $img.height("auto").height();
                var width = $img.width("auto").width();
                var widthToHeight = width / height;
                // Width of slider is 696. I use 7 px of spacing between each thumbnail. And i have 4 thumbnails.
                var thumbNailWidth = (696 - 7 * 3) / 4;
                var thumbNailHeight = thumbNailWidth / widthToHeight;

                $img.width(thumbNailWidth).height(thumbNailHeight);
                controlsSlider.adjust();
                $img.attr("data-target", t);
                // I got some CSS that makes sure that the image is only shown, when the class loaded is added.
                $img.addClass("loaded");

                // Making sure all thumbnails are faded except the current one.
                if (t % totalSlides != mainSlider.getValue("currentSlide")) {
                    controlsSlider.getSlide(t).fadeTo(0, 0.5);
                }
            },
            afterAnimation: function(t) {
                if (t <= totalSlides) {
                    controlsSlider.goToSlide(t + totalSlides, 0);
                } else if (t > 2 * totalSlides) {
                    controlsSlider.goToSlide(t - totalSlides, 0);
                }
            }
        });

        // Making the thumbnails do something.
        $("#sliderControls2").on("click", "img", function() {
            var slide = $(this).attr("data-target");
            mainSlider.goToSlide(Number(slide) % totalSlides);
        });
    });
});

$(document).ready(function() {
    var ajaximages = [
        'assets/images/slide/slide1.jpg',
        'assets/images/slide/slide2.jpg',
        'assets/images/slide/slide3.jpg',
        'assets/images/slide/slide4.jpg',
        'assets/images/slide/slide1.jpg'
    ];


    var totalSlides = ajaximages.length;

    $(document).ready(function() {
        // Initializing. 
        var mainSlider = $("#slider3").sudoSlider({
            continuous: true,
            preloadajax: true,
            effect: "fade",
            prevNext: false,
            controlsFade: false,
            ajax: ajaximages,
            /*ajaxLoad: function(t) {
                // Caption.
                $(this).css("position", "relative").append('<div class="caption" >' + imagestext[t - 1] + '</div>');
            },*/
            beforeAnimation: function(t) {
                // Caption
                $(this).children('.caption').hide();

                // Thumbnails fade to which is current.
                var allSlides = controlsSlider.children().children();
                var currentThumbnail = controlsSlider.getSlide(t).add(controlsSlider.getSlide(t + totalSlides)).add(controlsSlider.getSlide(t + 2 * totalSlides));
                allSlides.not(currentThumbnail).fadeTo(400, 0.5);
                currentThumbnail.fadeTo(400, 1);

                var dir = (t - 1) + totalSlides;
                var currentSlide = controlsSlider.getValue("currentSlide");
                var diff = -currentSlide + dir;
                var targetSlide = dir;

                var newDiff = -currentSlide + dir + totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir + totalSlides;
                    diff = newDiff;
                }

                newDiff = -currentSlide + dir - totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir - totalSlides;
                }

                controlsSlider.goToSlide(targetSlide);
            },
            afterAnimation: function(t) {
                // Caption.
                $(this).children('.caption').slideDown(400);
            }
        });
        // The controls slider
        var controlsSlider = $("#sliderControls3").sudoSlider({
            ajax: ajaximages.concat(ajaximages).concat(ajaximages),
            prevNext: false,
            slideCount: 4,
            moveCount: 1,
            vertical: true,
            startSlide: totalSlides,
            continuous: true,
            customLink: "#sliderControlsContainer3 .controls a",
            ajaxLoad: function(t) {
                // Width to height ratio.
                $img = $(this).find('img');
                var height = $img.height("auto").height();
                var width = $img.width("auto").width();
                var widthToHeight = width / height;
                // Width of slider is 696. I use 7 px of spacing between each thumbnail. And i have 4 thumbnails.
                var thumbNailWidth = (696 - 7 * 3) / 4;
                var thumbNailHeight = thumbNailWidth / widthToHeight;

                $img.width(thumbNailWidth).height(thumbNailHeight);
                controlsSlider.adjust();
                $img.attr("data-target", t);
                // I got some CSS that makes sure that the image is only shown, when the class loaded is added.
                $img.addClass("loaded");

                // Making sure all thumbnails are faded except the current one.
                if (t % totalSlides != mainSlider.getValue("currentSlide")) {
                    controlsSlider.getSlide(t).fadeTo(0, 0.5);
                }
            },
            afterAnimation: function(t) {
                if (t <= totalSlides) {
                    controlsSlider.goToSlide(t + totalSlides, 0);
                } else if (t > 2 * totalSlides) {
                    controlsSlider.goToSlide(t - totalSlides, 0);
                }
            }
        });

        // Making the thumbnails do something.
        $("#sliderControls3").on("click", "img", function() {
            var slide = $(this).attr("data-target");
            mainSlider.goToSlide(Number(slide) % totalSlides);
        });
    });
});

$(document).ready(function() {
    var ajaximages = [
        'assets/images/slide/slide1.jpg',
        'assets/images/slide/slide2.jpg',
        'assets/images/slide/slide3.jpg',
        'assets/images/slide/slide4.jpg',
        'assets/images/slide/slide1.jpg'
    ];


    var totalSlides = ajaximages.length;

    $(document).ready(function() {
        // Initializing. 
        var mainSlider = $("#slider4").sudoSlider({
            continuous: true,
            preloadajax: true,
            prevNext: false,
            effect: "fade",
            controlsFade: false,
            ajax: ajaximages,
            /*ajaxLoad: function(t) {
                // Caption.
                $(this).css("position", "relative").append('<div class="caption" >' + imagestext[t - 1] + '</div>');
            },*/
            beforeAnimation: function(t) {
                // Caption
                $(this).children('.caption').hide();

                // Thumbnails fade to which is current.
                var allSlides = controlsSlider.children().children();
                var currentThumbnail = controlsSlider.getSlide(t).add(controlsSlider.getSlide(t + totalSlides)).add(controlsSlider.getSlide(t + 2 * totalSlides));
                allSlides.not(currentThumbnail).fadeTo(400, 0.5);
                currentThumbnail.fadeTo(400, 1);

                var dir = (t - 1) + totalSlides;
                var currentSlide = controlsSlider.getValue("currentSlide");
                var diff = -currentSlide + dir;
                var targetSlide = dir;

                var newDiff = -currentSlide + dir + totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir + totalSlides;
                    diff = newDiff;
                }

                newDiff = -currentSlide + dir - totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir - totalSlides;
                }

                controlsSlider.goToSlide(targetSlide);
            },
            afterAnimation: function(t) {
                // Caption.
                $(this).children('.caption').slideDown(400);
            }
        });
        // The controls slider
        var controlsSlider = $("#sliderControls4").sudoSlider({
            ajax: ajaximages.concat(ajaximages).concat(ajaximages),
            prevNext: false,
            slideCount: 4,
            moveCount: 1,
            vertical: true,
            startSlide: totalSlides,
            continuous: true,
            customLink: "#sliderControlsContainer4 .controls a",
            ajaxLoad: function(t) {
                // Width to height ratio.
                $img = $(this).find('img');
                var height = $img.height("auto").height();
                var width = $img.width("auto").width();
                var widthToHeight = width / height;
                // Width of slider is 696. I use 7 px of spacing between each thumbnail. And i have 4 thumbnails.
                var thumbNailWidth = (696 - 7 * 3) / 4;
                var thumbNailHeight = thumbNailWidth / widthToHeight;

                $img.width(thumbNailWidth).height(thumbNailHeight);
                controlsSlider.adjust();
                $img.attr("data-target", t);
                // I got some CSS that makes sure that the image is only shown, when the class loaded is added.
                $img.addClass("loaded");

                // Making sure all thumbnails are faded except the current one.
                if (t % totalSlides != mainSlider.getValue("currentSlide")) {
                    controlsSlider.getSlide(t).fadeTo(0, 0.5);
                }
            },
            afterAnimation: function(t) {
                if (t <= totalSlides) {
                    controlsSlider.goToSlide(t + totalSlides, 0);
                } else if (t > 2 * totalSlides) {
                    controlsSlider.goToSlide(t - totalSlides, 0);
                }
            }
        });

        // Making the thumbnails do something.
        $("#sliderControls4").on("click", "img", function() {
            var slide = $(this).attr("data-target");
            mainSlider.goToSlide(Number(slide) % totalSlides);
        });
    });
});

$(document).ready(function() {
    var ajaximages = [
        'assets/images/slide/slide1.jpg',
        'assets/images/slide/slide2.jpg',
        'assets/images/slide/slide3.jpg',
        'assets/images/slide/slide4.jpg',
        'assets/images/slide/slide1.jpg'
    ];


    var totalSlides = ajaximages.length;

    $(document).ready(function() {
        // Initializing. 
        var mainSlider = $("#slider5").sudoSlider({
            continuous: true,
            preloadajax: true,
            effect: "fade",
            prevNext: false,
            controlsFade: false,
            ajax: ajaximages,
            /*ajaxLoad: function(t) {
                // Caption.
                $(this).css("position", "relative").append('<div class="caption" >' + imagestext[t - 1] + '</div>');
            },*/
            beforeAnimation: function(t) {
                // Caption
                $(this).children('.caption').hide();

                // Thumbnails fade to which is current.
                var allSlides = controlsSlider.children().children();
                var currentThumbnail = controlsSlider.getSlide(t).add(controlsSlider.getSlide(t + totalSlides)).add(controlsSlider.getSlide(t + 2 * totalSlides));
                allSlides.not(currentThumbnail).fadeTo(400, 0.5);
                currentThumbnail.fadeTo(400, 1);

                var dir = (t - 1) + totalSlides;
                var currentSlide = controlsSlider.getValue("currentSlide");
                var diff = -currentSlide + dir;
                var targetSlide = dir;

                var newDiff = -currentSlide + dir + totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir + totalSlides;
                    diff = newDiff;
                }

                newDiff = -currentSlide + dir - totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir - totalSlides;
                }

                controlsSlider.goToSlide(targetSlide);
            },
            afterAnimation: function(t) {
                // Caption.
                $(this).children('.caption').slideDown(400);
            }
        });
        // The controls slider
        var controlsSlider = $("#sliderControls5").sudoSlider({
            ajax: ajaximages.concat(ajaximages).concat(ajaximages),
            prevNext: false,
            slideCount: 4,
            moveCount: 1,
            vertical: true,
            startSlide: totalSlides,
            continuous: true,
            customLink: "#sliderControlsContainer5 .controls a",
            ajaxLoad: function(t) {
                // Width to height ratio.
                $img = $(this).find('img');
                var height = $img.height("auto").height();
                var width = $img.width("auto").width();
                var widthToHeight = width / height;
                // Width of slider is 696. I use 7 px of spacing between each thumbnail. And i have 4 thumbnails.
                var thumbNailWidth = (696 - 7 * 3) / 4;
                var thumbNailHeight = thumbNailWidth / widthToHeight;

                $img.width(thumbNailWidth).height(thumbNailHeight);
                controlsSlider.adjust();
                $img.attr("data-target", t);
                // I got some CSS that makes sure that the image is only shown, when the class loaded is added.
                $img.addClass("loaded");

                // Making sure all thumbnails are faded except the current one.
                if (t % totalSlides != mainSlider.getValue("currentSlide")) {
                    controlsSlider.getSlide(t).fadeTo(0, 0.5);
                }
            },
            afterAnimation: function(t) {
                if (t <= totalSlides) {
                    controlsSlider.goToSlide(t + totalSlides, 0);
                } else if (t > 2 * totalSlides) {
                    controlsSlider.goToSlide(t - totalSlides, 0);
                }
            }
        });

        // Making the thumbnails do something.
        $("#sliderControls5").on("click", "img", function() {
            var slide = $(this).attr("data-target");
            mainSlider.goToSlide(Number(slide) % totalSlides);
        });
    });
});

$(document).ready(function() {
    var ajaximages = [
        'assets/images/slide/slide1.jpg',
        'assets/images/slide/slide2.jpg',
        'assets/images/slide/slide3.jpg',
        'assets/images/slide/slide4.jpg',
        'assets/images/slide/slide1.jpg'
    ];


    var totalSlides = ajaximages.length;

    $(document).ready(function() {
        // Initializing. 
        var mainSlider = $("#slider6").sudoSlider({
            continuous: true,
            preloadajax: true,
            effect: "fade",
            prevNext: false,
            controlsFade: false,
            ajax: ajaximages,
            /*ajaxLoad: function(t) {
                // Caption.
                $(this).css("position", "relative").append('<div class="caption" >' + imagestext[t - 1] + '</div>');
            },*/
            beforeAnimation: function(t) {
                // Caption
                $(this).children('.caption').hide();

                // Thumbnails fade to which is current.
                var allSlides = controlsSlider.children().children();
                var currentThumbnail = controlsSlider.getSlide(t).add(controlsSlider.getSlide(t + totalSlides)).add(controlsSlider.getSlide(t + 2 * totalSlides));
                allSlides.not(currentThumbnail).fadeTo(400, 0.5);
                currentThumbnail.fadeTo(400, 1);

                var dir = (t - 1) + totalSlides;
                var currentSlide = controlsSlider.getValue("currentSlide");
                var diff = -currentSlide + dir;
                var targetSlide = dir;

                var newDiff = -currentSlide + dir + totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir + totalSlides;
                    diff = newDiff;
                }

                newDiff = -currentSlide + dir - totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir - totalSlides;
                }

                controlsSlider.goToSlide(targetSlide);
            },
            afterAnimation: function(t) {
                // Caption.
                $(this).children('.caption').slideDown(400);
            }
        });
        // The controls slider
        var controlsSlider = $("#sliderControls6").sudoSlider({
            ajax: ajaximages.concat(ajaximages).concat(ajaximages),
            prevNext: false,
            slideCount: 4,
            moveCount: 1,
            vertical: true,
            startSlide: totalSlides,
            continuous: true,
            customLink: "#sliderControlsContainer6 .controls a",
            ajaxLoad: function(t) {
                // Width to height ratio.
                $img = $(this).find('img');
                var height = $img.height("auto").height();
                var width = $img.width("auto").width();
                var widthToHeight = width / height;
                // Width of slider is 696. I use 7 px of spacing between each thumbnail. And i have 4 thumbnails.
                var thumbNailWidth = (696 - 7 * 3) / 4;
                var thumbNailHeight = thumbNailWidth / widthToHeight;

                $img.width(thumbNailWidth).height(thumbNailHeight);
                controlsSlider.adjust();
                $img.attr("data-target", t);
                // I got some CSS that makes sure that the image is only shown, when the class loaded is added.
                $img.addClass("loaded");

                // Making sure all thumbnails are faded except the current one.
                if (t % totalSlides != mainSlider.getValue("currentSlide")) {
                    controlsSlider.getSlide(t).fadeTo(0, 0.5);
                }
            },
            afterAnimation: function(t) {
                if (t <= totalSlides) {
                    controlsSlider.goToSlide(t + totalSlides, 0);
                } else if (t > 2 * totalSlides) {
                    controlsSlider.goToSlide(t - totalSlides, 0);
                }
            }
        });

        // Making the thumbnails do something.
        $("#sliderControls6").on("click", "img", function() {
            var slide = $(this).attr("data-target");
            mainSlider.goToSlide(Number(slide) % totalSlides);
        });
    });

});



$(document).ready(function() {
    var ajaximages = [
        'assets/images/slide/slide1.jpg',
        'assets/images/slide/slide2.jpg',
        'assets/images/slide/slide3.jpg',
        'assets/images/slide/slide4.jpg',
        'assets/images/slide/slide1.jpg'
    ];


    var totalSlides = ajaximages.length;

    $(document).ready(function() {
        // Initializing. 
        var mainSlider = $("#slider7").sudoSlider({
            continuous: true,
            preloadajax: true,
            effect: "fade",
            prevNext: false,
            controlsFade: false,
            ajax: ajaximages,
            /*ajaxLoad: function(t) {
                // Caption.
                $(this).css("position", "relative").append('<div class="caption" >' + imagestext[t - 1] + '</div>');
            },*/
            beforeAnimation: function(t) {
                // Caption
                $(this).children('.caption').hide();

                // Thumbnails fade to which is current.
                var allSlides = controlsSlider.children().children();
                var currentThumbnail = controlsSlider.getSlide(t).add(controlsSlider.getSlide(t + totalSlides)).add(controlsSlider.getSlide(t + 2 * totalSlides));
                allSlides.not(currentThumbnail).fadeTo(400, 0.5);
                currentThumbnail.fadeTo(400, 1);

                var dir = (t - 1) + totalSlides;
                var currentSlide = controlsSlider.getValue("currentSlide");
                var diff = -currentSlide + dir;
                var targetSlide = dir;

                var newDiff = -currentSlide + dir + totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir + totalSlides;
                    diff = newDiff;
                }

                newDiff = -currentSlide + dir - totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir - totalSlides;
                }

                controlsSlider.goToSlide(targetSlide);
            },
            afterAnimation: function(t) {
                // Caption.
                $(this).children('.caption').slideDown(400);
            }
        });
        // The controls slider
        var controlsSlider = $("#sliderControls7").sudoSlider({
            ajax: ajaximages.concat(ajaximages).concat(ajaximages),
            prevNext: false,
            slideCount: 4,
            moveCount: 1,
            vertical: true,
            startSlide: totalSlides,
            continuous: true,
            customLink: "#sliderControlsContainer7 .controls a",
            ajaxLoad: function(t) {
                // Width to height ratio.
                $img = $(this).find('img');
                var height = $img.height("auto").height();
                var width = $img.width("auto").width();
                var widthToHeight = width / height;
                // Width of slider is 696. I use 7 px of spacing between each thumbnail. And i have 4 thumbnails.
                var thumbNailWidth = (696 - 7 * 3) / 4;
                var thumbNailHeight = thumbNailWidth / widthToHeight;

                $img.width(thumbNailWidth).height(thumbNailHeight);
                controlsSlider.adjust();
                $img.attr("data-target", t);
                // I got some CSS that makes sure that the image is only shown, when the class loaded is added.
                $img.addClass("loaded");

                // Making sure all thumbnails are faded except the current one.
                if (t % totalSlides != mainSlider.getValue("currentSlide")) {
                    controlsSlider.getSlide(t).fadeTo(0, 0.5);
                }
            },
            afterAnimation: function(t) {
                if (t <= totalSlides) {
                    controlsSlider.goToSlide(t + totalSlides, 0);
                } else if (t > 2 * totalSlides) {
                    controlsSlider.goToSlide(t - totalSlides, 0);
                }
            }
        });

        // Making the thumbnails do something.
        $("#sliderControls7").on("click", "img", function() {
            var slide = $(this).attr("data-target");
            mainSlider.goToSlide(Number(slide) % totalSlides);
        });
    });

});



$(document).ready(function() {
    var ajaximages = [
        'assets/images/slide/slide1.jpg',
        'assets/images/slide/slide2.jpg',
        'assets/images/slide/slide3.jpg',
        'assets/images/slide/slide4.jpg',
        'assets/images/slide/slide1.jpg'
    ];


    var totalSlides = ajaximages.length;

    $(document).ready(function() {
        // Initializing. 
        var mainSlider = $("#slider8").sudoSlider({
            continuous: true,
            preloadajax: true,
            effect: "fade",
            prevNext: false,
            controlsFade: false,
            ajax: ajaximages,
            /*ajaxLoad: function(t) {
                // Caption.
                $(this).css("position", "relative").append('<div class="caption" >' + imagestext[t - 1] + '</div>');
            },*/
            beforeAnimation: function(t) {
                // Caption
                $(this).children('.caption').hide();

                // Thumbnails fade to which is current.
                var allSlides = controlsSlider.children().children();
                var currentThumbnail = controlsSlider.getSlide(t).add(controlsSlider.getSlide(t + totalSlides)).add(controlsSlider.getSlide(t + 2 * totalSlides));
                allSlides.not(currentThumbnail).fadeTo(400, 0.5);
                currentThumbnail.fadeTo(400, 1);

                var dir = (t - 1) + totalSlides;
                var currentSlide = controlsSlider.getValue("currentSlide");
                var diff = -currentSlide + dir;
                var targetSlide = dir;

                var newDiff = -currentSlide + dir + totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir + totalSlides;
                    diff = newDiff;
                }

                newDiff = -currentSlide + dir - totalSlides;
                if (Math.abs(newDiff) < Math.abs(diff)) {
                    targetSlide = dir - totalSlides;
                }

                controlsSlider.goToSlide(targetSlide);
            },
            afterAnimation: function(t) {
                // Caption.
                $(this).children('.caption').slideDown(400);
            }
        });
        // The controls slider
        var controlsSlider = $("#sliderControls8").sudoSlider({
            ajax: ajaximages.concat(ajaximages).concat(ajaximages),
            prevNext: false,
            slideCount: 4,
            moveCount: 1,
            vertical: true,
            startSlide: totalSlides,
            continuous: true,
            customLink: "#sliderControlsContainer8 .controls a",
            ajaxLoad: function(t) {
                // Width to height ratio.
                $img = $(this).find('img');
                var height = $img.height("auto").height();
                var width = $img.width("auto").width();
                var widthToHeight = width / height;
                // Width of slider is 696. I use 7 px of spacing between each thumbnail. And i have 4 thumbnails.
                var thumbNailWidth = (696 - 7 * 3) / 4;
                var thumbNailHeight = thumbNailWidth / widthToHeight;

                $img.width(thumbNailWidth).height(thumbNailHeight);
                controlsSlider.adjust();
                $img.attr("data-target", t);
                // I got some CSS that makes sure that the image is only shown, when the class loaded is added.
                $img.addClass("loaded");

                // Making sure all thumbnails are faded except the current one.
                if (t % totalSlides != mainSlider.getValue("currentSlide")) {
                    controlsSlider.getSlide(t).fadeTo(0, 0.5);
                }
            },
            afterAnimation: function(t) {
                if (t <= totalSlides) {
                    controlsSlider.goToSlide(t + totalSlides, 0);
                } else if (t > 2 * totalSlides) {
                    controlsSlider.goToSlide(t - totalSlides, 0);
                }
            }
        });

        // Making the thumbnails do something.
        $("#sliderControls8").on("click", "img", function() {
            var slide = $(this).attr("data-target");
            mainSlider.goToSlide(Number(slide) % totalSlides);
        });
    });

});