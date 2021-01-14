let burger = [{
    'name': 'Cheeseburger',
    'info': 'mit Tomaten, Zwiebeln, sauren Gurken, Salat und Käse',
    'price': 7.50,
    'amount': 1,
    'type': 'burger'
}, {
    'name': 'BBQ-Bacon Burger',
    'info': 'mit Cheddar, Barbecuesauce, Bacon, Tomaten, Gurken, Zwiebeln und Salat',
    'price': 8.50,
    'amount': 1,
    'type': 'burger'

}, {
    'name': 'Blue Bacon Burger',
    'info': 'mit Salat, Tomaten, Mayonnaise, Bacon, Gurken, Zwiebeln und Blue-Cheesesauce',
    'price': 8.90,
    'amount': 1,
    'type': 'burger'
}
];

let sandwiches = [{
    'name': 'Hot Chili Sandwich',
    'info': 'mit Zwiebeln, Salat, Jalapenos und Tabasco',
    'price': 6.50,
    'amount': 1,
    'type': 'sandwich'
}, {
    'name': 'Parma Sandwich',
    'info': 'mit Parmaschinken, Rucola, Tomaten und Parmesan',
    'price': 6.50,
    'amount': 1,
    'type': 'sandwich'
}, {
    'name': 'Green Monster Sandwich',
    'info': 'mit 180g Beef, Weißkraut, Zwiebeln, Gurken, Cheddar Cheese, Röstzwiebeln, Bacon und Avocado-Balsamico-Cream',
    'price': 6.50,
    'amount': 1,
    'type': 'sandwich'
}
];

let fries = [{
    'name': 'Mexican Fries',
    'info': 'mit Avocado, Ziegenfrischkäsesoße und Tomatensalsa',
    'price': 5.50,
    'amount': 1,
    'type': 'fries'
}, {
    'name': 'Chili Cheese Fries',
    'info': 'mit Jalapenos, Cheddar-Käsesauce und Chilli sin Carne',
    'price': 6.50,
    'amount': 1,
    'type': 'fries'
}, {

    'name': 'Belgische Fritten',
    'info': 'mit Curryketchup und Mayo',
    'price': 3.00,
    'amount': 1,
    'type': 'fries'
}, {
    'name': 'Süßkartoffel Fritten',
    'info': 'mit Sour-Creme',
    'price': 3.50,
    'amount': 1,
    'type': 'fries'
}
];

let beverages = [{
    'name': 'Homemade IceTea <br> 0,5 Liter',
    'info': 'mit Pfirsich, Mango, Minze',
    'price': 5.00,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Paulaner Spezi <br> 0,5 Liter',
    'info': '',
    'price': 3.00,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Tegernseer Helles <br> 0,5 Liter',
    'info': '',
    'price': 3.50,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Huubert Weinschorle <br> 0,33 Liter',
    'info': '',
    'price': 3.50,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Wasser <br> 0,5 Liter',
    'info': '',
    'price': 2.50,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Sprite 0,5 Liter',
    'info': '',
    'price': 3.00,
    'amount': 1,
    'type': 'beverages'
}];

//Array für Warenkorb
let cart = [];



function allDishes() { //Menü wird beim Öffnen der Seite geladen
    loadItem(burger, 'burger');
    loadItem(sandwiches, 'sandwich');
    loadItem(fries, 'fries');
    loadItem(beverages, 'beverages');
}

//Load Menu
function loadItem(items, id) {
    for (let i = 0; i < items.length; i++) {
        document.getElementById(id).innerHTML +=
            `<div class="dish"> 
                <div class="dish-input">
                    <div class="product-name">  ${items[i]['name']} </div>
                    <div class="product-info"> ${items[i]['info']} </div> <br>
                    <div class="product-price"> ${items[i]['price'].toFixed(2).replace(".", ",")} € </div>
                </div>
                <a onclick="checkBasket('${id}', ${i}), calcSumPrice(${i})" href="#basket" class="plus">+</a>
            </div>`;
    }
}

//Hier wird geprüft ob das Produkt bereits im Warenkorb ist
function checkBasket(type, index) {
    let item;
    if (type == 'burger') {
        item = burger[index]; // Z.b. Cheesebuger wenn type=burger && index = 0
    }
    if (type == 'sandwich') {
        item = sandwiches[index];
    }
    if (type == 'fries') {
        item = fries[index];
    }
    if (type == 'beverages') {
        item = beverages[index];
    }
    let itemInCart = cart.find(e => e.name == item.name);
    if (itemInCart) {
        alert('Das Gericht ist bereits im Warenkorb, du kannst die Anzahl direkt im Warenkorb erhöhen.');
    } else {
        addToBasket(type, index);
    }

}

//Mit Klick auf das + wird das jeweilige Produkt dem Warenkorb hinzugefügt 
function addToBasket(type, index) {
    if (type == 'burger') {
        cart.push(burger[index]);
    }
    if (type == 'sandwich') {
        cart.push(sandwiches[index]);
    }
    if (type == 'fries') {
        cart.push(fries[index]);
    }
    if (type == 'beverages') {
        cart.push(beverages[index]);
    }
    updateBasket();
}

//Ein Produkt wird aus dem Warenkorb gelöscht wenn man auf die Mülltonne klickt
function deleteDish(index) {
    cart.splice([index], 1);
    updateBasket();
}


function updateBasket() {
    document.getElementById('delivery').innerHTML = '';

    for (let index = 0; index < cart.length; index++) {
        let cartItem = cart[index];
        document.getElementById('delivery').innerHTML += `
    <div class="delivery-items">
    <div min="0" class="basket-amount"> ${cartItem['amount']}x </div>
    <div class="basket-names"> ${cartItem['name']} </div>
    <div class="plusminus-container">
    <button onclick="lessAmount('${cartItem['type']}', ${index})" class="plusminus" data-min="0"> - </button>
    <button onclick="increaseAmount('${cartItem['type']}', ${index})" class="plusminus"> + </button>
    </div>
    <div id="prices" class="basket-price"> ${calcPrice(cartItem)} € </div>
    <div onclick="deleteDish(${index})" class="dustbin"> <img src="img/dustbin_80977.png"> </div>
    </div>`;
    }
}

function lessAmount(type, i) {
    if(cart[i]['amount'] > 1) {
    cart[i]['amount']--;
    updateBasket();
    calcSumPrice();
} else {
    deleteDish(i)
}
}


function increaseAmount(type, i) {
    cart[i]['amount']++;
    updateBasket();
    calcSumPrice();
}


//Preis berechnen je nach Menge
function calcPrice(cartItem) {
    return Math.abs(cartItem['amount'] *
        cartItem['price'] * 100 / 100).toFixed(2).replace(".", ",");
}


//Preis berechnen Zwischensumme & Gesamt
function calcSumPrice() {
    let sum = 0;
    let total = 0;
    for (i = 0; i < cart.length; i++) {
        sum += cart[i]['price'] * cart[i]['amount'];
    } document.getElementById('sum').innerHTML = `${sum.toFixed(2).replace(".", ",")} €`;

    for (let i = 0; i < cart.length; i++) {
        total = sum + 3.00;
    } document.getElementById('total').innerHTML = `${total.toFixed(2).replace(".", ",")} €`;

    updateBasket();
}

//Bei Klicken auf den Bestell-Button kommt dieses Alert
function alertOrder() {
    alert('Lass es dir schmecken!');
}