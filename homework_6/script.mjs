/* 
Things I need to do:
- Create an add to cart button 
- Store and update cart/quantity value 
- Update and display value 
*/ 


var productArr = [] //array for storage
var productArr2 = []

var productQuantity = 0; //# of products


//This is going to be a product class you can purchase  
class Product {
    constructor(size, color, quantity) 
    {
        this.size = size 
        this.color = color 
        this.quantity = quantity 
    }

    getColor()
    {
        return this.color
    }

}

function addToCart() {
    var size = document.getElementById("size").value
    var color = document.getElementById("color").value
    var quantity = document.getElementById("quantity").value

    productQuantity = Number(quantity) + Number(productQuantity); //should add user-selected quantity to this thing
    document.getElementById("cartCounter").innerHTML = productQuantity;  

    alert('Item added to cart! ')

    var harness_product = new Product(size, color, quantity)
    //var quantCounter = parseInt(quantity)

    if (productArr){
        productArr.push(harness_product)
    }
    else {
        productArr = [];
        productArr.push(roll);
    }
    /*
    //something is wrong with this, FIX IT
    for (var i = 0; 1 <quantCounter; i++){
        var harness_product = new Product(size, color, quantity)
        productArr.push(harness_product)
    } 
    */
    /*
    productArr.push(harness_product)
    updateCartNumber(productArr.length)*/

    console.log("Here's the productArray")
    console.log(productArr)
}

function saveEdits() {
    localStorage.setItem("order", JSON.stringify(productArr))
    localStorage.setItem("number", JSON.stringify(productQuantity));
}

function getCartNumber(){
    var storedNumber = localStorage.getItem("number");
    productQuantity = JSON.parse(storedNumber);
    if(productQuantity)
      document.getElementById("cartCounter").innerHTML = productQuantity;  
    else
     document.getElementById("cartCounter").innerHTML = 0;  
}

function getCartNumber(){
    var storedNumber = localStorage.getItem("number");
    totalProducts = JSON.parse(storedNumber);
    if(totalProducts)
      document.getElementById("cartCounter").innerHTML = totalProducts;  
    else
     document.getElementById("cartCounter").innerHTML = 0;  
}

//pulls cart info from local storage and loads it into variables
function getCart(){
    var storedProductArray = localStorage.getItem("order");
    var productArrayNew = JSON.parse(storedProductArray);
    productArr = productArr2;  
}


function updateCartNumber (num){
    var cartCounter = document.getElementById('cartCounter')

    var cartCountVal = 0;
    for (var i=0; i < productArr; i++){
        cartCountVal = cartCountVal + parseInt(productArr[i].quant);
    }
    cartCounter.innerHTML = num;
}

function checkoutPageLoaded() {
    //alert('loaded checkout page')

    //to retrieve 
    var loadedProductArr = localStorage.getItem('order')
    productArr2 = JSON.parse(loadedProductArr)
/*
    console.log('we are on checkout page')
    console.log(productArr2)


    
    var listOfProducts = document.getElementById('listOfProducts')

    for (var i = 0; i< productArr2.length; i++){
        var harness_product = productArr2[i];
        var harness_product_size = harness_product.size;
        var harness_product_color = harness_product.color;
        var harness_product_quantity = harness_product.quantity;

        //original print statements 
        listOfProducts.innerHTML += '<div>Size: ' + harness_product.size + '<div>Color: ' + harness_product_color + '<div>Quantity: ' + harness_product.quantity
        listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">Delete Orderss</span>'
		listOfProducts.innerHTML += '<br /><br /><br />'

    }*/

}


function goToCheckoutPage() {
    //Set the product order in local storage 
    localStorage.setItem('order',JSON.stringify(productArr))

    //ProductArr2 is the same as productArr 
    window.location.replace('user_checkout.html')
} 

/*
function removeItem(){
    productQuantity = productQuantity - quantity; // should remove item
}*/

function removeItemFromCart(elem){
    //gets the quantity of the product to be removed
    var string = elem.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    var quantityString = string.match(/\d+/g);
    var quantity = parseInt(quantityString);

    //subtracts the number of items in the cart by the quantity of the item to be removed and updates the HTML
    productQuantity = productQuantity - quantity;
    document.getElementById("cartCounter").innerHTML = productQuantity;  
    
    //calculates the index of the item to be removed in the product array based on position of the HTML node
    var index = Array.from(elem.parentNode.parentNode.parentNode.children).indexOf(elem.parentNode.parentNode)-1;
    //removes the item to be removed from the product array
    productArr.splice(index, 1);

    //removes the item to be removed from the HTML
    elem.parentNode.parentNode.parentNode.removeChild(elem.parentNode.parentNode);    
}


/*
//Instructor's example delete function 
function deleteProduct(i) {
	alert('i : ' + i)
	console.log('before we delete')
	console.log(productArr2)
	
	//Remove this product object from our productArr2 
	productArr2.splice(i,1)
	
	console.log('after we delete')
	console.log(productArr2)
	
	listOfProducts.innerHTML = ''
	
	for(var i = 0; i < productArr2.length; i++) {
	   var flower = productArr2[i]
	   if (flower) {
		   var flowerType = flower.type
		   var flowerColor = flower.color
		   var flowerThorns = flower.thorns
		   if (flowerType == 'rose') {
			listOfProducts.innerHTML += '<div class="roses">Type: ' + flowerType + ' Color: ' + flowerColor + ' Thorns: ' + flowerThorns + '</div>'
			listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
			listOfProducts.innerHTML += '<br /><br /><br />'
		   }
		   else {
			listOfProducts.innerHTML += '<div onclick="wow()">Type: ' + flowerType + ' Color: ' + flowerColor + ' Thorns: ' + flowerThorns + '</div>'
			listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
			listOfProducts.innerHTML += '<br /><br /><br />'
		   }
	   }
	   
	}	
}
*/


function showCart(){
    if(productArr && productArr.length > 0){
        document.getElementById("cart-empty").style.display = 'none';

        var cart = document.querySelector(".cart-item-list");
        var newCartItem; 

        for(var x = 0; x < productArr2.length; x++) {
            //creates new HTML nodes for each cart item based on existing HTML
            newCartItem = document.querySelector(".cart-item").cloneNode(true);
            newCartItem.style.display = 'flex'; 
            
            //changes HTML node contents to reflect the product in the cart
            newCartItem.querySelector('.cart-item-size').innerHTML = "Size: " + productArr[x].size;
            newCartItem.querySelector('.cart-item-quantity').innerHTML = "Quantity: " + productArr[x].quantity;
            newCartItem.querySelector('.cart-item-color').innerHTML = "Color: " + productArr[x].color;
            
            //adds the new node to the HTML document in the correct location
            cart.appendChild(newCartItem);
        }
    }
}