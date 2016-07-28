var express = require('express');
const CompareNumber = require('./compare-number');
const AnswerGenerate = require('./answer-generate');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/answer',function (req,res) {
    const answer=AnswerGenerate.generate();
    res.send(answer);
})
app.post('/compare', function (req, res) {

    const result = CompareNumber.compareNumber(req.body.answer,req.body.input);
    res.send(result);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
