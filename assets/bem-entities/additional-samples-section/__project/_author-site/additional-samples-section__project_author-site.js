$( document ).ready( function() {

  // Not actually using "direction," because this animation will only happen once.
  $( '.additional-samples-section__project_author-site' ).waypoint( function( direction ) {
    $( '.additional-samples-section__project_author-site' ).addClass( 'additional-samples-section__project_author-site_effects' );
  }, {
    offset: '85%'
  });

} );