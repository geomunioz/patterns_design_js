var Product = /** @class */ (function () {
    function Product(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getCost = function () {
        return this.cost;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    return Product;
}());
var ShoppingCar = /** @class */ (function () {
    function ShoppingCar() {
        this.products = [];
    }
    ShoppingCar.prototype.addProduct = function (product) {
        console.log("Agregando Producto");
        this.products.push(product);
        console.log("Se agrego producto" + product);
    };
    ShoppingCar.prototype.deleteById = function (id) {
        this.products = this.products.filter(function (product) { return product.getId() !== id; });
    };
    ShoppingCar.prototype.getProducts = function () {
        return this.products;
    };
    ShoppingCar.getInstance = function () {
        if (!ShoppingCar.instance) {
            ShoppingCar.instance = new ShoppingCar();
        }
        return ShoppingCar.instance;
    };
    return ShoppingCar;
}());
function appShoppingCar() {
    //Todas las variables tienen la misma referencia al mismo objeto. 1 sola instancia a lo largo de la aplicación:
    var singleton1 = ShoppingCar.getInstance();
    var product1 = new Product(101, "Mermelada", 24);
    console.log(product1);
    singleton1.addProduct(product1);
    console.log(singleton1.getProducts());
    var singleton2 = ShoppingCar.getInstance();
    var product2 = new Product(102, "Sandia", 72);
    singleton2.addProduct(product2);
    console.log(singleton2.getProducts());
}
appShoppingCar();
