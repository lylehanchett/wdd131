// Footer updates
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModPara = document.getElementById("lastModified");
if (lastModPara) {
    lastModPara.textContent = "Last Modification: " + document.lastModified;
}

// Menu toggle
const menuButton = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');
if (menuButton && menuItems) {
    menuButton.addEventListener('click', () => {
        menuItems.classList.toggle('open');
    });
}

// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52790,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-25746.jpg"
    },
    {
        templeName: "Helena Montana",
        location: "Helena, Montana, United States",
        dedicated: "2023, June, 18",
        area: 9600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/helena-montana-temple/helena-montana-temple-37751-main.jpg"
    }
];

// DOM Reference
const container = document.querySelector('#templeContainer');

// Render Function
function renderTemples(templeList) {
    container.innerHTML = ""; // Clear existing
    templeList.forEach(temple => {
        const card = document.createElement('section');
        card.classList.add('temple-card');
        card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
        container.appendChild(card);
    });
}

// Initial Render
renderTemples(temples);

// Filtering Logic
document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const filter = link.dataset.filter;
        let filtered = temples;

        switch (filter) {
            case "old":
                filtered = temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900);
                break;
            case "new":
                filtered = temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000);
                break;
            case "large":
                filtered = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filtered = temples.filter(t => t.area < 10000);
                break;
            default:
                filtered = temples;
        }

        renderTemples(filtered);
    });
});
