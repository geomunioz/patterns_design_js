/**
 *  How implement Prototype?
 * 
 *  1. Declare a base class/interface prototype that contains clone methods
 *  2. Create concrete products who inherits/implements from prototype class
 */

type EditionsType = 'cvt' | 'signature' | 'default';
type AvailableColor = 'red' | 'blue' | 'default';
type CarContructorParams = {
    edition: EditionsType;
    model: string;
    airBags: number;
    color: AvailableColor;

}

abstract class CarTS{
    private _edition: EditionsType;
    private _model: string;
    private _airBags: number;
    private _color: AvailableColor;

    constructor({
        edition,model,airBags,color
    }:CarContructorParams){
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
    abstract clone(): CarTS;

}

class MastodonCarTS extends CarTS{
    constructor(carToClone?: MastodonCarTS);
    constructor(carToClone: MastodonCarTS){
        super({
            edition: carToClone?.edition,
            color: carToClone?.color,
            model: carToClone?.model,
            airBags: carToClone?.airBags
        });
    }

    /**STEP 2 */
    clone():MastodonCarTS{
        return new MastodonCarTS(this);
    };
}

const OriginalCarTS = new MastodonCarTS();
console.log('Creacion de Original Car: '+OriginalCarTS);
OriginalCarTS.edition = 'cvt';
OriginalCarTS.model = 'sedan';
OriginalCarTS.airBags = 4;
OriginalCarTS.color = 'red';

console.log('🔵 Original Car:');
console.log(OriginalCarTS);

console.log('Clonar Objeto');
const clonOriginalCarTS = OriginalCarTS.clone();
console.log('🔵 CLON Original Car:');
console.log(clonOriginalCarTS);

//Modificación
clonOriginalCarTS.model = 'x2';
clonOriginalCarTS.color = 'blue';
console.log('🔵 CLON Original Car modificado:');
console.log(clonOriginalCarTS);