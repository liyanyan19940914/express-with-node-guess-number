var express = require('express');
const request = require('request');

console.log('Welcome!\n');

const getAnswer = {
    baseUrl: 'http://localhost:3000',
    url: '/answer',
    method: 'GET',
    json: true
};

request(getAnswer, (err, res, body) => {
    const answer = body;
    console.log(answer);
    var chances = 6;
    console.log(`Please input your number(${chances}):`);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {
        if (! (validate(input.trim()))) {
            console.log('Cannot input duplicate numbers!');
            console.log(`Please input your number(${chances}):`);
        }
        else {
            const compare = {
                baseUrl: 'http://localhost:3000',
                url: '/compare',
                method: 'POST',
                json: true,
                body: {
                    input: input,
                    answer: answer
                }
            }
            request(compare, (err, res, body)=> {
                // if (body.length>4) {
                //     console.log('Cannot input duplicate numbers!');
                //     console.log(`Please input your number(${chances}):`);
                // }
                if (body === '4A0B') {
                    console.log('Congratulations!');
                    process.exit();
                } else {
                    console.log(body);
                    chances--;
                    if (chances === 0) {
                        console.log('Game Over\n');
                        console.log(`Answer:${answer}`);
                        process.exit();
                    } else {
                        console.log(`Please input your number(${chances}):`);
                    }
                }

            });
        }
    });
});


function validate(input) {
    if (input.length === 4) {
        return input.split('').every((digit, index, array) => {
            return array.lastIndexOf(digit) === index
                && typeof parseInt(input) === 'number';
        });
    } else {
        return false;
    }
}
