const TAG_WEIGHTS = require('../constants/tag_weights');


function calculateTagsScore(tags = []) {

    const score = tags.reduce((total, tag) => {
        return total + (TAG_WEIGHTS[tag] || 0);
    }, 0);

    return Math.min(score, 100);
}

module.exports = calculateTagsScore;