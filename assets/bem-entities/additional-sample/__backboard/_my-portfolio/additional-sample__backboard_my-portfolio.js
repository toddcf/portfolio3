$( document ).ready( function() {

  // Not actually using "direction," because this animation will only happen once.
  $( '.additional-samples-section__project_my-portfolio' ).waypoint( function( direction ) {
    $( '.additional-samples-section__project_my-portfolio' ).addClass( 'additional-samples-section__project_my-portfolio_effects' );
  }, {
    offset: '85%'
  });

} );