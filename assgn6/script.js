var cart=[];
var Item = function(name, bunprice, count, glazing, glazingprice) {
    this.name = name
    this.bunprice = bunprice
    this.count = count
    this.glazing = glazing
    this.glazingprice = glazingprice
};

function addItemToCart(name, bunprice, count, glazing, glazingprice) {
    for (var i in cart) {
        if (cart[i].name === name) {
            if (cart[i].glazing === glazing) {
                cart[i].count += count;
                return;
            }
        }
    }
    var item = new Item(name, bunprice, count, glazing, glazingprice);
    cart.push(item);
    saveCart();
}



// console.log(cart);
// console.log(cart[0].glazing)


function removeItemFromCart(name) {
    for (var i in cart) {
        if ((cart[i].name) === name) {
            cart[i].count = cart[i].count -1; //cart[i].count = cart[i].count - 1
            if ((cart[i].count) === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart();
}    //removes one item

// console.log(cart[0].count);
// removeItemFromCart("Original Cinnamon Bun");
// console.log(cart[1].count);

function removeItemFromCartAll(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
} // removes all item name

// addItemToCart("Blackberry Cinnamon Bun", 2.5, 1, "Double Chocolate", .5);
// addItemToCart("Original Cinnamon Bun", 2.5, 2, "Vanilla", .25);
// addItemToCart("Blackberry Cinnamon Bun", 2.5, 6, "Double Chocolate", .5 );
// addItemToCart("Pumpkin Spice Cinnamon Bun", 2.5, 1, "Double Chocolate", .5);
// addItemToCart("Original Cinnamon Bun", 2.5, 3, "Vanilla", .25);
// addItemToCart("Gluten Free Cinnamon Bun", 2.5, 6, "Double Chocolate", .5 );

// console.log(cart.length);
// console.log(cart);

// removeItemFromCartAll("Original Cinnamon Bun");

// console.log(cart.length);
// console.log(cart);

function clearCart() {
    cart = [];
    saveCart();
}

function countCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
} //-> return total count

function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += (cart[i].bunprice)*(cart[i].count)+(cart[i].glazingprice)*(cart[i].count);
    }
    return totalCost;
}  //-> return total cost

// console.log(totalCart())


function listCart() {
    // return cart; //conventional
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = [];
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
} // array of Item


/*var a = cart
var b = a.slice --> copy of a. without a slice its just a reference. 

*/

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}


function loadCart() {
   cart = JSON.parse(localStorage.getItem("shoppingCart"));
}


loadCart();

var array = listCart();





// var cinnamon = new Item("cinnamon", 1.99, 1);

// cart.push( new Item("apple", 2.13, 1));
// // {name:"", price:0.00, count: 0}
// cart.push(cinnamon);

// console.log(cart);
// // name price count




function addedToCart(){
    // var x = 0
    // var cart = localStorage.getElementById("cartcount");
    // cart = document.getElementsById("cartcount").innerHTML
    // x += 1
    // cart = x
    var x = document.getElementById("cartcount");
    document.getElementById("cartcount").innerHTML = x+1;
    document.getElementById("addtocart").innerHTML = "Proceed to Check Out";
    var name = document.getElementById("buntitle");
    localStorage.setItem("bunname", name);

    cart.push(name);
    console.log(cart);
    alert("Your tasty item has been added to your shopping cart!");
}




function removeCartItem(){
    var x = document.getElementsByClassName("delete-btn");
    
}


function priceFunction(){
    var x = document.getElementById("qt").value;
    var y = document.getElementById("glazing").value;
    document.getElementById("number").innerHTML = `${(x*2.5) + (x*y)}$`;

}



function ItemPrice(){
    var x = document.getElementById("cart-item-quantity").value;
    var y = document.getElementById("glazing-type").value;
    var z = (document.getElementById("total-price").innerHTML = `${(x*2.5) + (y*x)}$`);
    console.log(z);
    document.getElementById("subtotal").innerHTML = `${z}`;
}

function glazingPrice(){
    var x = document.getElementsByClassName("glazing-type").value;
    var y = document.getElementById("cart-item-quantity").value;
    var galzingprice = document.getElementById("total-price").innerHTML;
    document.getElementById("total-item").innerHTML = `${parseInt(x)*parseInt(y)}$`
}