'use strict';


$(function() {
    //created variable cart for the contents of the cart
    let cart = $('#cart-content');
    //created multiple list items
    let listItem1 = $('<li>');
    let listItem2 = $('<li>');
    let listItem3 = $('<li>');
    let listItem4 = $('<li>');
    let listItem5 = $('<li>');
    let listItem6 = $('<li>');
    //created a img element
    let imgItem = $('img');

    //this is the users infor which was inputted in form element
    let userChoice = $('#user-info');
    //checking if user clicked on the cart and needs to see cart items.
    userChoice.removeClass('clicked');
    $('#cart').on('click', function(evnt){
        let check = $("#cart-content");
        if(check.hasClass('clicks')){
            check.removeClass('clicks');
        }
        else{
            check.addClass('clicks');
        }
    })

    //this determines whether form has been submitted or not. 
    $('#button').on('click', function(evnt) {
        let userName = $('#full-name').val();
        let items = $('#item-int').val();
        evnt.preventDefault();
        

        $("#web-title").append( userName);
    });

    //Decides what user selects between guest and create an account. 
    $("input[type='radio']").click( function(){
        let choice = $("input[type=radio][name='account-type']:checked").val();
        if( choice == 'user'){
            userChoice.addClass('clicked');
        }
        else{
            userChoice.removeClass('clicked');
        }
    });

    //allows user to add items to gallery
    $('#productOne').on('click',function(){
        let imgSrc = $('#firstImg').attr('src');
        listItem1.text(imgSrc);
        cart.append(listItem1);

    })
    $('#b1').on('click',function(){
        let imgSrc = $('#secondImg').attr('src');
        listItem2.text(imgSrc);
        cart.append(listItem2);

    })
    $('#b2').on('click',function(){
        let imgSrc = $('#thirdImg').attr('src');
        listItem3.text(imgSrc);
        cart.append(listItem3);

    })
    $('#b3').on('click',function(){
        let imgSrc = $('#fourthImg').attr('src');
        listItem4.text(imgSrc);
        cart.append(listItem4);
    })
    $('#b5').on('click',function(){
        let imgSrc = $('#fifthImg').attr('src');
        listItem5.text(imgSrc);
        cart.append(listItem5);
    })
    $('#b6').on('click',function(){
        let imgSrc = $('#sixthImg').attr('src');
        listItem6.text(imgSrc);
        cart.append(listItem6);
    })




});