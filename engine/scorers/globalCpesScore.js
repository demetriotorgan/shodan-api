const riskClassifier = require("../classifiers/riskClassifier")

function globalCpesScore(hosts) {
    if (!hosts.length) {
        return {
            score: 0,
            classification: riskClassifier(0)
        }
    };

    const totalScore =
        hosts.reduce((sum, host)=>{
            return sum + host.cpesAnalysis.score;
        },0);

    const totalCpesScore = Math.round(totalScore / hosts.length);
    const classification = riskClassifier(totalCpesScore);

    return{
        score: totalCpesScore,
        classification
    }
}

module.exports = globalCpesScore;