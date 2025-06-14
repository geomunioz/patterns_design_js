/**1. Declare base product class/interface, this will be returned by factory class and their sub classes. */

interface HttpAdapter{
    get():void;
    post():void;
    put():void;
    delete():void;
}

/**2. Implement concrete products sub classes that inherits/implements the base product class/interface. */
class HttpAdapterOne implements HttpAdapter{
    get(): void {
        console.log("Se obtiene nuevo Adapter One");
    }

    post(): void {
        console.log("Alta nuevo Adapter One");
    }

    put(): void {
        console.log("Actualización Adapter One");
    }

    delete(): void {
        console.log("Elimina Adapter One");
    }
}

class HttpAdapterTwo implements HttpAdapter{
    get(): void {
        console.log("Se obtiene nuevo Adapter Two");
    }

    post(): void {
        console.log("Alta nuevo Adapter Two");
    }

    put(): void {
        console.log("Actualización Adapter Two");
    }

    delete(): void {
        console.log("Elimina Adapter Two");
    }
}

/**3. Declare base factory class/interface that returns objects that match the base product, not the concrete ones. */
type adapters = 'One' | 'Two';

interface HttpAdapterFactory {
    makeAdapter(): HttpAdapter;
}

/**4. Implement concrete factories sub classes that inherits/implements the base factory class/interface. These classes will return concrete
 *  products in their factory method. */

class OneFactory implements HttpAdapterFactory{
    makeAdapter(): HttpAdapter {
        return new HttpAdapterOne();
    }
}

class TwoFactory implements HttpAdapterFactory{
    makeAdapter(): HttpAdapter {
        return new HttpAdapterTwo();
    }
}

function clientApp(factory:HttpAdapterFactory){
    const httpAdapter = factory.makeAdapter();
    httpAdapter.get();
    httpAdapter.post();
    httpAdapter.put();
    httpAdapter.delete();
}

function createFactory(type){
    const factories = {
        One: OneFactory,
        Two: TwoFactory
    }

    const Factory = factories[type];
    return new Factory();
}

clientApp(createFactory('One'));
clientApp(createFactory('Two'));