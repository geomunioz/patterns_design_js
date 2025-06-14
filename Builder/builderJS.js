/**
 * How implement builder
 * 
 * 1. Declare builder base class/interface who will define the general steps for build products,
 * each build must implement these steps.
 * 
 * CarProductionLine
 *      setAirBags
 *      setColor
 *      setEdition
 *      resetProductionLine
 * 
 * 2. Implement concrete builders subclasses that offer different
 * versions of the build steps. These builders could create concrete products, not abstract ones.
 *  - SedanProductionLine: build() -> car
 *  - RhinoProductionLine: build() -> car
 * 
 * 3. Implement Product Classes, these ones could not belong to the same interface or base class.
 * for the problem we will make the builder return product base class
 * 
 *  Class Car
 *  Class MastodonCar
 *  Class RhinoCar
 * 
 * 4. Implement director class , this one will know the build process for each product , so we can create
 * specific configurations for the products.
 * 
 * Build Processes
 *      ConstructCVTEdition
 *      ConstructSignatureEdition
 */

/**STEP 1 */
class CarProductionLine{
    setAirBags(airBagsNumber){
        throw new Error("Method undefined!");
    }

    setColor(color){
        throw new Error("Method undefined!");
    }

    setEdition(edition){
        throw new Error("Method undefined!");
    }

    resetProductionLine(){
        throw new Error("Method undefined!");
    }    

}


/**STEP 2 */
class SedanProductionLine extends CarProductionLine{
    constructor({ model }){
        super();
        this.setInternalModel(model);
        this.resetProductionLine();
    }

    setAirBags(howMany){
        this.sedanCar.airBags = howMany
        return this;
    }

    setColor(color){
        this.sedanCar.color = color;
        return this;
    }

    setEdition(edition){
        this.sedanCar.edition = edition;
        return this;
    }

    setInternalModel(model){
        this.internalModel = model;
    }

    setModel(){
        this.sedanCar.model = 'sedan';
    }

    resetProductionLine(){
        this.sedanCar = 
            this.internalModel === 'mastodon' ? new MastodonCar() : new RhinoCar();
    }

    build(){
        this.setModel();
        const sedanCar = this.sedanCar;
        this.resetProductionLine();
        return sedanCar;
    }
}

/**STEP 3 */
class Car{
    constructor(){
        this._edition = '',
        this._model = '';
        this._airBag = 2;
        this._color = 'black';
    }

    set airBags(howMany){
        this._airBag = howMany;
    }

    set color(color){
        this._color = color;
    }

    set edition(edition){
        this._edition = edition;
    }

    set model(model){
        this._model = model;
    }
}

class MastodonCar extends Car{
    constructor(){
        super();
    }
}

class RhinoCar extends Car{
    constructor(){
        super();
    }
}

/**STEP 4 */
class Director{
    setProductionLine(productionLine){
        this.productionLine = productionLine
    }

    constructCVTEdition(){
        this.productionLine.setAirBags(4).setColor('blue').setEdition('CVT');
    }

    construcSignature(){
        this.productionLine.setAirBags(8).setColor('red').setEdition('Signature');
    }
}

function appBuilder(director){
    const mastodonSedanProductLien = new SedanProductionLine({
        model:'mastodon'
    });

    director.setProductionLine(mastodonSedanProductLien);
    director.constructCVTEdition();
    const mastodonSedaNCVT = mastodonSedanProductLien.build();
    console.log(mastodonSedaNCVT);

    director.construcSignature();
    const mastodonSedanSignature = mastodonSedanProductLien.build();
    console.log(mastodonSedanSignature);
};

appBuilder(new Director());