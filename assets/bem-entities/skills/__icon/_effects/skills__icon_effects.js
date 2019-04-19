$( document ).ready( function() {

  // HTML Skill triggers all skills:
  $( '.skills__icon_html' ).waypoint( function( direction ) {
    $( '.skills__icon' ).addClass( 'skills__icon_effects' );
  }, {
    offset: '85%'
  });

} );