const axios = require('axios');

describe('Fake Store API Tests', () => {
    let products;

    beforeAll(async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            products = response.data;
        } catch (error) {
            console.error('Error fetching products:', error.message);
            products = [];
        }
    });

    test('should return status code 200', async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        expect(response.status).toBe(200);
    });

    test('should have valid product data', () => {
        expect(products).toBeDefined();
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBeGreaterThan(0);
    });

    test('should validate product attributes', () => {
        const defectiveProducts = [];

        products.forEach((product, index) => {
            const defects = [];

            // Check title
            if (!product.title || product.title.trim() === '') {
                defects.push('Empty or missing title');
            }

            // Check price
            if (product.price < 0) {
                defects.push('Negative price');
            }

            // Check rating
            if (product.rating && product.rating.rate > 5) {
                defects.push('Rating exceeds 5');
            }

            if (defects.length > 0) {
                defectiveProducts.push({
                    productId: product.id,
                    title: product.title,
                    defects: defects
                });
            }
        });

        // Log defective products
        if (defectiveProducts.length > 0) {
            console.log('\nDefective Products:');
            defectiveProducts.forEach(product => {
                console.log(`\nProduct ID: ${product.productId}`);
                console.log(`Title: ${product.title}`);
                console.log('Defects:');
                product.defects.forEach(defect => console.log(`- ${defect}`));
            });
        }

        // Assert that there are no defective products
        expect(defectiveProducts.length).toBe(0);
    });
}); 