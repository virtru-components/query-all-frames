var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/pages'));

app.listen(5559);
