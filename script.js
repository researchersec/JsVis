// script.js
fetch('https://raw.githubusercontent.com/researchersec/lonewolf/main/prices/latest.json')
    .then(response => response.json())
    .then(data => {
        visualizeData(data);
    })
    .catch(error => console.error('Error fetching data:', error));

function visualizeData(data) {
    const items = data.pricing_data;
    const container = document.getElementById('data-container');
    items.forEach(item => {
        const element = document.createElement('div');
        element.innerHTML = `
            <h3>Item ID: ${item.itemId}</h3>
            <p>Minimum Buyout: ${item.minBuyout}</p>
            <p>Number of Auctions: ${item.numAuctions}</p>
            <p>Quantity Available: ${item.quantity}</p>
        `;
        container.appendChild(element);
    });
}
