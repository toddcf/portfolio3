$( document ).ready( function() {

  // Not actually using "direction," because this animation will only happen once.
  $( '.additional-sample__backboard_my-portfolio' ).waypoint( function( direction ) {
    $( '.additional-sample__backboard_my-portfolio' ).addClass( 'additional-sample__backboard_my-portfolio_effects' );
  }, {
    offset: '85%'
  });

} );