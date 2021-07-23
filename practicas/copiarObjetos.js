let a = 1
let b = a

console.log(a, b);

b += 1

console.log(a, b);

// /////////

let car = {
    color: 'red',
    year: 2003,
    km: 0
}

let newCar = Object.assign({}, car)

console.log(newCar);

newCar.year = 2013;

console.log(newCar);
console.log(car);