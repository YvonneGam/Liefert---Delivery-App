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
    'name': 'Homemade IceTea 0,5 Liter',
    'info': 'mit Pfirsich, Mango, Minze',
    'price': 5.00,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Paulaner Spezi 0,5 Liter',
    'info': '',
    'price': 3.00,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Tegernseer Helles 0,5 Liter',
    'info': '',
    'price': 3.50,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Huubert Weinschorle 0,33 Liter',
    'info': '',
    'price': 3.50,
    'amount': 1,
    'type': 'beverages'
}, {
    'name': 'Wasser 0,5 Liter',
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
                <div onclick="addToBasket('${id}', ${i}), calcSumPrice(${i})" class="plus">+</div>
            </div>`;
    }
}



//Mit Klick auf das + wird das jeweilige Produkt dem Warenkorb hinzugefügt 
//und gecheckt ob das Gericht schon im Warenkorb ist

 function addToBasket(type, index) {
    let itemInCart = cart.find(function (e) {
        return e.name == cart.name; } );
        if (itemInCart)  {
            alert('Das Gericht ist bereits im Warenkorb, du kannst die Anzahl direkt im Warenkorb erhöhen')
        }

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
    <button onclick="lessAmount('${cartItem['type']}', ${index})" class="plusminus"> - </button>
    <button onclick="increaseAmount('${cartItem['type']}', ${index})" class="plusminus"> + </button>
    </div>
    <div id="prices" class="basket-price"> ${calcPrice(cartItem)} € </div>
    <div onclick="deleteDish(${index})" class="dustbin"> <img src="img/dustbin_80977.png"> </div>
    </div>`;
    }
}

 function lessAmount(type, i) {
    if (type == 'burger') {
        burger[i]['amount']--;
    }
    if (type == 'sandwich') {
        sandwiches[i]['amount']--;
    }
    if (type == 'fries') {
        fries[i]['amount']--;
    }
    if (type == 'beverages') {
        beverages[i]['amount']--;
    }
    updateBasket();
} 


function increaseAmount(type, i) {
    if (type == 'burger') {
        burger[i]['amount']++;
    }
    if (type == 'sandwich') {
        sandwiches[i]['amount']++;
    }
    if (type == 'fries') {
        fries[i]['amount']++;
    }
    if (type == 'beverages') {
        beverages[i]['amount']++;
    }
    updateBasket();
}


//Preis berechnen je nach Menge
function calcPrice(cartItem) {
    return Math.round(cartItem['amount'] *
        cartItem['price'] * 100 / 100);
}

//Preis berechnen Zwischensumme & Gesamt
function calcSumPrice() {
    let sum = 0;
    let total = 0;
    for (i = 0; i < cart.length; i++) {
        sum += +cart[i]['price'];
    }  document.getElementById('sum').innerHTML = `${sum.toFixed(2).replace(".", ",")} €`;
    
    for (let i = 0; i < cart.length; i++) {
        total = sum + 3.00;
    } document.getElementById('total').innerHTML = `${total.toFixed(2).replace(".", ",")} €`;

    updateBasket();
}


function alertOrder() {
    alert('Lass es dir schmecken!');
}