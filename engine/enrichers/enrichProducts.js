const catalog = require('../constants/cpeCatalog');

function enrichProducts(products = []) {

    return products.map(product => {

        const catalogInfo =
            catalog[product.product];

        if (!catalogInfo) {
            return {
                ...product,
                risk: 'unknown'
            };
        }

        return {
            ...product,
            product: catalogInfo.name,
            risk: catalogInfo.risk
        };
    });
}

module.exports = enrichProducts;