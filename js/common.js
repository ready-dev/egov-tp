$(document).ready(function(){ 
        var main = $('.slider').bxSlider({ 
        auto: true,	//자동으로 슬라이드 
        controls : false,	//좌우 화살표	
        autoControls: true,	//stop,play 
        pager:true,	//페이징 
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