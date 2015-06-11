var $big_bars_container = $('.big_bars_container');
var $bars_container = $('.bars_container');
var $big_toggled = $('.big_toggled');

$bars_container.click(function(){
    $bars_container.toggleClass('toggled');
    $big_bars_container.toggleClass('big_toggled');
    $('.not_active').toggleClass('active');
    $('.phonebar_container').toggleClass('phonebar_container_toggled');
    $('.background').toggleClass('background_toggled');
    //$('.background_toggled').removeClass('no_bg');
});

$(".big_bars").click(function(){
    $(this).css({"box-shadow":"7px 7px 5px #999 inset"});         
});

// FIRST BUTTON - screen turns white  
$('.phonebutton').click(function(event) {  
    $('.beforemenu').toggleClass('beforemenu_toggled');
});

// RED BUTTON    
$('.redbutton').click(function(){
    // red turns green, from now on toggles
    $('.redbutton').toggleClass('greenbutton');

    // phoneframe comes zooms screen
    $('.phoneframe').addClass('zoomInLeft');

    // green button slides into screen with phone
    $('.greenbutton').addClass('buttonAnimation');

    //phonescreen turns on
    $('.phonescreen_off').toggleClass('phonescreen_on');
            
    //phonescreen turns on (visible)
    $('.phonescreen_on').addClass('buttonAnimation');

    //Phone goes away when white
    $('.phoneleft2').css({'opacity':'0'});
    $('.phoneleft2').css({'z-index':'-1'});
     
    //************ BEGINNEN MET BARRETJES************

    //Als de barretjes moeten verschijnen bij het openen
    //MOET ALLES WORDEN OMGEDRAAID DUS DIT ALLEMAAL PLAKKEN

    //$big_bars_container.toggleClass('big_toggled');

    //En dan geen grijze bedoeling op de homepage
    //$('.background_toggled').addClass('no_bg');

    //Ook de achtergrond moet worden omgedraaid
    // Achtergrond grijs - zichtbaarheid
    //$('.background').toggleClass('background_toggled');

    // Grote barretjes naar zichtbaar en actief
    // $bars_container.toggleClass('toggled');
    // $('.not_active').toggleClass('active');

    // Tabjes minder zichtbaar
    $('.phonebar_container').toggleClass('phonebar_container_toggled');
       
    //Phone slides to the right into the screen
    $('.noanimation').addClass('animationphoneleft_hp');
    // Move the red button
    $(this).css({'top':'425px'});
    $(this).css({'left':'205px'});
});

// GREEN BUTTON (toggles ook background ivm '.phonebutton'
$('.greenbutton').click(function() {
    //phonescreen gaat van wit naar zwart
    $('.phonescreen_on').toggleClass('phonescreen_off');

    // Phone appears when dark
    $('.phoneleft2').css({'opacity':'1'});
    $('.phoneleft2').css({'z-index':'2000'});
});