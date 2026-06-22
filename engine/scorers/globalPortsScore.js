const riskClassifier = require("../classifiers/riskClassifier");

function globalPortsScore(hosts) {
    if (!hosts.length) {
        return {
            score: 0,
            classification: riskClassifier(0)
        };
    }

    const totalScore =
        hosts.reduce((sum, host) => {
            return sum + host.portsAnalysis.score;
        }, 0);

    const totalPortsScore = Math.round(totalScore / hosts.length);
    const classification = riskClassifier(totalPortsScore);

    return {
        score: totalPortsScore,
        classification
    }
}

module.exports = globalPortsScore;