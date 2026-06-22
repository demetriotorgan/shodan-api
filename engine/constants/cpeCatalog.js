module.exports = {

    // =========================
    // CRITICAL
    // DATABASES
    // =========================

    mysql: {
        name: 'MySQL',
        category: 'database',
        risk: 'critical'
    },

    postgresql: {
        name: 'PostgreSQL',
        category: 'database',
        risk: 'critical'
    },

    mongodb: {
        name: 'MongoDB',
        category: 'database',
        risk: 'critical'
    },

    redis: {
        name: 'Redis',
        category: 'database',
        risk: 'critical'
    },

    elasticsearch: {
        name: 'Elasticsearch',
        category: 'database',
        risk: 'critical'
    },

    oracle_database: {
        name: 'Oracle Database',
        category: 'database',
        risk: 'critical'
    },

    mssql: {
        name: 'Microsoft SQL Server',
        category: 'database',
        risk: 'critical'
    },

    // =========================
    // HIGH
    // REMOTE ACCESS
    // =========================

    openssh: {
        name: 'OpenSSH',
        category: 'remote-access',
        risk: 'high'
    },

    rdp: {
        name: 'Remote Desktop Protocol',
        category: 'remote-access',
        risk: 'high'
    },

    telnet: {
        name: 'Telnet',
        category: 'remote-access',
        risk: 'high'
    },

    vnc: {
        name: 'VNC',
        category: 'remote-access',
        risk: 'high'
    },

    webmin: {
        name: 'Webmin',
        category: 'remote-access',
        risk: 'high'
    },

    cpanel: {
        name: 'cPanel',
        category: 'remote-access',
        risk: 'high'
    },

    whm: {
        name: 'WHM',
        category: 'remote-access',
        risk: 'high'
    },

    // =========================
    // MEDIUM
    // WEB SERVERS
    // =========================

    http_server: {
        name: 'Apache HTTP Server',
        category: 'web-server',
        risk: 'medium'
    },

    nginx: {
        name: 'Nginx',
        category: 'web-server',
        risk: 'medium'
    },

    iis: {
        name: 'Microsoft IIS',
        category: 'web-server',
        risk: 'medium'
    },

    tomcat: {
        name: 'Apache Tomcat',
        category: 'web-server',
        risk: 'medium'
    },

    // =========================
    // MEDIUM
    // FILE TRANSFER
    // =========================

    'pure-ftpd': {
        name: 'Pure-FTPd',
        category: 'file-transfer',
        risk: 'medium'
    },

    proftpd: {
        name: 'ProFTPD',
        category: 'file-transfer',
        risk: 'medium'
    },

    // =========================
    // LOW
    // CDN / SECURITY
    // =========================

    cloudflare: {
        name: 'Cloudflare',
        category: 'cdn-security',
        risk: 'low'
    },

    letsencrypt: {
        name: "Let's Encrypt",
        category: 'certificate-authority',
        risk: 'low'
    },

    akamai: {
        name: 'Akamai',
        category: 'cdn-security',
        risk: 'low'
    },

    fastly: {
        name: 'Fastly',
        category: 'cdn-security',
        risk: 'low'
    }
};