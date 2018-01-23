'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nodemon = require('nodemon');

var _nodemon2 = _interopRequireDefault(_nodemon);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3000;

var app = (0, _express2.default)();

app.listen(PORT, function () {
    return console.log('Server is running at ' + PORT);
});

app.get('/', function (req, res) {

    res.sendFile('home.html', { "root": __dirname });
});
//console.log(`Server running at 3000`);