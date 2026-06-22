const globalVulnsScore = require('../scorers/globalVulnsScore');
const globalPortsScore = require('../scorers/globalPortsScore');
const globalCpesScore = require('../scorers/globalCpesScore');
const globalTagsSocre = require('../scorers/globalTagsScore');


function globalAnalyzer(hosts) {

    //-----Vulnerabilidades-----
    const vulnsScore =
        globalVulnsScore(hosts);
    const totalVulns =
        hosts.reduce((sum, host) => {

            return sum + host.vulnsAnalysis.total;

        }, 0);

    const criticalHosts =
        hosts.filter(host => {

            return host.vulnsAnalysis.score >= 75;

        }).length;

    //-----Portas-----
    const portsScore =
        globalPortsScore(hosts);
    const totalRiskPorts =
        hosts.reduce((sum, host) => {

            return sum + host.portsAnalysis.riskyPorts;

        }, 0);

    const totalHostsWithRiskPorts =
        hosts.filter(host =>
            host.portsAnalysis.riskyPorts > 0
        ).length;

    //-----CPEs--------
    const cpesScore = 
        globalCpesScore(hosts);
    const totalCriticalProducts =
        hosts.reduce((sum, host)=>{
            return sum + host.cpesAnalysis.criticalProducts
        },0);
    
        //------Tags-------
    const tagsScore =
        globalTagsSocre(hosts);
    const totalTagsRisks =
        hosts.reduce((sum, host)=>{
            return sum + host.tagsAnalysis.riskCount
        },0);

    return {

        vulns: {
            ...vulnsScore,
            total: totalVulns,
            criticalHosts
        },

        ports: {
            ...portsScore,
            totalRiskPorts,
            hostsWithRiskPorts: totalHostsWithRiskPorts
        },
        cpes:{
            ...cpesScore,
            totalCriticalProducts
        },
        tags:{
            ...tagsScore,
            totalTagsRisks
        }
    };
}


module.exports = globalAnalyzer;