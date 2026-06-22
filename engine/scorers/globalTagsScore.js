const riskClassifier = require("../classifiers/riskClassifier");

function globalTagsSocre(hosts) {
    if (!hosts.length) {
        return {
            score: 0,
            classification: riskClassifier(0)
        }
    };
    const totalScore =
        hosts.reduce((sum, host) => {
            return sum + host.tagsAnalysis.score;
        }, 0);
    
    const totalTagsScore = Math.round(totalScore/hosts.length);
    const classification = riskClassifier(totalTagsScore);

    return{
        score: totalTagsScore,
        classification
    }
}

module.exports = globalTagsSocre;