/*global describe, it, beforeEach, afterEach*/
/*jshint expr:true*/

var encode = require('..').encode,
    decode = require('..').decode,
    fs = require('fs'),
    path = require('path'),
    expect = require('chai').expect;

describe('1css', function() {
    var fixturesDir = path.join(__dirname, 'fixtures');

    it('should encode and decode', function() {
        fs.readdirSync(fixturesDir).forEach(function (cssFile) {
            var cssFileContent = fs.readFileSync(path.join(fixturesDir, cssFile), 'utf8');
            var result = decode(encode(cssFileContent));

            expect(result).to.eql(cssFileContent);
        });
    });
});
