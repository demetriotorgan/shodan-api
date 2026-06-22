const countCriticalProducts = require("../../utils/countCriticalProducts");
const riskClassifier = require("../classifiers/riskClassifier");
const enrichProducts = require("../enrichers/enrichProducts");
const parseCpes = require("../parsers/cpeParser");
const calculateCpeScore = require("../scorers/cpeScore");

function cpesAnalyzer(host) {
    const cpes = host.cpes || [];
    const parsedProducts = parseCpes(cpes);

    const products =
        enrichProducts(parsedProducts);

    const criticalProducts =
        countCriticalProducts(products);
    const score = 
        Math.min(calculateCpeScore(products), 100);
    const classification =
        riskClassifier(score);


    return {
        cpesAnalysis: {
            total: cpes.length,
            score,
            classification,
            criticalProducts,
            products
        }
    }
}

module.exports = cpesAnalyzer;