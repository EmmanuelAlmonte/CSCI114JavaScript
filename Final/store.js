'use strict'
$(function() {//ajax get request
    let updateUser = $.ajax({
        method: "GET",
        url: "storecontents.json",             
        dataType: 'json',
    });
    updateUser.done(function( data ) {

        //using webtitle from json file for website title
        let webTitle = data.head.title;
        let contentClick = '';
        let productImg = $('.imgsDiv');
        productImg.addClass('hideImg');
        //adding title to webpage title
        let updateTitle = $('#web-title').append(webTitle);
        
        //determining if user clicked items
        $('#miscellaneous-items').change(function(){
            let randomselect = $(this).val();
            if(randomselect == 'Art'){
                productClicked(randomselect);
            }
            else if(randomselect == 'Stickers'){
                productClicked(randomselect);
            }
            else if(randomselect == 'Videos'){
                productClicked(randomselect);
            }
            else if(randomselect == 'Gloves'){
                productClicked(randomselect);
            }
            else if(randomselect == 'Videos'){
                productClicked(randomselect);
            }
            else if (randomselect== 'Gloves'){
                productClicked(randomselect);
            }

        });
        //deteriming if user clicked items
        $('.carsContent').on('click',function(evnt){
            let carClick = evnt.originalEvent.isTrusted;
            if(carClick=true){
                contentClick= 'car';
                productClicked(contentClick);   
            }
        });  
            
        //deteriming if user clicked items and calling function productClicked()

        $('.bikesContent').on('click', function(evnt){
            let bikeClick = evnt.originalEvent.isTrusted;
            if(bikeClick= true){
                contentClick= 'bike';
                productClicked(contentClick); 
            }
            else if(contentClick!='bike'){
                console.log('not equal');
            }
        });
        //deteriming if user clicked items and calling function productClicked()
        $('.ballsContent').on('click', function(evnt){
            let ballClick = evnt.originalEvent.isTrusted;
            if(ballClick= true){
                contentClick= 'ball';
                productClicked(contentClick);
            }        
        
        });

        $('.toysContent').on('click', function(evnt){
            let toyClick = evnt.originalEvent.isTrusted;
            if(toyClick= true){
                contentClick= 'toy';
                productClicked(contentClick);

            }
            
        });
        //function determines what menu option user clicked and displays all content within Type
        function productClicked(product){
            if(product =='car'){ 
                productImg.removeClass('hideImg');


                let firstImg = $('#firstImg').attr('src', 'imgs/cars/car1.jpeg');
                let secondImg = $('#secondImg').attr('src', 'imgs/cars/car2.jpeg');
                let thirdImg = $('#thirdImg').attr('src', 'imgs/cars/car3.jpeg');
                let fourthImg = $('#fourthImg').attr('src', 'imgs/cars/car4.jpeg');
                let fifthImg = $('#fifthImg').attr('src', 'imgs/cars/car5.jpeg');
                let sixthImg = $('#sixthImg').attr('src', 'imgs/cars/car6.jpeg');
            }
            else if(product =='bike'){

                
                productImg.removeClass('hideImg');
                let firstImg = $('#firstImg').attr('src', 'imgs/bikes/blackbike.jpeg');
                let secondImg = $('#secondImg').attr('src', 'imgs/bikes/bluedritbike.jpeg');
                let thirdImg = $('#thirdImg').attr('src', 'imgs/bikes/racedirtbike.jpeg'); 
                let fourthImg = $('#fourthImg').attr('src', 'imgs/bikes/motorbike.jpeg');
                let fifthImg = $('#fifthImg').attr('src', 'imgs/bikes/tanbike.jpeg');
                let sixthImg = $('#sixthImg').attr('src', 'imgs/bikes/bike6.jpg');
                
            }
            else if(product== 'ball'){


                productImg.removeClass('hideImg');
                let firstImg = $('#firstImg').attr('src','imgs/balls/baseball.jpeg ');
                let secondImg = $('#secondImg').attr('src', 'imgs/balls/soccer.jpeg');
                let thirdImg = $('#thirdImg').attr('src', 'imgs/balls/softball.jpeg'); 
                let fourthImg = $('#fourthImg').attr('src', 'imgs/balls/football.jpeg');
                let fifthImg = $('#fifthImg').attr('src', 'imgs/balls/tennis.jpeg');
                let sixthImg = $('#sixthImg').attr('src', 'imgs/balls/bball.jpg');
                return product;
            }
            else if(product== 'toy'){
                productImg.removeClass('hideImg');
                let firstImg = $('#firstImg').attr('src', 'imgs/Toys/helicopter.jpeg');
                let secondImg = $('#secondImg').attr('src', 'imgs/Toys/nerfgun1(1).jpeg');
                let thirdImg = $('#thirdImg').attr('src', 'imgs/Toys/nerfpistol.jpeg'); 
                let fourthImg = $('#fourthImg').attr('src', 'imgs/Toys/plane.jpeg');
                let fifthImg = $('#fifthImg').attr('src', 'imgs/Toys/watergun.jpeg');
                let sixthImg = $('#sixthImg').attr('src', 'imgs/Toys/waterpistol.jpeg');
                return product;
            }

            else if(product =='Art'){
                productImg.removeClass('hideImg');
                let firstImg = $('#firstImg').attr('src', 'imgs/art/art_piece1.jpeg');
                let secondImg = $('#secondImg').attr('src', 'imgs/art/art_piece2.jpg');
                let thirdImg = $('#thirdImg').attr('src', 'imgs/art/artpiece3.jpeg');
                let fourthImg = $('#fourthImg').attr('src', 'imgs/art/artpiece4.jpeg');
                let fifthImg = $('#fifthImg').attr('src', 'imgs/art/artpiece5.jpeg');
                let sixthImg = $('#sixthImg').attr('src', 'imgs/art/artpiece6.jpeg');
                return product;

            }
            else if(product =='Stickers'){
                productImg.removeClass('hideImg');
                let firstImg = $('#firstImg').attr('src', 'imgs/stickers/sticker1.jpeg');
                let secondImg = $('#secondImg').attr('src', 'imgs/stickers/sticker2.jpeg');
                let thirdImg = $('#thirdImg').attr('src', 'imgs/stickers/sticker3.jpeg');
                let fourthImg = $('#fourthImg').attr('src', 'imgs/stickers/sticker4.jpeg');
                let fifthImg = $('#fifthImg').attr('src', 'imgs/stickers/sticker5.jpeg');
                let sixthImg = $('#sixthImg').attr('src', 'imgs/stickers/sticker6.jpeg');
                return product;

            }
            else if(product== 'Videos'){
                productImg.removeClass('hideImg');
                let firstImg = $('#firstImg').attr('src', 'imgs/videos/doggy.gif');
                let secondImg = $('#secondImg').attr('src', 'imgs/videos/shaq.gif');
                let thirdImg = $('#thirdImg').attr('src', 'imgs/videos/goodwork.gif'); 
                let fourthImg = $('#fourthImg').attr('src', 'imgs/videos/greatjob.gif');
                let fifthImg = $('#fifthImg').attr('src', 'imgs/videos/kitty.gif');
                let sixthImg = $('#sixthImg').attr('src', 'imgs/videos/puppy.gif');
                return product;
            }
            else if(product== 'Gloves'){
                productImg.removeClass('hideImg');
                let firstImg = $('#firstImg').attr('src', 'imgs/gloves/baseball.jpeg');
                let secondImg = $('#secondImg').attr('src', 'imgs/gloves/box.jpeg');
                let thirdImg = $('#thirdImg').attr('src', 'imgs/gloves/football.jpeg'); 
                let fourthImg = $('#fourthImg').attr('src', 'imgs/gloves/goalkeeper.jpeg');
                let fifthImg = $('#fifthImg').attr('src', 'imgs/gloves/sports.jpeg');
                let sixthImg = $('#sixthImg').attr('src', 'imgs/gloves/wintergloves.jpeg');
                return product;

            }
            
            else{
                alert('error');
            }
            
        }
    
    });

});