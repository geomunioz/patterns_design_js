/**
 *  How implement Prototype?
 * 
 *  1. Declare a base class/interface prototype that contains clone methods
 *  2. Create concrete products who inherits/implements from prototype class
 */

class Car{

    constructor({edition, model, airBags, color} = {}){
        this._edition = edition || 'default';
        this._model = model || '';
        this._airBags = airBags || 0;
        this._color = color || 'default';
    }

    set airBags(howMany){
        this._airBags = howMany;
    }

    set color(color){
        this._color = color;
    }

    set model(model){
        this._model = model;
    }

    set edition(edition){
        this._edition = edition;
    }

    get airBags(){
        return this._airBags;
    }

    get color(){
        return this._color;
    }

    get model(){
        return this._model;
    }

    get edition(){
        return this._edition;
    }

    /**STEP 1 */
    clone(){
        throw new Error('Method not defined!');
    }
}

class MastodonCar extends Car{
    constructor(carToClone){
        super({
            edition: carToClone?.edition,
            color: carToClone?.color,
            model: carToClone?.model,
            airBags: carToClone?.airBags
        });
    }

    clone(){
        return new MastodonCar(this);
    }
}

const OriginalCar = new MastodonCar();
console.log('Creacion de Original Car: '+OriginalCar);
OriginalCar.edition = 'CVT';
OriginalCar.model = 'sedan';
OriginalCar.airBags = 4;
OriginalCar.color = 'red';

console.log('🔵 Original Car:');
console.log(OriginalCar);

console.log('Clonar Objeto');
const clonOriginalCar = OriginalCar.clone();
console.log('🔵 CLON Original Car:');
console.log(clonOriginalCar);

//Modificación
clonOriginalCar.model = 'x2';
clonOriginalCar.color = 'blue';
console.log('🔵 CLON Original Car modificado:');
console.log(clonOriginalCar);