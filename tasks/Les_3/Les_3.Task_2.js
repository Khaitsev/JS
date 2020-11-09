var goods = [['ноутбук',50000],['принтер',9000],['смартфон',45000],['планшет',30000],['мфу',30000]];
var basket = [];

function countBasketPrice(item, qty){
    item = item.toLowerCase();
    for (var n = 0; n < goods.length; n++){
        if (goods[n][0] === item){
            basket.push([item, qty,total = qty*goods[n][1]]);
            return basket;
        }   
    }
}

while (true){
    var rep = prompt('Введите наименование и количесвто единиц через запятую. Для окончания введите: -1');
    if (rep == -1){
        var totalGoods = [];
        var totalQty = 0;
        var totalPrice = 0;
        for (var z = 0; z < basket.length; z++){
            totalGoods.push(basket[z][0]);
            totalQty = totalQty + Number(basket[z][1]);
            totalPrice = totalPrice + basket[z][2]
        }
        alert (`Спасибо! До новых встреч! Ваша корзина: \n общеее кол-во товаров: ${totalQty}; \n общая сумма: ${totalPrice} \n товары: ${totalGoods}`);
        break;
    }
    var tempItem = rep.split(",")[0];
    var tempQty = rep.split(",")[1];
    countBasketPrice(tempItem,tempQty);
    alert (`В корзину добавлены: ${tempItem}(-ы): ${tempQty}шт.`);

}


