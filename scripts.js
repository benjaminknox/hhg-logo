(function($) {
  
  var $logoALetter,
      $h_ndyWord,
      $logoALawn,
      $logoAHandy,
      $lawnText,
      $handyText,
      lawnLogo = 'lawn',
      homeLogo = 'home',
      animationTiming = 4000,
      flipTiming = animationTiming/2,
      flipTransitionTime = 200,
      flipInTimer,
      animationTimer,
      documentVisible = true,
      currentLogo = homeLogo;
  
  $(initialize);
  
  function initialize() {
    loadHeroHTML();
    checkHandyChanges();
    
    bindToVisibilityChange(freezeFlipping);
    
    startAnimation();
  }
  
  function reset() {
    $('.logo-animation').css('opacity', 0);
    $('#logo-a-' + currentLogo).css('opacity', 1);
    $('#' + currentLogo + '-text').css('opacity', 1);
    
    clearInterval(animationTimer);
    clearTimeout(flipInTimer);
  }
  
  function startAnimation() {
    if(animationTimer) {
      reset();
    }
    animationTimer = setInterval(flip, flipTiming);
  }
  
  function freezeFlipping(e) {
    documentVisible = e.data.visible;
    
    if(e.data.visible) {
      startAnimation();
    } else {
      reset();
    }
  }
  
  function bindToVisibilityChange(eventAction) {
    $(window).on("blur", {visible: false}, eventAction);
    $(window).on("focus", {visible: true}, eventAction);
  }
  
  function flipIn(logo) {
    jQuery('#' + logo +'-text').animateCss({animationName:'flipInX', opacity: '1'});
    jQuery('#logo-a-' + logo).animateCss({animationName:'flipInY', opacity: '1'});
  }
  
  function flipOut(logo) {
    jQuery('#' + logo +'-text').animateCss({animationName:'flipOutX', opacity: '0'});
    jQuery('#logo-a-' + logo).animateCss({animationName:'flipOutY', opacity: '0'});
  }
     
  function flip() {
    var flipFrom = currentLogo,
        flipTo = (flipFrom === lawnLogo) ? homeLogo : lawnLogo;
    
    flipOut(flipFrom);
    
    flipInTimer = setTimeout(flipIn, flipTransitionTime, flipTo);
    
    currentLogo = flipTo;
  }
  
  function loadHeroHTML() {
    $h_ndyWord = $('#h_ndy-img');
    $logoALetter = $('#logo-a-home, #logo-a-lawn');
    $logoALawn = $('#logo-a-lawn');
    $logoAHandy = $('#logo-a-home');
    $lawnText = $('#lawn-text');
    $handyText = $('#home-text');
  }
  
  function checkHandyChanges() {
    if($logoALetter && $h_ndyWord) {
      $logoALetter.css({
        height: $h_ndyWord.height() + 'px'
      });
    }
    setTimeout(checkHandyChanges, 20);
  }
  
})(jQuery);
