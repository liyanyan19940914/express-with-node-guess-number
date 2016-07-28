
class CompareNumber {

    static compareNumber(answer, input) {
        console.log(answer)
        const answers = answer.toString().split('');
        const inputs = input.split('');
        let a = 0;
        let b = 0;
        inputs.map(input=> {
            const answer = answers.find(answer=>answer === input);
            if (answer) {
                answers.indexOf(answer) === inputs.indexOf(input) ? a++ : b++
            }
        })
        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;