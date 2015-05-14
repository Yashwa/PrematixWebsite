/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//  <!--menu active-->

$(function() {

    $('.nav li a').on('click', function(e) {

        e.preventDefault(); // prevent link click if necessary?

        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');

        if (!$thisLi.hasClass('active'))
        {
            $ul.find('li.active').removeClass('active');
            $thisLi.addClass('active');
        }

    })

})





//hide show content


$(function() {
    $('#show-smartphone').click(function() {
        $('div[id^=div]').hide();
        $('#t2').hide();
        $('#t1').hide();
        $('#b5').hide();
        $('#b4').hide();
        $('#b3').hide();
        $('#b2').hide();
        $('#b1').hide();
        $('#h2').hide();
        $('#h1').hide();
        $('#div1').show();
    });
    $('#show-tablet').click(function() {
        $('div[id^=div]').hide();
        $('#s5').hide();
        $('#s6').hide();
        $('#s4').hide();
        $('#s3').hide();
        $('#s2').hide();
        $('#s1').hide();
        $('#b5').hide();
        $('#b4').hide();
        $('#b3').hide();
        $('#b2').hide();
        $('#b1').hide();
        $('#h2').hide();
        $('#h1').hide();
        $('#div2').show();
    });

    $('#show-barcode').click(function() {
        $('div[id^=div]').hide();
        $('#s5').hide();
        $('#s6').hide();
        $('#s4').hide();
        $('#s3').hide();
        $('#s2').hide();
        $('#s1').hide();
        $('#t2').hide();
        $('#t1').hide();
        $('#h2').hide();
        $('#h1').hide();
        $('#div3').show();
    });

    $('#show-handheld').click(function() {
        $('div[id^=div]').hide();
        $('#s5').hide();
        $('#s6').hide();
        $('#s4').hide();
        $('#s3').hide();
        $('#s2').hide();
        $('#s1').hide();
        $('#b5').hide();
        $('#b4').hide();
        $('#b3').hide();
        $('#b2').hide();
        $('#b1').hide();
        $('#t2').hide();
        $('#t1').hide();
        $('#div4').show();
    });
    $('#show-printer').click(function() {
        $('div[id^=div]').hide();
        $('#s5').hide();
        $('#s6').hide();
        $('#s4').hide();
        $('#s3').hide();
        $('#s2').hide();
        $('#s1').hide();
        $('#b5').hide();
        $('#b4').hide();
        $('#b3').hide();
        $('#b2').hide();
        $('#b1').hide();
        $('#t2').hide();
        $('#t1').hide();
        $('#h2').hide();
        $('#h1').hide();
        $('#div5').show();
    });
});


//        <!--smartphone products-->


$(function() {
    $('#sm1').click(function() {
        $('#s5').hide();
        $('#s6').hide();
        $('#s4').hide();
        $('#s3').hide();
        $('#s2').hide();
        $('#s1').show();

    });
    $('#sm2').click(function() {
        $('#s1').hide();
        $('#s2').show();
        $('#s3').hide();
        $('#s4').hide();
        $('#s5').hide();
        $('#s6').hide();

    });
    $('#sm3').click(function() {
        $('#s4').hide();
        $('#s3').show();
        $('#s2').hide();
        $('#s1').hide();
        $('#s5').hide();
        $('#s6').hide();


    });
    $('#sm4').click(function() {
        $('#s5').hide();
        $('#s4').show();
        $('#s2').hide();
        $('#s3').hide();
        $('#s1').hide();
        $('#s6').hide();

    });
    $('#sm5').click(function() {
        $('#s4').hide();
        $('#s5').show();
        $('#s2').hide();
        $('#s3').hide();
        $('#s1').hide();
        $('#s6').hide();

    });
    $('#sm6').click(function() {
        $('#s4').hide();
        $('#s6').show();
        $('#s2').hide();
        $('#s3').hide();
        $('#s1').hide();
        $('#s5').hide();

    });
})


//        <!--Tablet products-->


$(function() {
    $('#tb1').click(function() {
        $('#t2').hide();
        $('#t1').show();
    });
    $('#tb2').click(function() {
        $('#t1').hide();
        $('#t2').show();
    });

})

//        <!--Barcode scanners-->


$(function() {
    $('#bs1').click(function() {
        $('#b5').hide();
        $('#b4').hide();
        $('#b3').hide();
        $('#b2').hide();
        $('#b1').show();

    });
    $('#bs2').click(function() {
        $('#b1').hide();
        $('#b2').show();
        $('#b3').hide();
        $('#b4').hide();
        $('#b5').hide();

    });
    $('#bs3').click(function() {
        $('#b4').hide();
        $('#b3').show();
        $('#b2').hide();
        $('#b1').hide();
        $('#b5').hide();


    });
    $('#bs4').click(function() {
        $('#b5').hide();
        $('#b2').hide();
        $('#b3').hide();
        $('#b1').hide();
        $('#b4').show();
    });
    $('#bs5').click(function() {
        $('#b4').hide();
        $('#b5').show();
        $('#b2').hide();
        $('#b3').hide();
        $('#b1').hide();

    });

})


//        <!--Handheld Devices-->


$(function() {
    $('#hd1').click(function() {
        $('#h2').hide();
        $('#h1').show();
    });
    $('#hd2').click(function() {
        $('#h1').hide();
        $('#h2').show();
    });

})



//        <!--scroll on top-->


$(document).ready(function() {
    $(document).scroll(function() {
        var scroll = $(this).scrollTop();
        var topDist = $("#container").position();
        if (scroll > topDist.top) {
            $('.product-nav').css({"position": "fixed", "top": "0", "margin-top": "50px"});
        } else {
            $('.product-nav').css({"position": "static", "top": "auto", "margin-top": "50px"});
        }
    });
});






//        <!--slowly scroll--> 

$(document).ready(function() {
    $(".scroll").click(function(event) {
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });
});


//        <!--scroll top-->


$("a[href='#top']").click(function() {
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
});
