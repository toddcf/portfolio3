$( document ).ready( function() {

  // Not actually using "direction," because this animation will only happen once.
  $( '.additional-samples-section__project_omnifood' ).waypoint( function( direction ) {
    $( '.additional-samples-section__project_omnifood' ).addClass( 'additional-samples-section__project_omnifood_effects' );
  }, {
    offset: '85%'
  });

} );