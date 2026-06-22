const {
    CRITICAL_WEIGHT,
    HIGH_WEIGHT,
    MEDIUM_WEIGHT,
    LOW_WEIGHT
} = require('../constants/cpeWeight');

const RISK_WEIGHTS = {
    critical: CRITICAL_WEIGHT,
    high: HIGH_WEIGHT,
    medium: MEDIUM_WEIGHT,
    low: LOW_WEIGHT
};

function calculateCpeScore(products = []) {
    return products.reduce((score, product) => {
        return score + (RISK_WEIGHTS[product.risk] || 0);
    }, 0);
}

module.exports = calculateCpeScore;