var encodeTable = require('../data/spec');
var decodeTable = null;

var alphaNumeric = 'a-zA-Zа-яёйА-ЯЁЙ0-9-@';
var nonAlphaNumeric = '[^' + alphaNumeric + ']';
var wordBorder = /\\b/;

/**
 *
 * @param {Object.<String, (String|Array)>} specContent
 * @returns {Object.<String, String>}
 */
function revertProperties(specContent) {
    var result = {};
    for (var property in specContent) {
        var value = [].concat(specContent[property]);
        for (var j = 0, c2 = value.length, field; j < c2; j++) {
            field = value[j];
            result[field] = property;
        }
    }

    return result;
}

function getDecodeTable() {
    if (decodeTable) {
        return decodeTable;
    }

    var result = [];
    for (var i = 0, c = encodeTable.length; i < c; i++) {
        var spec = encodeTable[i];

        result.push({
            before: spec.before,
            after: spec.after,
            content: revertProperties(spec.content)
        });
    }

    return decodeTable = result;
}

/**
 *
 * @param {Object.<String, (String|Array)>} specContent
 * @returns {Function}
 */
function createReplaceFunction(specContent) {
    return function (all, key) {
        var value = specContent[key];

        if (typeof value === 'undefined') {
            return all;
        }

        // array
        if (typeof value !== 'string') {
            value = value[0];
        }

        if (all !== key) {
            value = all.replace(key, value);
        }

        return value;
    };
}

/**
 *
 * @param {String} string
 * @param {Array.<Object>} replaceTable
 * @returns {String}
 */
function replaceUsing(string, replaceTable) {
    string = ' ' + string;

    for (var i = 0, c = replaceTable.length; i < c; i++) {
        var replacement = replaceTable[i];
        var before = replacement.before.replace(wordBorder, nonAlphaNumeric);
        var after = replacement.after.replace(wordBorder, nonAlphaNumeric);

        var regex = new RegExp(before + '([' + alphaNumeric + ']+)' + after, 'g');
        string = string.replace(regex, createReplaceFunction(replacement.content));
    }

    return string.replace(' ', '');
}

/**
 * CSS -> 1CSS
 *
 * @param {String} cssString
 * @returns {String}
 */
function encode(cssString) {
    return replaceUsing(cssString, encodeTable);
}

/**
 * 1CSS -> CSS
 *
 * @param {String} oneCssString
 * @returns {String}
 */
function decode(oneCssString) {
    return replaceUsing(oneCssString, getDecodeTable());
}

module.exports.encode = encode;
module.exports.decode = decode;
