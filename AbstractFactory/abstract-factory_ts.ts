/**
 * how to implement Abstract Factory
 * 
 * 1.- Declare base product classes/interfaces for each product in the catalog
 * 
 * Products Interfaces:
 * - MastodonCar
 * - RhinoCar
 * 
 * 2.- Implement concrete products classes that inherits/inplements base products classes/interfaces , for each of the family types
 * 
 * Concrete Products:
 * - MastodonSedanCar
 * - MastodonHatchbackCar
 * - RhinoSedanCar
 * - RhinoHatchbackCar
 * 
 * 3.- Declare abstract factory class/interface that declare creation methods for each base product.
 * Abstract Factory
 * - CarFactory
 *  * 
 */

/**STEP 1 */
interface MastodonCar{
    useGPS(): void;
}

interface RhinoCar{
    useGPS(): void;
}

/**STEP 2 */
class TSMastodonSedanCar implements MastodonCar{
    useGPS(): void {
        console.log('[SEDAN] Mastodon GPS');
    }
}

class TSMastodonHatchbackCar implements MastodonCar{
    useGPS(): void {
        console.log('[HATCHBACK] Mastodon GPS');
    }
}

class TSRhinoSedanCar implements RhinoCar{
    useGPS(): void {
        console.log('[SEDAN] Rhino GPS');        
    }
}

class TSRhinoHatchbackCar implements RhinoCar{
    useGPS(): void {
        console.log('[HATCHBACK Rhino GPS]');        
    }
}

/**STEP 3 */
interface TSCarAbstractFactory{
    createMastodon(): MastodonCar;
    createRhino(): RhinoCar;
}

/**STEP 4 */
class TSSedanCarFactory implements TSCarAbstractFactory{
    createMastodon(): MastodonCar {
        return new MastodonSedanCar();
    }

    createRhino(): RhinoCar {
        return new RhinoSedanCar();
    }
}

class TSHatchbarCarFactory implements TSCarAbstractFactory{
    createMastodon(): MastodonCar {
        return new MastodonHatchbackCar();
    }

    createRhino(): RhinoCar {
        return new RhinoHatchbackCar();
    }
}

function TSappCarFactory(factory:TSCarAbstractFactory){
    const mastodon: MastodonCar = factory.createMastodon();
    const rhino: RhinoCar = factory.createRhino();

    mastodon.useGPS();
    rhino.useGPS();
}

type FactoryType = 'sedan' | 'hatchback';
function TScreateFactory(type:FactoryType): TSCarAbstractFactory{
    const factories = {
        sedan: TSSedanCarFactory,
        hatchback: TSHatchbarCarFactory
    };

    const Factory = factories[type];
    return new Factory();

}

TSappCarFactory(TScreateFactory('sedan'));
TSappCarFactory(TScreateFactory('hatchback'));
