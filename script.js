document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('category-list');
    const productGrid = document.getElementById('product-grid');

    if (categoryList) {
        categoryList.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                const category = event.target.dataset.category;
                displayProducts(category);
            }
        });
    }

    const products = {
        'living-room': [
            { name: 'Classic Sofa', image: 'assets/sofa.jpg', catalog: 'assets/sofa_catalog.pdf' },
            { name: 'Armchair', image: 'assets/armchair.jpg', catalog: 'assets/armchair_catalog.pdf' },
        ],
        'bedroom': [
            { name: 'Queen Bed', image: 'assets/bed.jpg', catalog: 'assets/bed_catalog.pdf' },
            { name: 'Dresser', image: 'assets/dresser.jpg', catalog: 'assets/dresser_catalog.pdf' },
        ],
        'dining-room': [
            { name: 'Dining Table', image: 'assets/dining_table.jpg', catalog: 'assets/dining_table_catalog.pdf' },
            { name: 'Dining Chair', image: 'assets/dining_chair.jpg', catalog: 'assets/dining_chair_catalog.pdf' },
        ],
        'office': [
            { name: 'Executive Desk', image: 'assets/desk.jpg', catalog: 'assets/desk_catalog.pdf' },
            { name: 'Bookcase', image: 'assets/bookcase.jpg', catalog: 'assets/bookcase_catalog.pdf' },
        ]
    };

    function displayProducts(category) {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        const categoryProducts = products[category];
        if (categoryProducts) {
            categoryProducts.forEach(product => {
                const productCard = `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-card-content">
                            <h3>${product.name}</h3>
                            <a href="${product.catalog}" target="_blank">View Catalog</a>
                        </div>
                    </div>
                `;
                productGrid.innerHTML += productCard;
            });
        }
    }

    // Initially display the first category's products
    if (categoryList && categoryList.firstChild) {
        const firstCategory = categoryList.children[0].dataset.category;
        displayProducts(firstCategory);
    }
});
