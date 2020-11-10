const NumberNew = {
    "единицы": 0,
    "десятки": 0,
    "сотни": 0
}

function displayNumber (numb){
    numb = String(numb);
    
    if (numb.length > 3){
        console.log('Введите число от 0 до 999');
        console.log(`сотни: ${NumberNew['сотни'] = 0} \nдесятки: ${NumberNew['десятки'] = 0}\nединицы: ${NumberNew['единицы'] = 0}`);
    }

    switch (numb.length){
        case 3:         
            console.log(`сотни: ${NumberNew['сотни'] = numb[0]} \nдесятки: ${NumberNew['десятки'] = numb[1]}\nединицы: ${NumberNew['единицы'] = numb[2]}`);
            break;
        case 2:
            console.log(`десятки: ${NumberNew['десятки'] = numb[1]}\nединицы: ${NumberNew['единицы'] = numb[2]}`);
            break;
        case 1:
            console.log(`единицы: ${NumberNew['единицы'] = numb[2]}`);
            break;
    }
    
    
}


displayNumber(2553);