// declaration de class
class product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
}

}
// declaration de shoppingcarditem

class shoppingcarditem{
    constructor(product,quantity){
        this.product=product;
    this.quantity=quantity; 
}
}
// table des card avec function de calcule total
class shoppingcard{
    constructor(){
        this.items[];
    }

    //function pour calculer ma somme

    calculatetotalprice(){
    return this.product.price*this.quatity;
}
}
additem(product,quantity=1);{
    const existingitem= this.items.find(items=>items.product.id===product.id);
    if(existingitem){
        existingitem.quantity+=quantity;
    }else{
        const newitem=new shoppingcarditem(product,quantity)
        this.items.push(newitem);
    }
    
}
// supprmier un produit
removeitem(productid){
    this.items=this.items.filter(item => item.product.id !== productid);
    
}