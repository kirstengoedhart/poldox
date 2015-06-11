$(document).ready(function(){
    // Elements we're using
    var $menu_button = $('.bars_container');
    var $menu = $('.big_bars_container');
    var $menu_bg = $('.background');

    /*******************************************
    STATE

    We have one "big" variable: "state"

    "state" keeps track of the current state of the application.

    State means: "all information needed to represent the
    current condition of the application"

    In this case, all information we need is: is the menu open or closed?

    *********************************************/
    var state = {
        // in this case, we only have "show_menu": true or false.
        show_menu: false
    };

    /*
    Now we can split the code in TWO types of functions:

    1) EVENTS:
    - On click, update the state

    2) DRAW:
    - Given a state, update the layout
     */

    // DRAW:
    // 
    // Given an input (state), 
    // update the layout to reflect the current state
    function draw(state){
        // Hide menu:
        if(!state.show_menu){   
            $menu_button.addClass('toggled');
            $menu.addClass('big_toggled');
            $menu_bg.addClass('background_toggled');

        // Show menu:
        } else {
            $menu_button.removeClass('toggled');
            $menu.removeClass('big_toggled');
            $menu_bg.removeClass('background_toggled');
        }
    }

    // Events:
    $menu_button.click(function(){
        // update state
        state.show_menu = !state.show_menu;
        // draw layout using state.
        draw(state);
    });

    // Initialize layout with current state
    draw(state);


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
        $pbars_container.toggleClass('pbars_containerlight');       
        $('.littlebars_container').toggleClass('littlebars_containerlight');
    });

    // Bij klikken op kleine balkjes knipperen grotere balkjes paars werkt niet
    $('.littlebars_container').click(function(event){
        $('.bars').addClass('colorAnimation');
    });
});
