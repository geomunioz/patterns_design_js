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
/**STEP1 */
interface CPUElectronic{
    setSeries():void
}

interface MemoryElectronic{
    setCapacityInGB():void
}

interface DisplayElectronic{
    setResolution():void
}

/**STEP 2 */
class CPUPhoneElectronic implements CPUElectronic{
    setSeries(): void {
        console.log("[Phone] CPU Series");
    }
}

class CPUTabletElectronic implements CPUElectronic{
    setSeries(): void {
        console.log("[Tablet] CPU Series");
    }
}

class CPULaptopElectronic implements CPUElectronic{
    setSeries(): void {
        console.log("[Laptop] CPU Series");
    }
}

class MemoryPhoneElectronic implements MemoryElectronic{
    setCapacityInGB(): void {
        console.log("[Phone] Memory CapacityGB ");
    }
}

class MemoryTabletElectronic implements MemoryElectronic{
    setCapacityInGB(): void {
        console.log("[Tablet] Memory CapacityGB");
    }
}

class MemoryLaptopElectronic implements MemoryElectronic{
    setCapacityInGB(): void {
        console.log("[Laptop] Memory CapacityGB");
    }
}

class DisplayPhoneElectronic implements DisplayElectronic{
    setResolution(): void {
        console.log("[Phone] Display Resolution");
    }
}

class DisplayTabletElectronic implements DisplayElectronic{
    setResolution(): void {
        console.log("[Table] Display Resolution");
    }
}

class DisplayLaptopElectronic implements DisplayElectronic{
    setResolution(): void {
        console.log("[Laptop] Display Resolution");
    }
}

/**STEP 3 */
interface ElectronicAbstracFactory{
    createCPU():CPUElectronic;
    createMemory():MemoryElectronic;
    createDisplay():DisplayElectronic;
}

/**STEP 4 */
class PhoneElectronicFactory implements ElectronicAbstracFactory{
    createCPU(): CPUElectronic {
        return new CPUPhoneElectronic();
    }

    createMemory(): MemoryElectronic {
        return new MemoryPhoneElectronic();
    }

    createDisplay(): DisplayElectronic {
        return new DisplayPhoneElectronic();
    }
}

class TabletElectronicFactory implements ElectronicAbstracFactory{
    createCPU(): CPUElectronic {
        return new CPUTabletElectronic();
    }

    createMemory(): MemoryElectronic {
        return new MemoryTabletElectronic();
    }

    createDisplay(): DisplayElectronic {
        return new DisplayTabletElectronic();
    }
}

class LaptopElectronicFactory implements ElectronicAbstracFactory{
    createCPU(): CPUElectronic {
        return new CPULaptopElectronic();
    }

    createMemory(): MemoryElectronic {
        return new MemoryLaptopElectronic();
    }

    createDisplay(): DisplayElectronic {
        return new DisplayLaptopElectronic();
    }
}

function appElectronicFactory(factory:ElectronicAbstracFactory){
    const cpu: CPUElectronic = factory.createCPU();
    const memory: MemoryElectronic = factory.createMemory();
    const display: DisplayElectronic = factory.createDisplay();

    cpu.setSeries();
    memory.setCapacityInGB();
    display.setResolution();
}

type ElectronicFactoryType = 'phone' | 'tablet' | 'laptop';
function createFactory(type:ElectronicFactoryType):ElectronicAbstracFactory{
    const factories = {
        phone: PhoneElectronicFactory,
        tablet: TabletElectronicFactory,
        laptop: LaptopElectronicFactory
    };

    const Factory = factories[type];
    return new Factory();
}

appElectronicFactory(createFactory('phone'));