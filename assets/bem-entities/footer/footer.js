$( document ).ready( function() {

  // FOOTER
  var thisYear = new Date().getFullYear();
  // Pass thisYear into footer copyright's .currentYear span:
  // Footer (IIFE):
  var footerInfo = ( function() {
    $( '.currentYear' ).html( '&ndash;&nbsp;' + thisYear + '&nbsp;' );
  }) ();

  // ANIMATIONS ON SCROLL
  // Not actually using "direction," because this animation will only happen once.

  // Footer Icons
  $( '.footer__icon' ).waypoint( function( direction ) {
    $( '.footer__icon' ).addClass( 'footer__icon_effects' );
  }, {
    offset: '85%'
  });

} );