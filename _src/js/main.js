/*=========================================================================================
// INICIO MAIN JS
========================================================================================= */





jQuery(function($) {
	$(document).ready(function() {

/*//$("input[type=checkbox]").css({'width':'60px', 'height':'50px'});
if( $("input[type=checkbox]").prop( "checked" ) ) {
  alert('ok');
}*/
/*
var countChecked = function() {
  var n = $( "input:checked" ).length;
  //$( ".Section-subSection-header-title" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
  //alert('checked');
  if( n > 0 ) {
    $(this).closest('div._row').addClass('active');
  } else {
    $(this).closest('div._row').removeClass('active'); 
  }
};
countChecked();
 
$( "input[type=checkbox]" ).on( "click", countChecked );*/

$("input[type=checkbox]").change(function() {
    if(this.checked) {
        $(this).closest('div._row').addClass('active');
    } else {
         $(this).closest('div._row').removeClass('active'); 
    }
});


//=======================================================
//Aplica a animação no scroll mediante clique no menu
//=======================================================



    $(".u-isScrollDown").click(function(event){        
        event.preventDefault();
        
       

        $('html,body').animate({scrollTop:$(this.hash).offset().top - 0}, 1000);

          if ($(".Navigation--main").hasClass('u-isExpanded')){
            $("#MainNavigation-container, .NavigationButton.NavigationButton--main").removeClass("u-isExpanded")
            $("#MainNavigation-container, .NavigationButton.NavigationButton--main").addClass("u-isCollapsed");  
         }
        
        varHash = $(this).attr('href');

        
        /*if (location.hash == varHash) {
            $(this).addClass('u-isActive');
        } else {
            $(this).removeClass('u-isActive');
        }*/
        
        if(history.pushState) {
        
            history.pushState(null, null, varHash);
        
        }
        else {
        location.hash = '#myhash';
        window.location.hash = varHash;
        }

        
   });




$(function(){
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
      });
    });



$('#polos-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            margin:25,
            center:true,
           //nav:false
        },
        768:{
            items:2,
            margin:50,
            //nav:false
        },
        960:{
            items:4,
            margin:0,
            //nav:true,
        }
    }
});

$('#produtos-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:2,
            margin:25,
           //nav:false
        },
        768:{
            items:3,
            margin:50,
            //nav:false
        },
        960:{
            items:4,
            margin:50,
            //nav:true,
        }
    }
});
$('#blog-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            margin:25,
           //nav:false
        },
        768:{
            items:2,
            margin:50,
            //nav:false
        },
        960:{
            items:2,
            margin:50,
            //nav:true,
        }
    }
});

$('#depoimentos-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            margin:25,
           //nav:false
        },
        768:{
            items:3,
            margin:50,
            //nav:false
        },
        960:{
            items:3,
            margin:50,
            //nav:true,
        }
    }
});
$('#parceiros-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive:{
        0:{
            items:2,
            margin:25,
           //nav:false
        },
        768:{
            items:3,
            margin:50,
            //nav:false
        },
        960:{
            items:6,
            margin:50,
            //nav:true,
        }
    }
});




// ==========================
// Menu Toggle
// ==========================
// 


     $(".e-Toglle").click(function(event){
         event.preventDefault();
         varId = $(this).attr('id');
         varWidthWindow = $(window).width();
         
          if ($(this).hasClass('a-hzt')){
                varSide = 'a-hztResize';
             } else {
                varSide = '';
             }

            
         if ($(this).hasClass('u-isExpanded')){

            //$('body').css({'overflow':'scroll'});
            $(this).removeClass('u-isExpanded');
            $(this).addClass('u-isCollapsed');
                 $('#'+varId+'-container').stop().removeClass('u-isExpanded '+varSide);
                 $('#'+varId+'-container').stop().addClass('u-isCollapsed '+varSide);
                 //if( varId == 'MainNavigation' || varWidthWindow <= 480 ) { $('body').removeClass('u-isScrollOff'); }
                 $('#'+varId+'.SwitchIcon.u-isCollapsed .u-icon').show();
                 $('#'+varId+'.SwitchIcon .iconClose').hide();
                 $('.NavigationLink.Item-level1.is-hasSubMenu, .Navigation--subMenu').removeClass('u-isExpanded');
                 $('.NavigationLink.Item-level1.is-hasSubMenu, .Navigation--subMenu').addClass('u-isCollapsed');
                 
         }else{

             //$('body').css({'overflow':'hidden'});
             $('.u-contentHide, .u-contentHide--button, .Navigation .is-hasSubMenu, .Navigation--subMenu').removeClass('u-isExpanded').addClass('u-isCollapsed');
             $(this).removeClass('u-isCollapsed');
             $(this).addClass('u-isExpanded');
                 $('#'+varId+'-container').stop().removeClass('u-isCollapsed '+varSide);
                 $('#'+varId+'-container').stop().addClass('u-isExpanded '+varSide);
                 //if( varId == 'MainNavigation' || varWidthWindow <= 480 ) { $('body').addClass('u-isScrollOff'); }
                 $('#'+varId+'.SwitchIcon.u-isExpanded .u-icon').hide();
                 $('#'+varId+'.SwitchIcon .iconClose').show();
             }
     });

/*
// ANCHOR ANIMADO
$( "a.NavigationLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 600);
    });
*/

// /*=========================================================================================
// // CLOSE FUNCTION
// =========================================================================================*/

	});
});




// Abre o Lightbox
function LightboxCall(iFrame) {
  //alert( "clicked" );
  jQuery('#Lightbox--container').removeClass('Lightbox--inactive');
  jQuery('#Lightbox--container').addClass('Lightbox--active');
  //$('.Lightbox-window-content').load( 'page-clean.php' );
}
//$( ".LightboxCall" ).on( "click", LightboxCall );


// Fecha o lightbox quando a tecla ESC é pressionada
function KeyUpEsc(evt) {
 
 if (evt.keyCode == 27) {
       jQuery('#Lightbox--container').removeClass('Lightbox--active');
       jQuery('#Lightbox--container').addClass('Lightbox--inactive');
       //$('.Lightbox-window-content').html( '' );
    }
}

jQuery(document).on( "keyup", KeyUpEsc );

// Mais formas de Fechar o LightBox

function LightboxClose() {
  //alert( "clicked" );
  jQuery('#Lightbox--container').removeClass('Lightbox--active');
   jQuery('#Lightbox--container').addClass('Lightbox--inactive');
   //$('.Lightbox-window-content').html( '' );
}

jQuery( ".LightboxClose" ).on( "click", LightboxClose );


