document.addEventListener('DOMContentLoaded', () => {
    const featuredSneakers = [
        { id: 1, name: 'Sneaker 1', rating: 4.5, description: 'A great sneaker.', image: 'sneaker1.jpg' },
        { id: 2, name: 'Sneaker 2', rating: 4.0, description: 'Another great sneaker.', image: 'sneaker2.jpg' },
        { id: 3, name: 'Sneaker 3', rating: 3.5, description: 'Yet another great sneaker.', image: 'sneaker3.jpg' },
        { id: 4, name: 'Sneaker 4', rating: 4.8, description: 'One more great sneaker.', image: 'sneaker4.jpg' },
    ];

    const topRatedSneakers = [
        { id: 5, name: 'Sneaker 5', rating: 5.0, description: 'The best sneaker.', image: 'sneaker5.jpg' },
        { id: 6, name: 'Sneaker 6', rating: 4.9, description: 'Almost the best sneaker.', image: 'sneaker6.jpg' },
        { id: 7, name: 'Sneaker 7', rating: 4.7, description: 'A really good sneaker.', image: 'sneaker7.jpg' },
        { id: 8, name: 'Sneaker 8', rating: 4.6, description: 'A pretty good sneaker.', image: 'sneaker8.jpg' },
    ];

    function renderSneakers(sneakers, containerId) {
        const container = document.querySelector(containerId);
        container.innerHTML = '';
        sneakers.forEach(sneaker => {
            const sneakerTile = document.createElement('div');
            sneakerTile.classList.add('sneaker-tile');
            sneakerTile.innerHTML = `
                <img src="${sneaker.image}" alt="${sneaker.name}">
                <h3>${sneaker.name}</h3>
                <p>${sneaker.description}</p>
                <p>Rating: <span class="rating">${sneaker.rating}</span></p>
                <label for="rating-${sneaker.id}">Rate this sneaker:</label>
                <input type="number" id="rating-${sneaker.id}" name="rating" min="0" max="5" step="0.1">
            `;
            sneakerTile.querySelector('input').addEventListener('input', (event) => {
                const newRating = parseFloat(event.target.value);
                if (newRating >= 0 && newRating <= 5) {
                    sneaker.rating = newRating;
                    sneakerTile.querySelector('.rating').textContent = newRating.toFixed(1);
                }
            });
            container.appendChild(sneakerTile);
        });
    }

    renderSneakers(featuredSneakers, '#featured-sneakers .sneaker-tiles');
    renderSneakers(topRatedSneakers, '#top-rated-sneakers .sneaker-tiles');
});
