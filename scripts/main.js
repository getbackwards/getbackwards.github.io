const contentHeading = document.getElementById('content-heading');
const headerEl = document.getElementById('header-el');
const panelButton = document.getElementById('panel-button');
const panelNav = document.getElementById('panel-nav');
const searchInput = document.getElementById('search-input');

const addBgFade = () => {
  headerEl.classList.add('background--transition');
};

const nav =
  '<nav class="content__nav" [data-target="slide-content"] >' +
  '<ul class="content__ul">' +
  '<li>List item</li>' +
  '<li>List item</li>' +
  '<li>List item</li>' +
  '<ul>' +
  '</nav>';

const addNav = () => {
  contentHeading.insertAdjacentHTML('afterend', nav);
};

const removeBgFade = () => {
  headerEl.classList.remove('background--transition');
};

searchInput.addEventListener('focus', addBgFade);
searchInput.addEventListener('blur', removeBgFade);

panelButton.addEventListener(
  'click',
  function (e) {
    addNav();
  },
  { once: true } // Only run it once
);

const panelNavLi = panelNav.getElementsByTagName('li');

const loopThru = () => {
    let text = ' item';
    for (i = 0; i < panelNavLi.length; i++) {    
    let index = Number([i]);
    let num = index + 1;
    console.log[i];
    console.log(num);
      panelNavLi[i].innerHTML += text + ' ' + num;
      console.log(panelNavLi[i]);
    }
  };

loopThru();
