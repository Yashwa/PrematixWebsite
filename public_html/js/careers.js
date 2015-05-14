/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

            $(document).ready(function() {
                //nested tab 1
                $("#nestedtab1").dynatabs({
                    tabBodyID: 'nestedtabbody1',
                    showCloseBtn: true
                });
                //nested tab 2
                $("#nestedtab2").dynatabs({
                    tabBodyID: 'nestedtabbody2',
                    showCloseBtn: true
                });
            });
            
            $(document).ready(function() {
                $('#myModal').on('show.bs.modal', function(event) {
                    var button = $(event.relatedTarget) // Button that triggered the modal
                    var titleData = button.data('title'); // Extract value from data-* attributes
                    $(this).find('.modal-title').text(titleData);
                });
            });
            
            $(window).load(function() {
                var carouselContainer = $('.carousel');
                var slideInterval = 3000;

                function toggleCaption() {
                    $('.carousel-caption').hide();
                    var caption = carouselContainer.find('.active').find('.carousel-caption');
                    caption.delay(500).toggle("slide", {direction: 'right'});
                }


                carouselContainer.carousel({
                    interval: slideInterval,
                    cycle: true,
                    pause: "hover"
                }).on('slid.bs.carousel', function() {
                    toggleCaption();
                });
            });//]]>  

                                    var _gaq = _gaq || [];
                                    _gaq.push(['_setAccount', 'UA-36251023-1']);
                                    _gaq.push(['_setDomainName', 'jqueryscript.net']);
                                    _gaq.push(['_trackPageview']);

                                    (function() {
                                        var ga = document.createElement('script');
                                        ga.type = 'text/javascript';
                                        ga.async = true;
                                        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                                        var s = document.getElementsByTagName('script')[0];
                                        s.parentNode.insertBefore(ga, s);
                                    })();

