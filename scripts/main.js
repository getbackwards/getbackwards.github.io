const contentHeading = document.getElementById('content-heading');
const headerEl = document.getElementById('header-el');
const panelButton = document.getElementById('panel-button');
const searchInput = document.getElementById('search-input');

const addBgFade = () => {
  headerEl.classList.add('background--transition');
};

const nav =
  '<div class="content">' +
  '<nav class="content__nav">' +
  '<ul>' +
  '<li>List item</li>' +
  '<li>List item</li>' +
  '<li>List item</li>' +
  '<ul>' +
  '</nav>';

// const addNav = () => {
//     contentHeading.insertAdjacentHTML('afterend', nav);
// }

const addNav = () => {
  contentHeading.insertAdjacentHTML('afterend', nav);
};

const removeBgFade = () => {
  headerEl.classList.remove('background--transition');
};

// panelButton.addEventListener('click', addNav);
searchInput.addEventListener('focus', addBgFade);
searchInput.addEventListener('blur', removeBgFade);

panelButton.addEventListener(
  'click',
  function (e) {
    addNav();
  },
  { once: true }
);
