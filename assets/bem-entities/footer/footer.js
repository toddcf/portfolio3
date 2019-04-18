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
  $( '.footer-card' ).waypoint( function( direction ) {
    $( '.footer-card' ).addClass( 'animate-1s bounceInUp' );
  }, {
    offset: '85%'
  });

} );