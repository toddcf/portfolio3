$( document ).ready( function() {

  // Not actually using "direction," because this animation will only happen once.
  $( '.additional-sample__backboard_omnifood' ).waypoint( function( direction ) {
    $( '.additional-sample__backboard_omnifood' ).addClass( 'additional-sample__backboard_omnifood_effects' );
  }, {
    offset: '85%'
  });

} );