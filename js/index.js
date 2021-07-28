/*
this function will add different background color classes to "#wrapper" when the window is scrolled to a certain height. It will also remove the next color class so it reverts to the appropriate color when the user scrolls back up. Could be simplified, but this is easy to understand and alter.
*/

$(window).scroll(function() {
    if ($(this).scrollTop() <= 450) {
      $('#wrapper').addClass('colorOne')
        .removeClass('colorTwo');
    } else if ($(this).scrollTop() <= 1000) {
      $('#wrapper').addClass('colorTwo')
        .removeClass('colorThree');
    } else if ($(this).scrollTop() <= 1500) {
      $('#wrapper').addClass('colorThree')
        .removeClass('colorFour');
    } else if ($(this).scrollTop() <= 1850) {
      $('#wrapper').addClass('colorFour')
        .removeClass('colorFive');
    } else {
      $('#wrapper').addClass('colorOne')
    }
  });