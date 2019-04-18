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
    $( '#adobe-photoshop-skill' ).addClass( 'animate-1s animate-delay-g fadeInRight' );
    $( '#atomic-design-skill' ).addClass( 'animate-1s animate-delay-h fadeInRight' );
    $( '#bem-skill' ).addClass( 'animate-1s animate-delay-i fadeInRight' );
  }, {
    offset: '85%'
  });

} );