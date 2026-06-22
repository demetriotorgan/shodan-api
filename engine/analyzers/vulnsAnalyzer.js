// engine/analyzers/vulnsAnalyzer.js

const riskClassifier = require('../classifiers/riskClassifier');
const calculateScore = require('../scorers/vulnScorer');

function vulnsAnalyzer(host) {

    const vulns = host.vulns;

    const totalVulns = vulns.length;

    const score = calculateScore(totalVulns);

    const classification = riskClassifier(score);

    return {        
        vulnsAnalysis: {
            total: totalVulns,
            score,
            classification
        }
    };
}

module.exports = vulnsAnalyzer;