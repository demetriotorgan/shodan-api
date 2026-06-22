function calculateScore(totalVulns) {

    if (totalVulns === 0) return 0;

    if (totalVulns <= 2) return 20;

    if (totalVulns <= 5) return 35;

    if (totalVulns <= 10) return 50;

    if (totalVulns <= 20) return 70;

    if (totalVulns <= 50) return 85;

    return 100;
}

module.exports = calculateScore;