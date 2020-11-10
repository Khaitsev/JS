const Items = {
    phone: 50000,
    mfd: 30000,
    printer: 20000,
    computer: 80000,
    monitor: 30000
}
var Basket = {
    items: [],
    totalPrice: 0,
    totalItemsQty: 0
}

while (true){
    let reply = prompt(`Введите товар и его кол-во через запятую, для выхода из магазина введите -1.\nСписко достпных товаров: ${Object.keys(Items)} ` );
    if (reply == -1){
        break
    }
    addToBasket(reply);
}
    
function addToBasket(reply){
    let newItem = reply.split(',')[0];
    let newItemQty = reply.split(',')[1];

    if(isNaN(newItemQty)){
        alert('Введите правильно значение количества товара');
    }
    else if(!Object.keys(Items).includes(newItem)){
        alert('Вы ввели неверный товар');
    }     
    else if (Object.keys(Items).includes(newItem)){
        Basket.items.push(newItem);
        Basket.totalItemsQty += Number(newItemQty);
        Basket.totalPrice += newItemQty * Items[newItem];
    }
    
}

console.log(` Товары в корзине: ${Basket.items}\n На общую сумму: ${Basket.totalPrice} \n Общее кол-во товаров: ${Basket.totalItemsQty}`);
