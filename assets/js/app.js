$( document ).ready( function() {

  // ANIMATIONS ON SCROLL
  // Not actually using "direction," because this animation will only happen once.

  // Ed Barton Reference
  $( '#ed-barton-ref' ).waypoint( function( direction ) {
    $( '#ed-barton-ref' ).addClass( 'animate-1s fadeInUp' );
  }, {
    offset: '85%'
  });

  // Anna Flom Reference
  $( '#anna-flom-ref' ).waypoint( function( direction ) {
    $( '#anna-flom-ref' ).addClass( 'animate-1s animate-delay-b fadeInUp' );
  }, {
    offset: '85%'
  });

  // Agnes Azaryan Reference
  $( '#agnes-azaryan-ref' ).waypoint( function( direction ) {
    $( '#agnes-azaryan-ref' ).addClass( 'animate-1s animate-delay-c fadeInUp' );
  }, {
    offset: '85%'
  });

} );