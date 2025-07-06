var should = require('should');
var Versions = require('../lib/versions');

var extractChannel = Versions.extractChannel;

describe('Channel detection', function () {
    it('should treat build metadata separately', function () {
        extractChannel('1.0.0-beta+windows').should.be.exactly('beta');
        extractChannel('1.2.3-alpha.1+linux').should.be.exactly('alpha');
    });
});
