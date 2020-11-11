let numbers = [2];

for (let i = 3; i <= 100; i=i+2){
    numbers.push(i);
}


for (let z = 0; z <= numbers.length; z++){
    for (let n = 0; n <= numbers.length; n++){
        if (n === z){
            continue
        }
        else if (numbers[n] % numbers[z]===0){ 
            numbers.splice(n, 1)
        }
    }
}

console.log(numbers);




let i = 0;

while (i < 100){
    if (PrimeNumber(i)){
        console.log(i);
    }
    i++;

}

function PrimeNumber(number){
    if (number < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}
    