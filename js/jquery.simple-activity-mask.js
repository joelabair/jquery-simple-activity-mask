// jQuery simple masking activity indicator plugin
// Author: Joel A. Bair <joel.a.bair@gmail.com>
// Version: 1.0
// Date: 03-2012
//
// Requires: simple-activity-mask.css + activity.gif
//
// Usage:
//    mask a block level element with a semi-opaque layer
//    $('#mydiv').apply_actmask();
//
//    remove / unmask
//    $('#mydiv').remove_actmask();
//

(function( $ ) {

  $.fn.apply_actmask = function() {
    var w = this.outerWidth();
    var h = this.outerHeight();
    this.addClass('activity');
    var mask = jQuery('<div id="mask"><div id="spinner"></div></div>').css({width: w, height: h, display: 'none'}).prependTo(this);
    jQuery(mask).fadeIn('fast');
  };

  $.fn.remove_actmask = function() {
    this.removeClass('activity');
    jQuery('div#mask',this).remove();
  };

})( jQuery );
