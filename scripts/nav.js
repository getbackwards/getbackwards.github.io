// const backdrop = document.getElementById('backdrop');
const menuButton = document.getElementById('js-menu-button');
console.log(menuButton);

const nav = document.getElementById('nav');
console.log(nav);

menuButton.onclick = () => {
    nav.classList.toggle('nav--open');
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        // alert("Escape");
        nav.classList.remove('nav--open');
    }
};
