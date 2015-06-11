
$(document).ready(function(){
    

var $big_bars_container = $('.big_bars_container');
var $bars_container = $('.bars_container');
var $big_toggled = $('.big_toggled');
var $pbars_container = $('.pbars_container');

//Klikken in de telefoon zorgt voor menu, en dat achtergrond dan verdwijnt
        

 // Werkt niet. Waarom niet?
$pbars_container.click(function(){
$bars_container.toggleClass('toggled');
            $big_bars_container.toggleClass('big_toggled');
 $('.not_active').toggleClass('active');
                $pbars_container.toggleClass('ptoggled');
//('.background_toggled').addClass('no_bg');
 $('.background_toggled').css({"opacity":0});
    $('.background_toggled').css({"z-index":-1});
$('.background').toggleClass('background_toggled');

});

        
        
        
    
        
        
//Hoe zorg ik ervoor dat ie wel de background doet bij de kleintjes, maar niet als ik op de grote klik en dat deze dan 'goed' blijft? Iets in de css.

// Bij het klikken op de kleintjes
$bars_container.click(function(){            $bars_container.toggleClass('toggled');
            $big_bars_container.toggleClass('big_toggled');
            $('.not_active').toggleClass('active');
                $('.background').toggleClass('background_toggled');
$('.background_toggled').css({"opacity":0.8});
    $('.background_toggled').css({"z-index":1500});

                                      
                                      

                                $pbars_container.toggleClass('pbars_containerlight');
$('.littlebars_container').toggleClass('littlebars_containerlight');
            });
       

        
        
        
       $('.big_bars').click(function(){
  $(this).css({"box-shadow":'7px 7px 5px #999 inset'});         
    
});

        
 //Klikken op de groene knop
$('.greenbutton_hp2').click(function() { 
//Knop wordt rood/groen
$('.greenbutton_hp2').toggleClass('redbutton_hp2');
$('.phonescreen_on').toggleClass('phonescreen_off');

// Het scherm wordt zwart
$('.beforemenu_hp2').addClass('beforemenu fadeInAnimation');
//Vorige moet verwijderd worden voor ronde cirkel
$('.beforemenu_hp2').removeClass('beforemenuOut fadeOutAnimation');
    $('.littlebars_container').toggleClass('littlebars_containerlight');
                });
        
//Klikken op de rode knop
$('.redbutton_hp2').click(function() {
$('.greenbutton_hp2').toggleClass('redbutton_hp2');
    $('.beforemenu_hp2').removeClass('beforemenu fadeInAnimation');
    
//Werkt niet ? 
$('.beforemenu_hp2').addClass('beforemenuOut fadeOutAnimation');

$pbars_container.toggleClass('pbars_containerlight');       $('.littlebars_container').toggleClass('littlebars_containerlight');
});

// Bij klikken op kleine balkjes knipperen grotere balkjes paars werkt niet
$('.littlebars_container').click(function(event){
$('.bars').addClass('colorAnimation');
});
});
      