var express=require('express');
const request = require('request');

console.log('Welcome!\n');

const getAnswer = {
    baseUrl: 'http://localhost:3000',
    url: '/answer',
    method: 'GET',
    json: true
};
let answer;

request(getAnswer, (err, res, body) => {
    const answer = body;
    console.log(answer);
    let chances=6;
    console.log(`Please input your number(${chances}):`);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {
        
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
        request(compare,(err,res,body)=>{
            if (body.length>4) {
                console.log('Cannot input duplicate numbers!');
                console.log(`Please input your number(${chances}):`);
            } else {
                if (body === '4A0B') {
                    console.log('Congratulations!');
                    process.exit();
                } else {
                    console.log(body);
                    chances--;
                    if (chances===0) {
                        console.log('Game Over\n');
                        console.log(`Answer:${answer}`);
                        process.exit();
                    } else {
                        console.log(`Please input your number(${chances}):`);
                    }
                }

            }
        });
    });
});


