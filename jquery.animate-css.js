jQuery.fn.extend({
  animateCss: function (props) {
    var animationClass = 'animated ' + props.animationName,
        animationEndName = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        $this = jQuery(this);

    props.opacity = props.opacity || 1;
    
    if(props.opacity === '1') {
      $this.css('opacity', props.opacity);
    }

    this
      .addClass(animationClass)
      .one(animationEndName, function() {
        if(props.opacity === '0') {
          $this.css('opacity', props.opacity);
        }
  
        $this.removeClass(animationClass);
      });

    return this;
  }
});