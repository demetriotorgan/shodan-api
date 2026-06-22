module.exports = {

    // Criticidade
    "ics": 100,
    "industrial-control-system": 100,
    "scada": 100,
    "plc": 100,

    // Anonimização
    "tor": 80,
    "proxy": 70,

    // Acesso remoto
    "vpn": 40,
    "openvpn": 40,
    "wireguard": 35,

    // Certificados
    "self-signed": 60,
    "expired-cert": 70,
    
    //Informativas
    "database": 1,
    "cloud": 1,
    "aws": 1,
    "azure": 1,

    // Mitigadores
    "cdn": -5,
    "cloudflare": -10,
    "starttls":-5
};