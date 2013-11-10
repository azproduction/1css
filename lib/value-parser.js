var reBlock = /\{([^}]*)\}/;

/**
 * Expands string into array
 * @param {String} string
 * @returns {Array}
 *
 * @example
 *     a{,b,c,d}x -> [ax, abx, acx, adx]
 */
function valueParser(string) {
    var values = string.match(reBlock);
    if (values === null) {
        return string;
    }

    var parts = string.split(values[0]);
    return values[1].split(',').map(function (value) {
        return parts[0] + value + parts[1];
    });
}

module.exports = valueParser;
