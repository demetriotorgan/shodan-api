const portsScorer = require('../scorers/portsScorer');

function portsAnalyzer(host){
    const ports = host.ports;
      const scoreData = portsScorer(ports);

    return{
        portsAnalysis:{
            total: ports.length,
            riskyPorts: scoreData.riskyPorts,
            score: scoreData.score,
            exposedServices: scoreData.exposedServices
        }
    };
}

module.exports = portsAnalyzer;