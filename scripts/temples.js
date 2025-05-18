const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModPara = document.getElementById("lastModified");
if (lastModPara) {
    lastModPara.textContent = "Last Modification: " + document.lastModified;
}


const menuButton = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

if (menuButton && menuItems) {
    menuButton.addEventListener('click', () => {
        menuItems.classList.toggle('open');
    });
}

