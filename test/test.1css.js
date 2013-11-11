/*global describe, it, beforeEach, afterEach*/
/*jshint expr:true*/

var encode = require('..').encode,
    decode = require('..').decode,
    fs = require('fs'),
    expect = require('chai').expect;

describe('1css', function() {
    var bootstrapCss = fs.readFileSync(__dirname + '/fixtures/bootstrap.css', 'utf8');

    it('should encode and decode', function() {
        var result = decode(encode(bootstrapCss));

        expect(result).to.eql(bootstrapCss);
    });
});
