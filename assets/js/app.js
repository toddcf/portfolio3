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

  // My Portfolio
  $( '#my-portfolio-project' ).waypoint( function( direction ) {
    $( '#my-portfolio-project' ).addClass( 'animate-1s fadeInUp' );
  }, {
    offset: '85%'
  });

  // Omnifood
  $( '#omnifood-project' ).waypoint( function( direction ) {
    $( '#omnifood-project' ).addClass( 'animate-1s animate-delay-a fadeInUp' );
  }, {
    offset: '85%'
  });

  // Author Site
  $( '#author-site-project' ).waypoint( function( direction ) {
    $( '#author-site-project' ).addClass( 'animate-1s animate-delay-b fadeInUp' );
  }, {
    offset: '85%'
  });

  // Footer Icons
  $( '.footer-card' ).waypoint( function( direction ) {
    $( '.footer-card' ).addClass( 'animate-1s bounceInUp' );
  }, {
    offset: '85%'
  });

  // $( '#about-me-card' ).waypoint( function( direction ) {
  //   $( '#about-me-card' ).addClass( 'animate-1s bounceInUp' );
  // }, {
  //   offset: '85%'
  // });

  // GitHub Card
  // $( '#github-card' ).waypoint( function( direction ) {
  //   $( '#github-card' ).addClass( 'animate-1s bounceInUp' );
  // }, {
  //   offset: '85%'
  // });

  // LinkedIn Card
  // $( '#linkedin-card' ).waypoint( function( direction ) {
  //   $( '#linkedin-card' ).addClass( 'animate-1s bounceInUp' );
  // }, {
  //   offset: '85%'
  // });

  // Resume Card
  // $( '#resume-card' ).waypoint( function( direction ) {
  //   $( '#resume-card' ).addClass( 'animate-1s bounceInUp' );
  // }, {
  //   offset: '85%'
  // });

} );