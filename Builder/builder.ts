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
interface TSCarProductionLine{
    setAirBags(howMany:number): TSCarProductionLine;
    setColor(color: AvailableColors): TSCarProductionLine;
    setEdition(edition: string): TSCarProductionLine;
    resetProductionLine(): void;
}

/**STEP 2 */
type CarCatalog = 'mastodon' | 'rhino' | 'sport';
type ConstructorParams = { model:CarCatalog};

class TSSedanProductionLine implements TSCarProductionLine{
    private sedanCar!: TSCar;
    private internalModel!: CarCatalog;

    constructor({ model }:ConstructorParams){
        this.setInternalModel(model);
        this.resetProductionLine();
    }

    setAirBags(howMany: number): TSSedanProductionLine {
        this.sedanCar.airBags = howMany;
        return this;
    }

    setColor(color: AvailableColors): TSSedanProductionLine{
        this.sedanCar.color = color;
        return this;
    }

    setEdition(edition: string): TSSedanProductionLine {
        this.sedanCar.edition = edition;
        return this;
    }

    setInternalModel(model: CarCatalog){
        this.internalModel = model;
    }

    setModel(){
        this.sedanCar.model = 'sedan';
    }

    //We can use a factory here to determine which model use
    resetProductionLine(): void {
        this.sedanCar =
            this.internalModel === 'mastodon'
            ? new TSMastodonCar()
            : new TSRhinoCar();
    }

    build(): TSCar{
        this.setModel();
        const sedanCar = this.sedanCar;
        this.resetProductionLine();
        return sedanCar;
    }

}

class TSHatchbackProductionLine implements TSCarProductionLine{
    private hatchbackCar!: TSCar;
    private internalModel!: CarCatalog;

    constructor({ model }:ConstructorParams){
        this.setInternalModel(model);
        this.resetProductionLine();
    }

    setAirBags(howMany: number): TSHatchbackProductionLine {
        this.hatchbackCar.airBags = howMany;
        return this;
    }

    setColor(color: AvailableColors): TSHatchbackProductionLine {
        this.hatchbackCar.color = color;
        return this;
    }

    setEdition(edition: string): TSHatchbackProductionLine {
        this.hatchbackCar.edition = edition;
        return this;
    }

    setInternalModel(model: CarCatalog){
        this.internalModel = model;
    }

    setModel(){
        this.hatchbackCar.model = 'hatchback';
    }

    //We can use a factory here to determine which model use
    resetProductionLine(): void {
        this.hatchbackCar =
            this.internalModel === 'mastodon'
            ? new TSMastodonCar()
            : new TSRhinoCar();
    }

    build(): TSCar{
        this.setModel();
        const sedanCar = this.hatchbackCar;
        this.resetProductionLine();
        return sedanCar;
    }

}

/**STEP 3 */
type AvailableColors = 'red' | 'black' | 'gray' | 'blue' | 'default';

class TSCar{
    private _edition!: string;
    private _model!:string;
    private _airBags: number = 2;
    private _color: AvailableColors = 'black';

    set airBags(howMany: number){
        this._airBags = howMany;
    }

    set color(color: AvailableColors){
        this._color = color;
    }

    set edition(edition: string){
        this._edition = edition;
    }

    set model(model:string){
        this._model = model;
    }
}

class TSMastodonCar extends TSCar{
    constructor(){
        super();
    }
}

class TSRhinoCar extends TSCar{
    constructor(){
        super();
    }
}

/**STEP 4 */
class TSDirector{
    private productionLine!: TSCarProductionLine;

    setProductionLine(productionLine: TSCarProductionLine){
        this.productionLine = productionLine;
    }

    constructCVTEdition():void{
        this.productionLine
            .setAirBags(4)
            .setColor('blue')
            .setEdition('CVT');
    }

    constructSignatureEdition():void{
        this.productionLine
            .setAirBags(8)
            .setColor('gray')
            .setEdition('Signature');
    }

    constructSportEdition():void{
        this.productionLine
            .setAirBags(2)
            .setColor('red')
            .setEdition('Sport');
    }
}

function appBuilderTS(director: TSDirector){
    const mastodonSedanProductLine = new TSSedanProductionLine({
        model:'mastodon',
    });

    const rhinoHatchbackProductLine = new TSHatchbackProductionLine({
        model: 'rhino',
    });

    director.setProductionLine(mastodonSedanProductLine);
    director.constructCVTEdition();
    const mastodonSedanCVT = mastodonSedanProductLine.build();
    console.log(mastodonSedanCVT);

    director.constructSignatureEdition();
    const mastodonSedanSignature = mastodonSedanProductLine.build();
    console.log(mastodonSedanSignature);

    director.setProductionLine(rhinoHatchbackProductLine);
    director.constructSportEdition();
    const rhinoHatchbackSport =  rhinoHatchbackProductLine.build();
    console.log(rhinoHatchbackSport)

}

appBuilderTS(new TSDirector());