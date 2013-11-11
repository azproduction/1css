var path = require('path'),
    fs = require('fs'),
    spec = require('../lib/specParser');

var SPEC_FILE = path.join(__dirname, '../data/spec.json');

var json = JSON.stringify(spec(), null, 4);

fs.writeFileSync(SPEC_FILE, json);
