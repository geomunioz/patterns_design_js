/**1. Declare base product class/interface, this will be returned by factory class and their sub classes. */
/**2. Implement concrete products sub classes that inherits/implements the base product class/interface. */
var HttpAdapterOne = /** @class */ (function () {
    function HttpAdapterOne() {
    }
    HttpAdapterOne.prototype.get = function () {
        console.log("Se obtiene nuevo Adapter One");
    };
    HttpAdapterOne.prototype.post = function () {
        console.log("Alta nuevo Adapter One");
    };
    HttpAdapterOne.prototype.put = function () {
        console.log("Actualización Adapter One");
    };
    HttpAdapterOne.prototype.delete = function () {
        console.log("Elimina Adapter One");
    };
    return HttpAdapterOne;
}());
var HttpAdapterTwo = /** @class */ (function () {
    function HttpAdapterTwo() {
    }
    HttpAdapterTwo.prototype.get = function () {
        console.log("Se obtiene nuevo Adapter Two");
    };
    HttpAdapterTwo.prototype.post = function () {
        console.log("Alta nuevo Adapter Two");
    };
    HttpAdapterTwo.prototype.put = function () {
        console.log("Actualización Adapter Two");
    };
    HttpAdapterTwo.prototype.delete = function () {
        console.log("Elimina Adapter Two");
    };
    return HttpAdapterTwo;
}());
/**4. Implement concrete factories sub classes that inherits/implements the base factory class/interface. These classes will return concrete
 *  products in their factory method. */
var OneFactory = /** @class */ (function () {
    function OneFactory() {
    }
    OneFactory.prototype.makeAdapter = function () {
        return new HttpAdapterOne();
    };
    return OneFactory;
}());
var TwoFactory = /** @class */ (function () {
    function TwoFactory() {
    }
    TwoFactory.prototype.makeAdapter = function () {
        return new HttpAdapterTwo();
    };
    return TwoFactory;
}());
function clientApp(factory) {
    var httpAdapter = factory.makeAdapter();
    httpAdapter.get();
    httpAdapter.post();
    httpAdapter.put();
    httpAdapter.delete();
}
function createFactory(type) {
    var factories = {
        One: OneFactory,
        Two: TwoFactory
    };
    var Factory = factories[type];
    return new Factory();
}
clientApp(createFactory('One'));
clientApp(createFactory('Two'));
