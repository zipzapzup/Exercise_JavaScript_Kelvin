// 1 1 2 3 5 8 13 21
const args = process.argv.slice(2)
// process manipulates arguments
// slice cuts the arguments

function Fibo(numbers){
    switch( numbers){
        case 0:
            return "None Provided";
        case 1:
            return [1];
        case 2:
            return [1, 1];
        default:
            let x = 1;
            let y = 1;
            let sequence = [x, y];

            Array(numbers - 2).fill().forEach(() => {
                let sum = x + y;
                sequence.push(sum);
                x = y;
                y = sum;
            });
            return sequence;
    }
};

console.log(Fibo(args));