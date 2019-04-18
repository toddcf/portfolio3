$( document ).ready( function() {

  // My Portfolio
  $( '.additional-samples-section__project_my-portfolio' ).waypoint( function( direction ) {
    $( '.additional-samples-section__project_my-portfolio' ).addClass( 'animate-1s fadeInUp' );
  }, {
    offset: '85%'
  });

} );