const headerEl = document.getElementById('header-el');
const panelButton = document.getElementById('panel-button');
const searchInput = document.getElementById('search-input');

const addLinearBg = () => {
    headerEl.classList.add('linear-background');
}

const removeLinearBg = () => {
    headerEl.classList.remove('linear-background');
}

searchInput.addEventListener('focus', addLinearBg);
searchInput.addEventListener('blur', removeLinearBg);
