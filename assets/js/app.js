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

  // HTML Skill triggers all skills:
  $( '#html-skill' ).waypoint( function( direction ) {
    $( '#html-skill' ).addClass( 'animate-1s fadeInRight' );
    $( '#css-skill' ).addClass( 'animate-1s animate-delay-a fadeInRight' );
    $( '#javascript-skill' ).addClass( 'animate-1s animate-delay-b fadeInRight' );
    $( '#bootstrap-skill' ).addClass( 'animate-1s animate-delay-c fadeInRight' );
    $( '#foundation-skill' ).addClass( 'animate-1s animate-delay-d fadeInRight' );
    $( '#jquery-skill' ).addClass( 'animate-1s animate-delay-e fadeInRight' );
    $( '#adobe-xd-skill' ).addClass( 'animate-1s animate-delay-f fadeInRight' );
  }, {
    offset: '85%'
  });

} );