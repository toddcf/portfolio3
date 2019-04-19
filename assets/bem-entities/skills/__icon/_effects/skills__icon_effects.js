$( document ).ready( function() {

  // HTML Skill triggers all skills:
  $( '.skills__icon_html' ).waypoint( function( direction ) {
    $( '.skills__icon' ).addClass( 'skills__icon_effects' );
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