/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = ["1"];

    for(let i=2; i < n + 1; i++) {
        let value = i + "";
        const isByThree = i%3 === 0;
        const isByFive = i%5 === 0;

        if(isByThree && isByFive){
            value = "FizzBuzz"
        } else if (isByFive) {
            value = "Buzz"
        } else if (isByThree) {
            value = "Fizz"
        }

        answer.push(value);
    }

    return answer;
};