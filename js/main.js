const menuBtn = document.querySelector('.menu_btn');
const menulist = document.querySelector('.header_nav');

menuBtn.addEventListener('click', () => {
    menulist.classList.toggle('menu_open');
});

document.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !menulist.contains(event.target)) {
        menulist.classList.remove('menu_open');
    }
});

var details = document.querySelectorAll("details");
for (i = 0; i < details.length; i++) {
    details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
    if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for (i = 0; i < details.length; i++) {
        if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
        details[i].removeAttribute("open");
    }
}