const riskClassifier = require("../classifiers/riskClassifier");

function globalVulnsScore(hosts) {
    if (!hosts.length) {
        return {
            score: 0,
            classification: riskClassifier(0)
        };
    }

    const totalScore =
        hosts.reduce((sum, host) => {
            return sum + host.vulnsAnalysis.score;
        }, 0);

    const totalVulnsScore = Math.round(totalScore / hosts.length);
    const classification = riskClassifier(totalVulnsScore);

    return {
        score: totalVulnsScore,
        classification
    }

}

module.exports = globalVulnsScore;