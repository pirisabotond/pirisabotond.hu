$(document).ready( function() {
    $(window).scroll(function(){
        newNumber=$(window).scrollTop();
        newNumber=newNumber*myRatio;
        $('header').css('-webkit-filter',"blur("+newNumber+"px)");
        $('header').css('-moz-filter',"blur("+newNumber+"px)");
        $('header').css('-o-filter',"blur("+newNumber+"px)");
        $('header').css('-ms-filter',"blur("+newNumber+"px)");
        $('header').css('filter',"blur("+newNumber+"px)");
    });
    myRatio=getRatio(20,500);
    
    function getRatio(max,max2) {
        return max/max2;
    }
});