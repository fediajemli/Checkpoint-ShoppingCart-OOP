export class CartItem{
    constructor(product, quantity=1, ){
        this.product = product;
        this.quantity = quantity;
    }
    increaseQuantity(){
        this.quantity += 1;
    }
    decreaseQuantity(){
        this.quantity -= 1;
    }

}
export class ShoppingCart{
    constructor(){
        this.items = [];
    }
    addToCart(product){
        const item = this.items.find((item)=> item.product.id === product.id)
        if(item){
            item.quantity += 1;
            const itemIndex = this.items.findIndex((item)=> item.product.id === product.id);
            this.items.splice(itemIndex,1, item);
        }else{
            this.items.push(new CartItem(product));
        }
    }
    removeFromCart(product){
        this.items = this.items.filter((item) => item.product.id !== product.id)
    }
    clear(){
        this.item = [];
    }
    getTotalPrice(){
        return  this.items.reduce((acc,curr) =>  acc + curr.product.price * curr.quantity, 0 );

    }
    load(){}
    save(){}
    render(){}

}

