/* 
Things I need to do:
- Create an add to cart button 
- Store and update cart/quantity value 
- Update and display value 
*/ 

productArr = [] //array

//This is going to be a product class you can purchase  
class Product {
    constructor(color, size, quantity) 
    {
        this.color = color 
        this.size = size 
        this.quantity = quantity 
    }

    getColor()
    {
        return this.color
    }

}

