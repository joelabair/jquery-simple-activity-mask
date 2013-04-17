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
