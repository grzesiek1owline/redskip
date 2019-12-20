if (module.hot) {
  module.hot.accept();
}

// import scrollMonitor from 'scrollmonitor';


jQuery('.js-open-faq').click(function(){
  if (jQuery(this).parent(".dropdown__top").hasClass("open")) {
    jQuery(this).parent(".dropdown__top").removeClass("open");
    jQuery(this).parent('.dropdown__top').siblings(".dropdown__btm").slideUp(500);
  } else {
    jQuery(this).parent(".dropdown__top").addClass("open");
    jQuery(this).parent('.dropdown__top').siblings(".dropdown__btm").slideDown(500);
  }
})

// sticky header

function fixedMenuPadding() {
  let pt = document.querySelector('.js-site-header');
  if(!pt) {
    return;
  }
  let pto = pt.getBoundingClientRect();
  if(! pt.classList.contains('js-no-padding')){
    document.body.style.paddingTop = pto.height + 'px';
  }
}

fixedMenuPadding();



