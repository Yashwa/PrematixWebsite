/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

 var myCenter = new google.maps.LatLng(12.746194, 77.8118);

            function initialize()
            {
                var mapProp = {
                    center: myCenter,
                    zoom: 14,
                    title: "Prematix Software Solution",
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

                var marker = new google.maps.Marker({
                    position: myCenter,
                });

                marker.setMap(map);


                var contentString =
                        '<div id="infowindow_content">' +
                        '<p><strong>Prematix Software Solution Pvt Ltd</strong><br>' +
                        '51., Step colony, Dharga, Hosur - 635 126,<br>' +
                        'Tamilnadu,<br>' +
                        '  India</p>' +
                        '<a href="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=prematix+software+solution&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=34.999041,56.513672&amp;ie=UTF8&amp;hq=prematix+software+solution&amp;hnear=&amp;radius=15000&amp;ll=12.746302,77.81157&amp;spn=0.020008,0.043945&amp;z=14&amp;iwloc=A&amp;cid=8735574062042398701&amp;output=embed" target="_blank">View on Google Maps</a>' +
                        '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                infowindow.open(map, marker);
            }

            google.maps.event.addDomListener(window, 'load', initialize);
