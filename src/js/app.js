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
  }
})


let scrollMonitor = require('scrollmonitor');

function addStickyHeader(element) {
  element.classList.add('hide');
  setTimeout(function(){ element.classList.add('sticky'); }, 200);
}


function stickyHeader() {

  let header = document.querySelector('.js-site-header');

  if(! header) {
    return;
  }

  const secondWatcher = scrollMonitor.create(header, 300);
  secondWatcher.lock();
  secondWatcher.enterViewport(() => header.classList.remove('sticky','hide'));
  secondWatcher.exitViewport(() => addStickyHeader(header));

}

stickyHeader();

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

function toggleMenu(event,button,nav) {
  event.preventDefault();
  button.classList.toggle('open');
  nav.classList.toggle('active');
}

function hamburger() {
  let hamburger = document.querySelector('.js-toggle-menu');
  let menu = document.querySelector('.js-mobile-menu');

  console.log(hamburger);
  console.log(menu);

  if(! hamburger || ! menu) {
    return;
  }
  console.log('ok');
  hamburger.addEventListener('click', (e) => toggleMenu(e, hambuger, menu));
}

hamburger();


