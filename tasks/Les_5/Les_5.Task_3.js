const cartBlock = {
    check(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.prod_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.qty}</div>
                    <div><b>Стоимость</b>: ${good.qty * good.price}</div>
                </div>`;
    }
}

const Cart = {
	cartBlock,
	cartList: null,
	butt: null,
	goods: [
		{
			id: 1,
			prod_name: 'TV',
			price: 50000,
			qty: 2,
		},
		{
			id: 2,
			prod_name: 'Phone',
			price: 30000,
			qty: 1,
		},
		{
			id: 3,
			prod_name: 'Scan',
			price: 10000,
			qty: 5,
		},
		{
			id: 4,
			prod_name: 'Computer',
			price: 90000,
			qty: 3,
		},

	],
	init(){
		this.cartList = document.querySelector('.c-list');
		this.butt = document.querySelector('.c-btn');
		this.butt.addEventListener('click', this.clearCart.bind(this));
		this.check();

	},


	
	check(){
		if (this.goods.length > 0){
			this.goods.forEach(g => {
				this.cartList.insertAdjacentHTML('beforeend', this.cartBlock.check(g));
			});
			this.cartList.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getTotalPrice()}`);

		}
		else{
			this.cartList.textContent = 'Корзина пуста';
		}

	},

	clearCart(){
		this.goods = [];
        this.check();

	},

	getTotalPrice() {
        return this.goods.reduce(function (pr, a) {
            return pr + a.price * a.qty;
        }, 0);
    },


};

Cart.init()