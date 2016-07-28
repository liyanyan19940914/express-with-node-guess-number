class AnswerGenerator {
    static generate(inputs) {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = [];

        for (let i = 0; i < 4; i++) {
            const randomNumber = parseInt(Math.random() * digits.length);
            result.push((digits.splice(randomNumber, 1))[0]);
        }
        return result.join('');

    }
}
module.exports = AnswerGenerator;