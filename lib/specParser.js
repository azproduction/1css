var path = require('path'),
    fs = require('fs'),
    expandProperty = require('./propertyExpander'),
    _ = require('lodash'),
    lexer = require('marked').lexer;

var SPEC_DIR = path.join(__dirname, '../spec');

var reAllBadCharacters = /\(|\)|:|!|@/g;

var rules = [
    {
        // html tag selector
        // eg html.div
        before: '\\b',
        after: '\\b',
        content: [
            path.join(SPEC_DIR, '2-selector.md')
        ]
    },
    {
        // pseudo selector
        // :after
        before: ':',
        after: '\\b',
        content: [
            path.join(SPEC_DIR, '2.1-pseudo-selector.md')
        ]
    },
    {
        // property
        // font:
        before: '\\b',
        after: '\\s*:',
        content: [
            path.join(SPEC_DIR, '3-props.md')
        ]
    },
    {
        // value
        // red
        before: '(?:\\b)?',
        after: '\\b',
        content: [
            path.join(SPEC_DIR, '4-vals.md'),
            path.join(SPEC_DIR, '4.3-colors.md'),
            path.join(SPEC_DIR, '4.4-fonts.md')
        ]
    },
    {
        // function-vals
        // attr()
        before: '\\b',
        after: '\\(',
        content: [
            path.join(SPEC_DIR, '4.1-function-vals.md')
        ]
    },
    {
        // units
        // 1px
        before: '[0-9]?\\.?[0-9]+',
        after: '\\b',
        content: [
            path.join(SPEC_DIR, '4.2-units.md')
        ]
    }
];

/**
 *
 * @param {String} markdownText
 * @returns {Object.<String, (Array|String)>}
 */
function extractValuesFrom(markdownText) {
    var values = {};
    var jsonMl = lexer(markdownText);

    jsonMl.forEach(function (block) {
        if (block.type !== 'table') {
            return;
        }

        block.cells.forEach(function (cell) {
            var key = cell[1].replace(reAllBadCharacters, ''),
                value = cell[0].replace(reAllBadCharacters, '');

            if (value === '???') {
                return;
            }
            values[key] = expandProperty(value);
        });
    });

    return values;
}

/**
 * @return {Array.<object>}
 */
function parseSpec() {
    return rules.map(function (rule) {
        var content = rule.content.reduce(function (content, specFile) {
            var markdownText = fs.readFileSync(specFile, 'utf8');

            return _.extend(content, extractValuesFrom(markdownText));
        }, {});

        return {
            before: rule.before,
            after: rule.after,
            content: content
        };
    });
}

module.exports = parseSpec;
