// Fetch data from the server
fetch('https://api.example.com/products')
    .then(response => response.json())
    .then(data => {
        // Display the data in the search results section
        const searchResults = document.getElementById('search-results');
        data.forEach(product => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
            `;
            searchResults.appendChild(div);
        });
    });