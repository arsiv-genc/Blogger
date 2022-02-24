const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebar = document.querySelector("#sidebar");

sidebarToggle.addEventListener("click", function () {
sidebar.classList.toggle("translate-x-0");
sidebar.classList.toggle("-translate-x-72");
});

const current = location.pathname.split('/')[3];
const menuItems = document.querySelectorAll('.menu-item a');
if(!current) {
menuItems[0].className += " is-active";
}
for (let i = 0, len = menuItems.length; i &lt; len; i++) {
if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
menuItems[i].className += " is-active";
}
}