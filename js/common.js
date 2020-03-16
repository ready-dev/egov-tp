$(document).ready(function(){ 
        var main = $('.slider').bxSlider({ 
        auto: true,	//자동으로 슬라이드 
        controls : false,	//좌우 화살표	
        autoControls: false,	//stop,play 
        pager:false,	//페이징 
        pause: 3000, 
        autoDelay: 0,	
        speed: 500, 
        stopAutoOnclick:true, 
        autoHover:true,
        maxSlides: 2,
        moveSlides : 1,
        slideMargin:0      // 최소 노출 개수
        
    }); 

    //     $('#fullpage').fullpage({
    //         //options here
    //         licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    //         autoScrolling:true,
    //         scrollHorizontally: true
    //     });

	// //methods
	// $.fn.fullpage.setAllowScrolling(false);

    $(".bx-stop").click(function(){	// 중지버튼 눌렀을때 
        main.stopAuto(); 
        $(".bx-stop").hide(); 
        $(".bx-start").show(); 
        return false; 
    }); 
    
    $(".bx-start").click(function(){	//시작버튼 눌렀을때 
        main.startAuto(); 
        $(".bx-start").hide(); 
        $(".bx-stop").show(); 
        return false; 
    }); 
    
    $(".bx-start").hide();	//onload시 시작버튼 숨김. 

    $("#btn_close").click(function () {
        setCookieMobile( "todayCookie", "done" , 1);
        $(".bx-wrapper").hide();
        $(".slider-off").hide();
    });
     
    function setCookieMobile ( name, value, expiredays ) {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }
    function getCookieMobile () {
        var cookiedata = document.cookie;
        if ( cookiedata.indexOf("todayCookier=done") < 0 ){
             $(".bx-wrapper").show();
             $(".slider-off").show();
        }
        else {
            $(".bx-wrapper").hide();
            $(".slider-off").hide();
        }
    }
    getCookieMobile();
}); 

$(function(){
    $("#de-menu-1").mouseover(function(){
        $("#hidden-menu").show('10000'); //천천히 보이기

    });
    $("#hidden-menu").mouseleave(function(){
        $("#hidden-menu").hide('10000'); //천천히 사라짐
    });

    // $("#de-menu-2").mouseover(function(){
    //     $("#hidden-menu-1").show('10000'); //천천히 보이기

    // });
    // $("#hidden-menu-1").mouseleave(function(){
    //     $("#hidden-menu-1").hide('10000'); //천천히 사라짐
    // });

    

});

var seemSize = 1,
     zoomSize = 1,
     browser = navigator.userAgent.toLowerCase();
function zoomIn()
    {
        seemSize += 0.05;
        zoomSize *= 1.2;
        zoom();
    }
    function zoomOut()
    {
        seemSize -= 0.05;
        zoomSize /= 1.2;
        zoom();
    }
    function zoom()
    {
       if (browser.indexOf("firefox") != -1) { //브라우저가 firefox일때
        document.body.style.webkitTransform =    'scale('+seemSize+')';  
        document.body.style.webkitTransformOrigin = '50% 0 0'; //늘리고 줄였을때위치, 
        document.body.style.msTransform =   'scale('+seemSize+')'; 
        document.body.style.msTransformOrigin = '50% 0 0';
        document.body.style.transform = 'scale('+seemSize+')';
        document.body.style.transformOrigin='50% 0 0';
        document.body.style.OTransform = 'scale('+seemSize+')';
        document.body.style.OTransformOrigin='50% 0 0';
       }else{
        document.body.style.zoom = zoomSize;
        }
    }

