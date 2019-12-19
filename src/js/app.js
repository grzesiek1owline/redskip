if (module.hot) {
  module.hot.accept();
}

jQuery('.js-open-faq').click(function(){
  if (jQuery(this).parent(".dropdown__top").hasClass("open")) {

    jQuery(this).parent(".dropdown__top").removeClass("open");
    jQuery(this).parent('.dropdown__top').siblings(".dropdown__btm").slideUp(500);

  } else {

    jQuery(this).parent(".dropdown__top").addClass("open");
    jQuery(this).parent('.dropdown__top').siblings(".dropdown__btm").slideDown(500);

    // jQuery(".dropdown").removeClass("open");
    // jQuery(".dropdown .dropdown__btm").slideUp(500);
    // jQuery(this).parent(".dropdown").addClass("open");
    // jQuery(this).siblings(".dropdown__btm").slideDown(500);

  }
})