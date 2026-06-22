const { getHostData } = require('../services/shodanService');
const globalAnalyzer = require('../engine/aggregators/globalAnalyzer');
const hostAnalyzer = require('../engine/analyzers/hostAnalyzer.js')

async function searchHost(req, res) {

    try {
        const { target } = req.query;
        if (!target) {
            return res.status(400).json({
                error: 'Informe um domínio ou IP'
            });
        }

        /**
        * =========================================
        * RESPOSTA BRUTA SHODAN
        * =========================================
        */

        const data = await getHostData(target);

        /**
         * =========================================
         * ANALISA TODOS OS HOSTS
         * =========================================
         */

        const analyzedHosts =
            data.results.map(host => {

                return hostAnalyzer(host);

            });
        const globalAnalysis =
            globalAnalyzer(analyzedHosts);

        /**
     * =========================================
     * RESPOSTA FINAL
     * =========================================
     */

        res.json({
            target: data.target,
            totalHosts: analyzedHosts.length,
            globalAnalysis,
            hosts: analyzedHosts,
            data
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = {
    searchHost
};