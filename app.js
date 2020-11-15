

$(document).ready(function () {
  $('.js-scrollTo').on('click', function () { 
    toggleNav(true)
      let page = $(this).attr('href'); 
      let speed = 750; 
      $('html, body').animate({ scrollTop: $(page).offset().top }, speed); 
      return false;
  });

  $(window).click(toggleNav);

  function toggleNav(anchor = false) {
    if (($(".main-wrapper:hover").length != 0) || anchor == true) {
      if ($(".main-wrapper").hasClass("translate-body")) {
        $(".main-wrapper").removeClass("translate-body");
        $('.navigation').toggleClass('isOpen');
        $('.barre').toggleClass('close');
      }
    }
  }

  $('.btn-navigation').click(function (event) {
    
    $(".barre").toggleClass('close', 400).promise().done(function () {
      console.log("click")
      $(".main-wrapper").toggleClass("translate-body");
    });

    $('.navigation').toggleClass('isOpen');
  });

  $('.close').click(function () {
    $(".main-wrapper").toggleClass("translate-body");
    $('.modal').removeClass('open');
    $('.cont').removeClass('blur');
  });

});

$("#scrollTop").click(function () {
  $('html,body').animate({ scrollTop: 0 }, 200);
})

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 300) {
    $('.fixed-header').css("display", "block");

  } else {
    $('.fixed-header').css("display", "none");
  }
});


