const calculateTagsScore = require("../scorers/tagsScorer");
const MITIGATION_TAGS = require('../constants/mitigation_tags');
const riskClassifier = require("../classifiers/riskClassifier");

function tagsAnalyzer(host) {
    const tags = host.tags || [];
    const riskTags = [];
    const mitigationTags = [];

    tags.forEach(tag => {

        if (MITIGATION_TAGS.includes(tag)) {
            mitigationTags.push(tag);
        } else {
            riskTags.push(tag);
        }

    });

    const score = calculateTagsScore(riskTags);
    const classification = riskClassifier(score);

    return {
        tagsAnalysis: {
            score,
            classification,
            total: tags.length,
            riskTags,
            mitigationTags,
            riskCount: riskTags.length,
            mitigationCount: mitigationTags.length
        }
    };
}

module.exports = tagsAnalyzer;