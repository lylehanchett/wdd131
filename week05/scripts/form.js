// Product data array
const products = [
    { id: 'p1', name: 'Super Blender 3000' },
    { id: 'p2', name: 'Mega Vacuum X' },
    { id: 'p3', name: 'CleanBot Pro' },
    { id: 'p4', name: 'AirFryer Max' },
    { id: 'p5', name: 'AirFryer MINI' },
    { id: 'p6', name: 'Dog grooming kit' },
    { id: 'p7', name: 'NK Shoes' }
];

window.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
  
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModPara = document.getElementById("lastModified");
if (lastModPara) {
    lastModPara.textContent = "Last Modification: " + document.lastModified;
}