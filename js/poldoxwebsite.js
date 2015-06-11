$(document).ready(function(){
    // Elements we're using
    var $menu_button = $('.bars_container');
    var $menu = $('.big_bars_container');
    var $menu_bg = $('.background');
    var $intro_button = $('.beforemenu .phonebutton');
    var $intro_phone = $('.beforemenu .phoneframe');
    var $intro = $('.beforemenu');
    var $left_phone = $('.phoneleft');
    var $left_phone_buttons = $('.pbars, .littlebars');
    var $left_phone_power_button = $('.left-phone-button');
    var $body = $('body');

    /*******************************************
    STATE

    We have one "big" variable: "state"

    "state" keeps track of the current state of the application.

    State means: "all information needed to represent the
    current condition of the application"
    *********************************************/
    var state = {
        // we  have "show_menu": true or false.
        show_menu: false,
        // shows black intro screen
        intro: true,
        // left phone power
        power: false,
        // left phone visible
        show_left_phone: false
    };

    /*
    Now we can split the code in TWO types of functions:

    1) EVENTS:
    - On click, update the state

    2) DRAW:
    - Given a state, update the layout
     */

    // Events:
    $menu_button.click(function(){
        // update state
        state.show_menu = !state.show_menu;
        // draw layout using state.
        draw(state);
    });

    $left_phone_buttons.click(function(){
        state.show_menu = true;
        draw(state);
    });

    $intro_button.click(function(){
        state.intro = false;
        state.power = true;
        state.show_left_phone = true;
        draw(state);
    });

    $left_phone_power_button.click(function(){
        state.power = !state.power;
        draw(state);
    });

    // DRAW:
    // 
    // Given an input (state), 
    // update the layout to reflect the current state
    function draw(state){
        // Hide menu:
        if(!state.show_menu){   
            $menu_button.addClass('toggled');
            $menu.addClass('big_toggled');
            $left_phone.removeClass('ptoggled');
            $menu_bg.addClass('background_toggled');

        // Show menu:
        } else {
            $menu_button.removeClass('toggled');
            $menu.removeClass('big_toggled');
            $left_phone.addClass('ptoggled');
            $menu_bg.removeClass('background_toggled');
        }

        // Show Intro Screen
        if(state.intro){
            $intro_phone.show();
            $body.addClass('intro');
            $intro.removeClass('beforemenu_toggled');

        // Hide Intro Screen
        } else {
            $body.removeClass('intro'); 
            $intro.addClass('beforemenu_toggled');
        }

        // POWER UP
        if(state.power){
            $left_phone.addClass('left-phone-on');
            $intro.addClass('beforemenu_toggled');
        
        // POWER DOWN
        } else {
            $left_phone.removeClass('left-phone-on');
            if(!state.intro){
                $intro_phone.hide();
            }
            $intro.removeClass('beforemenu_toggled');
        }

        // Show left phone
        if(state.show_left_phone){
            $left_phone.addClass('show-left-phone');
        // Hide left phone
        } else {
            $left_phone.removeClass('show-left-phone');
        }


    }

    // Initialize layout with current state
    draw(state);

});
