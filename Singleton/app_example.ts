class Product{
    private id: number;
    private name: string;
    private cost: number;

    public constructor(id:number, name: string, cost:number){
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    public getName():string{
        return this.name;
    }

    public getCost():number{
        return this.cost;
    }

    public getId():number{
        return this.id;
    }

}


class ShoppingCar{
    
    private static instance: ShoppingCar;
    private products:Product[];

    private constructor(){
        this.products = [];
    }

    public addProduct(product:Product): void{
        console.log("Agregando Producto");
        this.products.push(product);
        console.log("Se agrego producto"+product);
    }

    public deleteById(id:number):void{
        this.products = this.products.filter(product => product.getId() !== id);
    }

    public getProducts(): Product[]{
        return this.products;
    }

    static getInstance(): ShoppingCar{
        if(!ShoppingCar.instance){
            ShoppingCar.instance = new ShoppingCar();
        }

        return ShoppingCar.instance;
    }
}


function appShoppingCar(){
    //Todas las variables tienen la misma referencia al mismo objeto. 1 sola instancia a lo largo de la aplicación:
    const singleton1 = ShoppingCar.getInstance();

    let product1 = new Product(101,"Mermelada", 24);
    console.log(product1);
    
    singleton1.addProduct(product1);

    console.log(singleton1.getProducts());

    const singleton2 = ShoppingCar.getInstance();

    let product2 = new Product(102,"Sandia", 72);
    
    singleton2.addProduct(product2);

    console.log(singleton2.getProducts());


}

appShoppingCar();