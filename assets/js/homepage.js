// Hide/Reveal Nav:
function navReveal() {
  var navBar = document.querySelector('.nav');
  var navBarHeight = navBar.offsetHeight;
  if (window.scrollY < navBarHeight) {
    navBar.style.top = '-' + navBarHeight + 'px';
  } else {
    navBar.style.top = '0';
    navBar.style.transition = '500ms';
  }
}
navReveal();
window.addEventListener('scroll', navReveal);

$( document ).ready( function() {

  // Author Site Effects:
  if ($(window).width() < 576) {

    // Author Site card's offset triggers animation.
    // Not actually using "direction," because this animation will only happen once.
    $( '.additional-sample__backboard_author-site' ).waypoint( function( direction ) {
      $( '.additional-sample__backboard_author-site' ).addClass( 'additional-sample__backboard_author-site_effects' );
    }, {
      offset: '85%'
    });
  } else {
    // My Portfolio card's offset triggers animation for all other cards.
    // Not actually using "direction," because this animation will only happen once.
    $( '.additional-sample__backboard_my-portfolio' ).waypoint( function( direction ) {
      $( '.additional-sample__backboard_author-site' ).addClass( 'additional-sample__backboard_author-site_effects' );
    }, {
      offset: '85%'
    });
  }
  

  // My Portfolio Effects:
  // Not actually using "direction," because this animation will only happen once.
  $( '.additional-sample__backboard_my-portfolio' ).waypoint( function( direction ) {
    $( '.additional-sample__backboard_my-portfolio' ).addClass( 'additional-sample__backboard_my-portfolio_effects' );
  }, {
    offset: '85%'
  });


  // Omnifood Effects:
  if ($(window).width() < 576) {
    // Omnifood's card triggers its own animation.
    // Not actually using "direction," because this animation will only happen once.
    $( '.additional-sample__backboard_omnifood' ).waypoint( function( direction ) {
      $( '.additional-sample__backboard_omnifood' ).addClass( 'additional-sample__backboard_omnifood_effects' );
    }, {
      offset: '85%'
    });
  } else {
    // My Portfolio card triggers Omnifood's animation.
    // Not actually using "direction," because this animation will only happen once.
    $( '.additional-sample__backboard_my-portfolio' ).waypoint( function( direction ) {
      $( '.additional-sample__backboard_omnifood' ).addClass( 'additional-sample__backboard_omnifood_effects' );
    }, {
      offset: '85%'
    });
  }

} );