Query All Frames
----------------

Query all of the frames that are visible on a page. 

Usage::
    
    var queryAllFrames = require('query-all-frames');

    queryAllFrames('div.foobar')

The result will be a jquery object that contains all elements that match
``div.foobar`` in any of the containing iframes or frames.

Developing
----------

Run::
    
    $ make develop

Testing
-------

Right now to test you need to run two things in parallel. The first is the test
server::
    
    $ cd tests/servers; node index.js

Next is karma::
    
    $ karma start

To update the tests for karma to run::
    
    $ component test-build

Will do the trick.
