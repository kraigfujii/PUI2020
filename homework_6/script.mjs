/* 
Things I need to do:
- Create an add to cart button 
- Store and update cart/quantity value 
- Update and display value 
*/ 



/*
JSON takes an object/list of objects, make them into a string+attributes,
then makes it into an object.
*/


var productArr = [] //array
var productArr2 = []


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
    var type = document.getElementById('harness_size').value
    var colors = document.getElementById("color").value
    var quant = document.getElementById('quant').value


    /*
    var selectedColor;
    colors[0].id

    
    for(var i=0; i < colors.length; i++) {
        if(colors[i].checked){
            selectedColor = colors[i].value;
        }
    }*/

    var type = document.getElementById('harness_size').value
    var colors = document.getElementById('color').value

    alert('Item added to cart! ')

    var harness_product = new Product(type, colors)
    var quantCounter = parseInt(quant)

    //something is wrong with this, FIX IT
    for (var i = 0; 1 <quantCounter; i++){
        var harness_product = new Product(type, colors)
        productArr.push(harness_product)
    }

    productArr.push(harness_product)

    updateCartNumber(productArr.length)

    console.log('Here"s the productArray')
    console.log(productArr)

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
    alert('loaded checkout page')

    //to retrieve 
    var loadedProductArr = localStorage.getItem('order')
    productArr2 = JSON.parse(loadedProductArr)
    
    console.log('we are on checkout page')
    console.log(productArr2)


    var listOfProducts = document.getElementById('listOfProducts')



    for (var i = 0; i< productArr2.length; i++){
        var harness_product = productArr2[i];
        var harness_product_size = harness_product.size;
        var harness_product_color = harness_product.colors;
        var harness_product_quantity = harness_product.quantity;

        
        listOfProducts.innerHTML += '<div>Size: ' + harness_product.size + '<div>Color: ' + harness_product_color + '<div>Quantity: '
        listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
		listOfProducts.innerHTML += '<br /><br /><br />'

    }

}


function goToCheckoutPage() {
    //Set the product order in local storage 
    localStorage.setItem('order',JSON.stringify(productArr))

    //ProductArr2 is the same as productArr 
    window.location.replace('user_checkout.html')
} 

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

function saveEdits() {
	localStorage.setItem('order', JSON.stringify(productArr2))
}