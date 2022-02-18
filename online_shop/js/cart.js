var car = {};//Корзина

$.getJSON('goods.json', function (data) {
    var goods = data;
    // console.log(data);
    checkCart();
    // console.log(cart);
    showCart();//вывожу товары на страницу
    function showCart() {
        var out = '';
        for (var key in cart) {
            out += '<button class="delete">x</button>';
            out += '<img src="' + goods[key].image + '" width="48"> ';
            out += goods[key].name;
            out += '<button class="minus">-</button>';
            out += cart[key];
            out += '<button class="plus">+</button>';
            out += cart[key] * goods[key].cost;
            out += '<br>';
        }
        $('.my-cart').html(out);
    }

});

function checkCart() {
    //проверка наличии корзины в locaStorage
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}
