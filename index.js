var $ = require('jquery-pack');

/**
 * Queries all available frames and returns all of the items that match the
 * selector
 *
 * @param {String} selector The selector
 * @param {JQueryElement} [doc] The current document [default=document]
 */
function queryAllFrames(selector, doc) {
  doc = doc || $(document);
  var frames = doc.find('iframe, frame');

  var results = doc.find(selector);
  
  for(var i = 0; i < frames.length; i++) {
    try {
      var currentFrame = frames[i];
      var frameWin = frames[i].contentWindow;
      // Ignore the frame if we do not have access
      if(frameWin.document === undefined) {
        continue;
      }
    } catch(e) {
      continue;
    }
    currentFrame = $(currentFrame);
    var frameDoc = currentFrame.contents();
    // Add the results from the recursive queryAllFrames calls
    var otherResults = queryAllFrames(selector, frameDoc);
    results = results.add(otherResults);
  }
  return results;
}

module.exports = queryAllFrames;
