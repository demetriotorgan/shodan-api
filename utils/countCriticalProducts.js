function countCriticalProducts(products) {

    return products.filter(
        product => product.risk === 'critical'
    ).length;
}

module.exports = countCriticalProducts;