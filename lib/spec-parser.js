var path = require('path'),
    fs = require('fs'),
    valueParser = require('./value-parser'),
    lexer = require('marked').lexer;

var SPEC_DIR = path.join(__dirname, '../spec');

var reAllBadCharacters = /\(|\)/g;

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
        before: ':\\s*',
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
        before: ':\\s*',
        after: '\\b',
        content: [
            path.join(SPEC_DIR, '4-vals.md'),
            path.join(SPEC_DIR, '4.3-colors.md')
        ]
    },
    {
        // function-vals
        // attr()
        before: ':\\s*',
        after: '(',
        content: [
            path.join(SPEC_DIR, '4.1-function-vals.md')
        ]
    },
    {
        // units
        // 1px
        before: '\\d+',
        after: '\\b',
        content: [
            path.join(SPEC_DIR, '4.2-units.md')
        ]
    }
];

function extractValuesFrom(markdownText) {
    var values = [];
    var jsonMl = lexer(markdownText);

    jsonMl.forEach(function (block) {
        if (block.type !== 'table') {
            return;
        }

        block.cells.forEach(function (cell) {
            var value = cell[0].replace(reAllBadCharacters, '');
            values = values.concat(valueParser(value));
        });
    });

    return values;
}

// TODO finish spec parser
function parse() {
    return rules.map(function (rule) {
        var content = [];
        rule.content.forEach(function (specFile) {
            var markdownText = fs.readFileSync(specFile, 'utf8');

            content = content.concat(extractValuesFrom(markdownText));
        });

        return {
            before: rule.before,
            after: rule.after,
            content: content
        };
    });
}

console.log(parse());
