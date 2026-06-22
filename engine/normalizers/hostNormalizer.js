function hostNormalizer(host) {

    return {
        ip: host?.ip || null,
        vulns: host.data?.vulns || [],
        ports: host.data?.ports || [],
        cpes: host.data?.cpes || [],
        tags: host.data?.tags || []
    };
}

module.exports = hostNormalizer;