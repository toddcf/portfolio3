$( document ).ready( function() {

  // FOOTER
  var thisYear = new Date().getFullYear();
  // Pass thisYear into footer copyright's .currentYear span:
  // Footer (IIFE):
  var footerInfo = ( function() {
    $( '.currentYear' ).html( '&ndash;&nbsp;' + thisYear + '&nbsp;' );
  }) ();

} );