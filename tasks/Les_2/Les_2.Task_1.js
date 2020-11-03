console.log('### 3');
a = -5;
b = -10;
if (a >= 0 && b >= 0){
    console.log(a-b);
}
else if (a <= 0 && b <= 0){
    console.log(a*b)
}
else if(a < 0 || b < 0){
    console.log(a+b)
}





console.log('### 4');

a = Math.floor(Math.random()*15);
console.log(`а = ${a}`);

function fuc(a){
    switch(a){
        case 15:
            return a;
    }
   return a+' '+fuc(a+1)
}
console.log(fuc(a))





console.log('### 5');

function summ(k,z){
    return k+z
}
function diff(k,z){
    return k-z
}
function divv(k,z){
    return k/z
}
function mult(k,z){
    return k*z
}
console.log(summ(10,10));
console.log(diff(100,10));
console.log(divv(100,10));
console.log(mult(10,10));








console.log('### 6');

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return summ(arg1,arg2);
        case '-':
            return diff(arg1,arg2);
        case '/':
            return divv(arg1,arg2);
        case '*':
            return mult(arg1,arg2);
    }
}
console.log(mathOperation(20,50,'*'));








console.log('### 8');
z = 0
function power(val, pow){
    if (pow === 1){
        return z;
    }
    else if (pow > 1 && z === 0){
        z = val*val;
    }
    else if (pow > 1 && z > 0){
        z = z*val;
    }

    return power(val,pow-1);
}

console.log(power(10,3));