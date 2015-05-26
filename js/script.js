/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function(){
    jQuery('#downArrowImage').click(function(e) {
        $('#infoDiv').ScrollTo({
		    duration: 300,
		    easing: 'linear'
		});

    });
    jQuery('.headerLabelStyle').click(function(e) {
    	
    	jQuery('.headerLabelStyle').css("color","#000");
		$(this).css("color","#999");
    });
    jQuery('#galleryBtn').click(function(e) {
        $('#galleryDiv').ScrollTo({
		    duration: 500,
		    easing: 'linear'
		});

    });

});

