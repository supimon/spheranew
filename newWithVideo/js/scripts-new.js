$(document).ready(function(){

    var videoH = $('video').height(),
        videoW = $('video').width(),
        videoHolderW = $('.what-is .banner-div').width(),
        videoHolderH = $('.what-is .banner-div').height(),
        videoHolderR = videoHolderW/videoHolderH,
        videoR = videoW/videoH,
        newVideoW, diffD;

    console.log('videoH: '+videoH+ ' and videoW: '+videoW+
     '\nvideoHolderW: ' +videoHolderW+ ' and videoHolderH: ' +videoHolderH);
     console.log('videoHolderR: '+videoHolderR+ '\nvideoR: ' +videoR);

    if(videoH < videoHolderH){
        diffD = (videoHolderH - videoH)*videoHolderR;
        newVideoW = videoW + diffD;
        $('video').css({'margin-left': -(diffD/2)+'px'}).width(newVideoW);
    }
    if(videoH > videoHolderH) {
        console.log('in');
        diffD = videoH - videoHolderH + 18;
        $('video').css({'margin-top': -diffD+'px'});
    }

    if (window.location.href.indexOf("?response=thankyou") > -1) {
        $('#thankyouModal').modal('show');
    }
    
    var browser = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0 ?
        'opera' : (typeof InstallTrigger !== 'undefined' ?
        'firefox' : (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ||
                    (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari']
                        || safari.pushNotification) ?
        'safari' : (false || !!document.documentMode ?
        'ie' : ((false || !!document.documentMode) && !!window.StyleMedia ?
        'edge' : (!!window.chrome && !!window.chrome.webstore ?
        'chrome' :
        'unknown'
    ))))),
        userAgent = window.navigator.userAgent.toLowerCase(),
        ios = /iphone|ipod|ipad/.test( userAgent );

    // position lookup table
    var posSettings = {
        xs: {
            whatIs : {duration: '100%', txtAnimLength: 0.4, trigHook: 0, imgAnimLength: 1, imageY: '25%'},
            experience : {duration: '150%', txtAnimLength: 0.8, trigHook: 0.8, imgAnimLength: 1, imageY: '25%'},
            filmScene : {trigElem: '.experience .text-div ul', trigHook: 0.72},
            artsScene : {trigElem: '.experience .text-div ul', trigHook: 0.62},
            eventsScene : {trigElem: '.experience .text-div ul', trigHook: 0.40},
            gamingScene : {trigElem: '.experience .text-div ul', trigHook: 0.30},
            concertsScene : {trigElem: '.experience .text-div ul', trigHook: 0.10}
        },
        vs: {
            whatIs : {duration: '100%', txtAnimLength: 0.4, trigHook: 0, imgAnimLength: 1, imageY: '25%'},
            experience : {duration: '200%', txtAnimLength: 0.8, trigHook: 0.8, imgAnimLength: 1, imageY: '25%'},
            filmScene : {trigElem: '.experience .text-div ul', trigHook: 0.7},
            artsScene : {trigElem: '.experience .text-div ul', trigHook: 0.6},
            eventsScene : {trigElem: '.experience .text-div ul', trigHook: 0.45},
            gamingScene : {trigElem: '.experience .text-div ul', trigHook: 0.35},
            concertsScene : {trigElem: '.experience .text-div ul', trigHook: 0.2}
        },
        sm: {
            whatIs : {duration: '100%', txtAnimLength: 0.4, trigHook: 0, imgAnimLength: 1, imageY: '25%'},
            experience : {duration: '150%', txtAnimLength: 0.8, trigHook: 0.8, imgAnimLength: 1, imageY: '25%'},
            filmScene : {trigElem: '.experience .text-div ul', trigHook: 0.7},
            artsScene : {trigElem: '.experience .text-div ul', trigHook: 0.6},
            eventsScene : {trigElem: '.experience .text-div ul', trigHook: 0.5},
            gamingScene : {trigElem: '.experience .text-div ul', trigHook: 0.4},
            concertsScene : {trigElem: '.experience .text-div ul', trigHook: 0.3}
        },
        md: {
            whatIs : {duration: '100%', txtAnimLength: 0.4, trigHook: 0, imgAnimLength: 1, imageY: '35%'},
            experience : {duration: '200%', txtAnimLength: 0.8, trigHook: 0.9, imgAnimLength: 1, imageY: '25%'},
            filmScene : {trigElem: '.experience .text-div ul', trigHook: 0.7},
            artsScene : {trigElem: '.experience .text-div ul', trigHook: 0.65},
            eventsScene : {trigElem: '.experience .text-div ul', trigHook: 0.6},
            gamingScene : {trigElem: '.experience .text-div ul', trigHook: 0.55},
            concertsScene : {trigElem: '.experience .text-div ul', trigHook: 0.5}
        },
        lg: {
            whatIs : {duration: '100%', txtAnimLength: 0.4, trigHook: 0, imgAnimLength: 1, imageY: '35%'},
            experience : {duration: '200%', txtAnimLength: 0.4, trigHook: 0.9, imgAnimLength: 1, imageY: '25%'},
            filmScene : {trigElem: '.experience .text-div ul', trigHook: 0.83},
            artsScene : {trigElem: '.experience .text-div ul', trigHook: 0.81},
            eventsScene : {trigElem: '.experience .text-div ul', trigHook: 0.79},
            gamingScene : {trigElem: '.experience .text-div ul', trigHook: 0.77},
            concertsScene : {trigElem: '.experience .text-div ul', trigHook: 0.75}
        },
        hg: {
            whatIs : {duration: '100%', txtAnimLength: 0.4, trigHook: 0, imgAnimLength: 1, imageY: '35%'},
            experience : {duration: '200%', txtAnimLength: 0.4, trigHook: 0.9, imgAnimLength: 1, imageY: '25%'},
            filmScene : {trigElem: '.experience .text-div ul', trigHook: 0.83},
            artsScene : {trigElem: '.experience .text-div ul', trigHook: 0.81},
            eventsScene : {trigElem: '.experience .text-div ul', trigHook: 0.79},
            gamingScene : {trigElem: '.experience .text-div ul', trigHook: 0.77},
            concertsScene : {trigElem: '.experience .text-div ul', trigHook: 0.75}
        },
        hm: {
            whatIs : {duration: '100%', txtAnimLength: 0.4, trigHook: 0, imgAnimLength: 1, imageY: '35%'},
            experience : {duration: '200%', txtAnimLength: 0.4, trigHook: 0.9, imgAnimLength: 1, imageY: '25%'},
            filmScene : {trigElem: '.experience .text-div ul', trigHook: 0.79},
            artsScene : {trigElem: '.experience .text-div ul', trigHook: 0.77},
            eventsScene : {trigElem: '.experience .text-div ul', trigHook: 0.75},
            gamingScene : {trigElem: '.experience .text-div ul', trigHook: 0.73},
            concertsScene : {trigElem: '.experience .text-div ul', trigHook: 0.71}
        },
        filmWheel: {
            chrome: '58.45% 50%',
            safari: '50% 50%',
            ie: '50% 50%',
            edge: '50% 50%',
            firefox: '52% 50%',
            opera: '50% 50%',
            unknown: '50% 50%'
        }
    };
    var currWidth = 'lg';
    // setup initial position
    setInitPos();
    if(ios) $('.what-is .banner-dv').css({'visibility': 'visible'});
    var micSVG = document.getElementById("micIconSvg");
    ((browser == 'ie' || browser == 'edge') || (browser == 'safari') && (currWidth == 'sm')) ?
        micSVG.setAttribute("viewBox", "0 -15 83.02 81.47"):
        micSVG.setAttribute("viewBox", "0 -15 63.02 61.47");
    $(window).on('resize', function(e){
        setInitPos();
    });
    console.log(browser+'\n '+currWidth + '\nios: '+ios);
    // utility function to set up initial position based on screen width
    function setInitPos(){
        // get viewport dimensions
        switch ($('.width-calc').width()){
            case 1740:
                currWidth = 'hm';
                break;
            case 1340:
            case 1240:
                currWidth = 'hg';
                break;
            case 1140:
                currWidth = 'lg';
                break;
            case 940:
                currWidth = 'md';
                break;
            case 720:
                currWidth = 'sm';
                break;
            case 400:
                currWidth = 'vs';
                break;
            default:
                currWidth = 'xs';
                break;
        }

    }

    // initialise the controller
    var controller = new ScrollMagic.Controller();

    // ========================================== scrollmagic for what-is section

    // if(currWidth == 'xs' || currWidth == 'vs' || currWidth == 'sm' || ios){
    //     var videoTl = new TimelineMax();
    //     videoTl
    //         .to('.what-is .banner-overlay-text',
    //             posSettings[currWidth].whatIs.txtAnimLength,
    //             {autoAlpha: 0, ease: Power0.easeNone})
    //         .to('.what-is .mobile-video-swap',
    //             posSettings[currWidth].whatIs.videoAnimLength,
    //             {y: posSettings[currWidth].whatIs.videoY, ease: Power0.easeNone},
    //             posSettings[currWidth].whatIs.videoDelay);
    //
    //     var parallaxWhatis = new ScrollMagic.Scene({
    //         triggerElement: '.what-is .mobile-video-swap',
    //         triggerHook: 0,
    //         duration: posSettings[currWidth].whatIs.duration
    //     })
    //         .setTween(videoTl)
    //         /*.addIndicators({
    //          name: 'fade scene',
    //          colorTrigger: 'yellow',
    //          colorStart: '#75C695'
    //          })*/
    //         .addTo(controller);
    // }

    // ========================================== experience icons animations

    var filmIconTl = new TimelineMax(),
        artsIconTl = new TimelineMax(),
        eventsIconTl = new TimelineMax(),
        gamingIconTl = new TimelineMax(),
        concertsIconTl = new TimelineMax();
    
    filmIconTl
        .to('#filmIconLi', 0.5, {autoAlpha: 1, y: 20})
        .to('#rotating-parts', 1, {rotation: 180, transformOrigin: posSettings.filmWheel[browser]});

    var filmScene = new ScrollMagic.Scene({
        triggerElement: posSettings[currWidth].filmScene.trigElem,
        triggerHook: posSettings[currWidth].filmScene.trigHook
    })
        .setTween(filmIconTl)
        .addTo(controller);

    artsIconTl
        .to('#artsIconLi', 0.5, {autoAlpha: 1, y: 20})
        .from('#happyFace', 0.5, {x: 20, y: -20})
        .from('#sadFace', 0.5, {x: -20});

    var artsScene = new ScrollMagic.Scene({
        triggerElement: posSettings[currWidth].artsScene.trigElem,
        triggerHook: posSettings[currWidth].artsScene.trigHook
    })
        .setTween(artsIconTl)
        .addTo(controller);

    eventsIconTl
        .to('#eventsIconLi', 0.5, {autoAlpha: 1, y: 20})
        .from('#card0', 0.5, {rotation:10, transformOrigin:"-10% 160%"})
        .from('#card1', 0.5, {rotation:-20, transformOrigin:"0% 50%"});

    var eventsScene = new ScrollMagic.Scene({
        triggerElement: posSettings[currWidth].eventsScene.trigElem,
        triggerHook: posSettings[currWidth].eventsScene.trigHook
    })
        .setTween(eventsIconTl)
        .addTo(controller);

    gamingIconTl
        .to('#gamingIconLi', 0.5, {autoAlpha: 1, y: 20})
        .from('#directionBtn', 0.1, {autoAlpha:0}, 0.4)
        .from('#directionBtn', 0.15, {scale:4, ease: Elastic.easeOut.config(1, 0.8), transformOrigin:"50% 50%"}, 0.48)
        .from('#optionBtn1', 0.1, {autoAlpha:0}, 0.61)
        .from('#optionBtn1', 0.15, {scale:4, ease: Elastic.easeOut.config(1, 0.8), transformOrigin:"50% 50%"}, 0.69)
        .from('#optionBtn2', 0.1, {autoAlpha:0}, 0.82)
        .from('#optionBtn2', 0.15, {scale:4, ease: Elastic.easeOut.config(1, 0.8), transformOrigin:"50% 50%"}, 0.90)
        .from('#optionBtn3', 0.1, {autoAlpha:0}, 1.03)
        .from('#optionBtn3', 0.15, {scale:4, ease: Elastic.easeOut.config(1, 0.8), transformOrigin:"50% 50%"}, 1.11)
        .from('#optionBtn4', 0.1, {autoAlpha:0}, 1.24)
        .from('#optionBtn4', 0.08, {scale:4, ease: Elastic.easeOut.config(1, 0.8), transformOrigin:"50% 50%"}, 1.32);

    var gamingScene = new ScrollMagic.Scene({
        triggerElement: posSettings[currWidth].gamingScene.trigElem,
        triggerHook: posSettings[currWidth].gamingScene.trigHook
    })
        .setTween(gamingIconTl)
        .addTo(controller);

    concertsIconTl
        .to('#concertsIconLi', 0.5, {autoAlpha: 1, y: 20})
        .from('#micCircle', 0.4, {autoAlpha:0, attr:{r:0}, ease: Elastic.easeOut.config(1, 0.3)})
        .from('#micBody', 0.2, {scale:0, transformOrigin:"100% 0%"})
        .from('#micWire', 0.1, {scale:0, transformOrigin:"100% 0%"})
        .from('#micSwitchPath', 0.1, {scale:0, transformOrigin:"0% 0%"})
        .from('#micSwitchCircle', 0.1, {autoAlpha:0, ease: Elastic.easeOut.config(1, 0.3), attr:{r:0}});

    var concertsScene = new ScrollMagic.Scene({
        triggerElement: posSettings[currWidth].concertsScene.trigElem,
        triggerHook: posSettings[currWidth].concertsScene.trigHook
    })
        .setTween(concertsIconTl)
        /*.addIndicators({
            name: 'fade scene',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);


    // ========================================== scrollmagic for what is section

    var whtTl = new TimelineMax();
    whtTl
        .to('.what-is .banner-abs-pos h2',
            posSettings[currWidth].experience.txtAnimLength,
            {autoAlpha: 0, y: 100, ease: Power0.easeNone})
        .to('.what-is .banner-dv',
            posSettings[currWidth].whatIs.imgAnimLength,
            {y: posSettings[currWidth].whatIs.imageY, ease: Power0.easeNone}, 0);

    var parallaxWht = new ScrollMagic.Scene({
        triggerElement: '.what-is .banner-dv',
        triggerHook: posSettings[currWidth].whatIs.trigHook,
        duration: posSettings[currWidth].whatIs.duration
    })
        .setTween(whtTl)
        /*.addIndicators({
         name: 'fade scene',
         colorTrigger: 'yellow',
         colorStart: '#75C695'
         })*/
        .addTo(controller);


    // ========================================== scrollmagic for experience section

    var expTl = new TimelineMax();
    expTl
        .from('.experience .banner-h2 h2',
            posSettings[currWidth].experience.txtAnimLength,
            {autoAlpha: 0, y: 100, ease: Power0.easeNone})
        .to('.experience .banner-div',
            posSettings[currWidth].experience.imgAnimLength,
            {y: posSettings[currWidth].experience.imageY, ease: Power0.easeNone}, 0);

    var parallaxExp = new ScrollMagic.Scene({
        triggerElement: '.experience .banner-div',
        triggerHook: posSettings[currWidth].experience.trigHook,
        duration: posSettings[currWidth].experience.duration
    })
        .setTween(expTl)
        /*.addIndicators({
         name: 'fade scene',
         colorTrigger: 'yellow',
         colorStart: '#75C695'
         })*/
        .addTo(controller);

    // ========================================== scrollmagic for about section

    var abtTl = new TimelineMax();
    abtTl
        .from('.about .banner-h2 h2',
            posSettings[currWidth].experience.txtAnimLength,
            {autoAlpha: 0, y: 100, ease: Power0.easeNone})
        .to('.about .banner-div',
            posSettings[currWidth].experience.imgAnimLength,
            {y: posSettings[currWidth].experience.imageY, ease: Power0.easeNone}, 0);

    var parallaxAbt = new ScrollMagic.Scene({
        triggerElement: '.about .banner-div',
        triggerHook: posSettings[currWidth].experience.trigHook,
        duration: posSettings[currWidth].experience.duration
    })
        .setTween(abtTl)
        /*.addIndicators({
            name: 'fade scene',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);

    // ========================================== scrollmagic for contact section

    var contTl = new TimelineMax();
    contTl
        .to('.contact .banner-div',
            posSettings[currWidth].experience.imgAnimLength,
            {y: posSettings[currWidth].experience.imageY, ease: Power0.easeNone}, 0);

    var parallaxCont = new ScrollMagic.Scene({
        triggerElement: '.contact .banner-div',
        triggerHook: posSettings[currWidth].experience.trigHook,
        duration: posSettings[currWidth].experience.duration
    })
        .setTween(contTl)
        /*.addIndicators({
         name: 'fade scene',
         colorTrigger: 'yellow',
         colorStart: '#75C695'
         })*/
        .addTo(controller);

    // ========================================== pin for technical section

     $('#carousel-example-generic').on('slid.bs.carousel', function (e) {
         $('.slide-indicator li').removeClass('active');
         $('#'+$(e.relatedTarget).data('indicator')).addClass('active');
     });

    // ========================================== page scroll

    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });

    $(document).on("click", "a.circle", function (e) {
        var id = $(this).attr("href");
        $('a.circle').removeClass('active');
        $(this).addClass('active');
        if ($(id).length > 0) {
            e.preventDefault();
            id == '#techScroll' ? $('.navigator').addClass('white-bg') : $('.navigator').removeClass('white-bg');
            // trigger scroll
            controller.scrollTo(id);
        }
    });

    $(document).on("mouseover", "#mailIconSvg", function (e) {
        TweenMax.to("#mailIconSvg", 0.5, {scale:1.25, ease: Elastic.easeOut.config(1, 0.3)});
    });
    $(document).on("mouseout", "#mailIconSvg", function (e) {
        TweenMax.to("#mailIconSvg", 0.5, {scale:1, ease: Elastic.easeOut.config(1, 0.3)});
    });

    $(document).on("click", "#mailIconSvg", function (e) {
        controller.scrollTo('.contact .container');
        setTimeout(function(){
            controller.scrollTo('.contact .container');
        }, 0);
    });
    $(document).on("click", ".arrow", function (e) {
        controller.scrollTo('.text-div');
    });

    new ScrollMagic.Scene({
        triggerElement: '.what-is',
        duration: $('.what-is').height()
    })
        .setClassToggle('.whatisScroll', "active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.experience',
        duration: $('.experience').height()
    })
        .setClassToggle('.expScroll', "active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.technical',
        duration: $('.technical').height()
    })
        .setClassToggle('.techScroll', "active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.technical',
        duration: $('.technical').height()
    })
        .setClassToggle('.navigator', "white-bg")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.about',
        duration: $('.about').height()
    })
        .setClassToggle('.abtScroll', "active")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.contact',
        duration: $('.contact').height()
    })
        .setClassToggle('.contScroll', "active")
        .addTo(controller);

    // turn sound on and off
    $('.sound-legal .sound').click(function(){
        if($('.sound-legal .sound span').hasClass('strike-through')){
            $('.sound-legal .sound span').removeClass('strike-through');
            $('video').prop('muted', false); //unmute
        }else{
            $('.sound-legal .sound span').addClass('strike-through');
            $('video').prop('muted', true); //mute
        }
    });

});
