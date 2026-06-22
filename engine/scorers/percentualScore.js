const CLASSIFICATION_WEIGHT =
    require('../constants/classificationWeight');

function percentualScore(globalAnalysis) {

    const classifications = [
        globalAnalysis.vulns.classification,
        globalAnalysis.ports.classification,
        globalAnalysis.cpes.classification,
        globalAnalysis.tags.classification
    ];

    const totalWeight =
        classifications.reduce((sum, classification) => {

            return sum +
                (CLASSIFICATION_WEIGHT[classification] || 0);

        }, 0);

    return Number(
        (totalWeight / classifications.length).toFixed(2)
    );
}

module.exports = percentualScore;