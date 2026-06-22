const PORT_RISKS = require('../constants/portRisk');

function portsScorer(ports) {

    let riskPoints = 0;

    const exposedServices = [];

    ports.forEach(port => {

        const risk = PORT_RISKS[port];

        if (risk) {

            riskPoints += risk;

            exposedServices.push(port);
        }
    });

    let score = Math.min(riskPoints, 100);

    return {
        score,
        riskyPorts: exposedServices.length,
        exposedServices
    };
}

module.exports = portsScorer;