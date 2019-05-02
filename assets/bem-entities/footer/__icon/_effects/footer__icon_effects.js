$( document ).ready( function() {

  // Not actually using "direction," because this animation will only happen once.
  $( '.footer__icon' ).waypoint( function( direction ) {
    $( '.footer__icon' ).addClass( 'footer__icon_effects' );
  }, {
    offset: '85%'
  });

} );