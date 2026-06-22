/**
 * =========================================================
 * RISK CLASSIFIER
 * =========================================================
 *
 * Responsável por transformar score em classificação
 *
 * =========================================================
 */

function riskClassifier(score) {

    if (score >= 75) {
        return 'CRÍTICO';
    }

    if (score >= 50) {
        return 'ALTO RISCO';
    }

    if (score >= 25) {
        return 'MÉDIO RISCO';
    }

    if (score > 0) {
        return 'BAIXO RISCO';
    }

    return 'SEM VULNERABILIDADES DETECTADAS';
}

module.exports = riskClassifier;