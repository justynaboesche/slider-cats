// let circleLength = (radius) => {
// console.log(2*radius*3.14);
// };

// for(let i = 1; i <= 20; i++) {
//     circleLength(i);
// }

let circleLength = (radius) => {
    for(let i = 1; i <= radius; i++) {
        console.log(2*i*3.14);
    }
}

circleLength(6);


let nOddNumbers = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(2*i - 1);
    }
};

nOddNumbers(6);