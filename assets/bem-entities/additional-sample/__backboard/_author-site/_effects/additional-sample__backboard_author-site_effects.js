$( document ).ready( function() {

  if ($(window).width() < 576) {

    // Author Site card's offset triggers animation.
    // Not actually using "direction," because this animation will only happen once.
    $( '.additional-sample__backboard_author-site' ).waypoint( function( direction ) {
      $( '.additional-sample__backboard_author-site' ).addClass( 'additional-sample__backboard_author-site_effects' );
    }, {
      offset: '85%'
    });
  }

  else {

    // My Portfolio card's offset triggers animation for all other cards.
    // Not actually using "direction," because this animation will only happen once.
    $( '.additional-sample__backboard_my-portfolio' ).waypoint( function( direction ) {
      $( '.additional-sample__backboard_author-site' ).addClass( 'additional-sample__backboard_author-site_effects' );
    }, {
      offset: '85%'
    });

  }

} );