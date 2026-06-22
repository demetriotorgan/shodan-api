const hostNormalizer = require('../normalizers/hostNormalizer');
const cpesAnalyzer = require('./cpesAnalyzer');
const hostScoreAnalyzer = require('./hostScoreAnalyzer');
const portsAnalyzer = require('./portsAnalyzer');
const tagsAnalyzer = require('./tagsAnalyzer');
const vulnsAnalyzer = require('./vulnsAnalyzer');

function hostAnalyzer(host){
    const normalizedHost = hostNormalizer(host);

     const analysis = {

        ip: normalizedHost.ip,

        ...vulnsAnalyzer(normalizedHost),
        ...portsAnalyzer(normalizedHost),
        ...cpesAnalyzer(normalizedHost),
        ...tagsAnalyzer(normalizedHost)
    };

    return{
         ...analysis,
        ...hostScoreAnalyzer(analysis)
    }
}

module.exports = hostAnalyzer;