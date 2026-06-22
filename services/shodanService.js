const axios = require('axios');
const dns = require('dns').promises;
const net = require('net');

async function getHostData(target) {

    console.log('Entrada recebida:', target);

    let ips = [];

    // Se for IP
    if (net.isIP(target)) {
        ips.push(target);

    } else {
        try {
            console.log('Resolvendo domínio...');
            ips = await dns.resolve4(target);
            console.log('IPs encontrados:', ips);
        } catch (error) {
            if (error.code === 'ENOTFOUND') {
                throw new Error('Domínio inválido ou não encontrado');
            }
            throw new Error('Erro na resolução DNS');
        }
    }

    // Testa todos os IPs
    const results = [];

    for (const ip of ips) {
        try {
            const url = `https://internetdb.shodan.io/${ip}`;
            console.log('Consultando:', url);
            const response = await axios.get(url);
            results.push({
                ip,
                data: response.data
            });

        } catch (error) {

            // IP não indexado
            if (error.response?.status === 404) {

                console.log(`Sem dados para IP: ${ip}`);
                continue;

            }

            // Outros erros reais
            throw new Error(`Erro ao consultar InternetDB para IP ${ip}`);

        }
    }

    // Nenhum IP retornou dados
    if (results.length === 0) {

        throw new Error('Nenhum IP possui dados no InternetDB');
    }

    return {
        target,
        results
    };
}

module.exports = {
    getHostData
};