const riskClassifier = require('../classifiers/riskClassifier');

function hostScoreAnalyzer(hostAnalysis) {

    const vulnsScore =
        hostAnalysis.vulnsAnalysis?.score || 0;

    const portsScore =
        hostAnalysis.portsAnalysis?.score || 0;

    const cpesScore =
        hostAnalysis.cpesAnalysis?.score || 0;

    const tagsScore =
        hostAnalysis.tagsAnalysis?.score || 0;

    /**
     * ==========================================
     * PESOS
     * ==========================================
     */

    const baseScore =
        Math.round(
            (vulnsScore * 0.6) +
            (portsScore * 0.2) +
            (cpesScore * 0.2)
        );

    //Penalizando se existem produtos críticos:
    const criticalProducts =
        hostAnalysis.cpesAnalysis?.criticalProducts || 0;

    let riskPenalty = 0;

    if (criticalProducts > 0) {
        riskPenalty += 10;
    }

    if (vulnsScore >= 70) {
        riskPenalty += 10;
    }

    if (portsScore >= 70) {
        riskPenalty += 5;
    }

    if (tagsScore >= 75) {
        riskPenalty += 10;
    }
    else if (tagsScore >= 50) {
        riskPenalty += 5;
    }
    else if (tagsScore >= 25) {
        riskPenalty += 3;
    }

    const score = Math.min(baseScore + riskPenalty, 100);
    return {
        hostScore: {
            score,
            classification: riskClassifier(score)
        }
    };
}

module.exports = hostScoreAnalyzer;