 $(function(){
     $('.header-menu .nav-menu li a').click(function (e) {

        console.log("da click");
         $('.header-menu .nav-menu li').removeClass('active');
         $(this).addClass('active');

     })

     $('.dish-item').click(function(event) {
         /* Act on the event */
         $('.dish-item').removeClass('active');
         $(this).addClass('active');
         var id = $(this).attr('data-option');
         var name = $(this).attr('data-name');
         var price = $(this).attr('data-price');
         var slae =$(this).attr('data-sale');
         console.log('id', id);
         console.log('name', name);
         console.log('price', price);
         $('.big-dish img').attr('src', id);
         $('.big-dish h4').text(name);
         $('.big-dish span').text(price);
         $('.big-dish span h5').text(sale);
         $('.big-dish').hide();
     });

     if(screen.width < 767){
        $('.header-btn').click(function (event) {
            event.preventDefault();
            $('.top-menu').toggleClass('show');
            $('.background-moblie').toggleClass('show');
            $('body').addClass('hidden')
        })
         $('.background-moblie').click(function (event) {
             event.preventDefault();
             $('.top-menu').removeClass('show');
             $('.background-moblie').removeClass('show');
             $('body').removeClass('hidden')
         })
     }
     // $('.list-button ul li ').click(function(event) {
     //     event.preventDefault();
     //     console.log("ahhashd")
     //     $('.list-button ul li ').removeClass('active');
     //     $(this).addClass('active');
     //     x = $(this).index();
     //     x= x+1;
     //     $('.list-dish .product-item').removeClass('hienlen');
     //     $('.list-dish .product-item:nth-child('+x+')').addClass('hienlen');
     // });
     $('.list-button ul li').click(function(event) {
         event.preventDefault();
         $('.list-button ul li').removeClass('active');
         $('.list-dish .product-item').removeClass('hienlen');
         $(this).addClass('active');
         var id = $(this).attr('data-option');
         console.log(id);
         $('.tab-content').hide();
         $('#'+id).show();
         $('#'+id).addClass('hienlen');
        
     });
     if(screen.width < 767){
         $('.slick-img').slick({
             slidesToShow: 2,
             slidesToScroll: 1,
             // autoplay: true,
             // autoplaySpeed: 2000,
         });
     }
     else if (screen.width > 767){
         $('.slick-img').slick({
             slidesToShow: 5,
             slidesToScroll: 1,
             // autoplay: true,
             // autoplaySpeed: 2000,
         });
     }
     
     $('.slick-content').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         // autoplay: true,
         // autoplaySpeed: 2000,
     });
    
});
 