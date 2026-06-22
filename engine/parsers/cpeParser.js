const TYPES = {
    a: 'application',
    o: 'operating-system',
    h: 'hardware'
};

function parseCpes(cpes = []) {
    return cpes.map(parseCpe);
}

function parseCpe(cpe) {

 const parts = cpe.split(':');
    const rawType = parts[1]?.replace('/', '');

    return {
        type: TYPES[rawType] || rawType,
        vendor: parts[2] || null,
        product: parts[3] || null,
        version: parts[4] || null
    };

}

module.exports = parseCpes;