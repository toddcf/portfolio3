$( document ).ready( function() {

  // Not actually using "direction," because this animation will only happen once.
  $( '.additional-sample__backboard_author-site' ).waypoint( function( direction ) {
    $( '.additional-sample__backboard_author-site' ).addClass( 'additional-sample__backboard_author-site_effects' );
  }, {
    offset: '85%'
  });

} );