var $ = require('jquery-pack'),
    assert = require('chai').assert,
    queryAllFrames = require('../index.js');


describe('queryAllFrames', function() {
  var docBody = null;
  beforeEach(function() {
    docBody = $(document.body);
    docBody.empty();
  });

  function addIframePage(src, callback) {
    var iframe = $('<iframe id="myIframe"></iframe>');
    docBody.append(iframe);
    $('#myIframe').load(function() {
      callback();
    });
    $('#myIframe').attr('src', src);
  }

  it('should work on a simple DOM', function(done) {
    addIframePage('/test-pages/simple.html', function() {
      var result = queryAllFrames('div.findme')
      assert.equal(result.length, 1);
      assert.equal(result.text(), 'Hello');
      done();
    });
  });

  it('tries to grab from a simple dom on a different origin', function(done) {
    addIframePage('http://127.0.0.1:5559/simple.html', function() {
      var result = queryAllFrames('div.findme')
      assert.equal(result.length, 0);
      done();
    });
  });

  it('should work on a nested DOM', function(done) {
    addIframePage('/test-pages/nested.html', function() {
      var result = queryAllFrames('div.findme')
      assert.equal(result.length, 1);
      assert.equal(result.text(), 'Hello');
      done();
    });
  });

  it('should work on a nested DOM with many matches', function(done) {
    addIframePage('/test-pages/nested-with-many-matches.html', function() {
      var result = queryAllFrames('div.findme')
      assert.equal(result.length, 3);
      done();
    });
  });
});
