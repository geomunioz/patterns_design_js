/**STEP 2 */
var CPUPhoneElectronic = /** @class */ (function () {
    function CPUPhoneElectronic() {
    }
    CPUPhoneElectronic.prototype.setSeries = function () {
        console.log("[Phone] CPU Series");
    };
    return CPUPhoneElectronic;
}());
var CPUTabletElectronic = /** @class */ (function () {
    function CPUTabletElectronic() {
    }
    CPUTabletElectronic.prototype.setSeries = function () {
        console.log("[Tablet] CPU Series");
    };
    return CPUTabletElectronic;
}());
var CPULaptopElectronic = /** @class */ (function () {
    function CPULaptopElectronic() {
    }
    CPULaptopElectronic.prototype.setSeries = function () {
        console.log("[Laptop] CPU Series");
    };
    return CPULaptopElectronic;
}());
var MemoryPhoneElectronic = /** @class */ (function () {
    function MemoryPhoneElectronic() {
    }
    MemoryPhoneElectronic.prototype.setCapacityInGB = function () {
        console.log("[Phone] Memory CapacityGB ");
    };
    return MemoryPhoneElectronic;
}());
var MemoryTabletElectronic = /** @class */ (function () {
    function MemoryTabletElectronic() {
    }
    MemoryTabletElectronic.prototype.setCapacityInGB = function () {
        console.log("[Tablet] Memory CapacityGB");
    };
    return MemoryTabletElectronic;
}());
var MemoryLaptopElectronic = /** @class */ (function () {
    function MemoryLaptopElectronic() {
    }
    MemoryLaptopElectronic.prototype.setCapacityInGB = function () {
        console.log("[Laptop] Memory CapacityGB");
    };
    return MemoryLaptopElectronic;
}());
var DisplayPhoneElectronic = /** @class */ (function () {
    function DisplayPhoneElectronic() {
    }
    DisplayPhoneElectronic.prototype.setResolution = function () {
        console.log("[Phone] Display Resolution");
    };
    return DisplayPhoneElectronic;
}());
var DisplayTabletElectronic = /** @class */ (function () {
    function DisplayTabletElectronic() {
    }
    DisplayTabletElectronic.prototype.setResolution = function () {
        console.log("[Table] Display Resolution");
    };
    return DisplayTabletElectronic;
}());
var DisplayLaptopElectronic = /** @class */ (function () {
    function DisplayLaptopElectronic() {
    }
    DisplayLaptopElectronic.prototype.setResolution = function () {
        console.log("[Laptop] Display Resolution");
    };
    return DisplayLaptopElectronic;
}());
/**STEP 4 */
var PhoneElectronicFactory = /** @class */ (function () {
    function PhoneElectronicFactory() {
    }
    PhoneElectronicFactory.prototype.createCPU = function () {
        return new CPUPhoneElectronic();
    };
    PhoneElectronicFactory.prototype.createMemory = function () {
        return new MemoryPhoneElectronic();
    };
    PhoneElectronicFactory.prototype.createDisplay = function () {
        return new DisplayPhoneElectronic();
    };
    return PhoneElectronicFactory;
}());
var TabletElectronicFactory = /** @class */ (function () {
    function TabletElectronicFactory() {
    }
    TabletElectronicFactory.prototype.createCPU = function () {
        return new CPUTabletElectronic();
    };
    TabletElectronicFactory.prototype.createMemory = function () {
        return new MemoryTabletElectronic();
    };
    TabletElectronicFactory.prototype.createDisplay = function () {
        return new DisplayTabletElectronic();
    };
    return TabletElectronicFactory;
}());
var LaptopElectronicFactory = /** @class */ (function () {
    function LaptopElectronicFactory() {
    }
    LaptopElectronicFactory.prototype.createCPU = function () {
        return new CPULaptopElectronic();
    };
    LaptopElectronicFactory.prototype.createMemory = function () {
        return new MemoryLaptopElectronic();
    };
    LaptopElectronicFactory.prototype.createDisplay = function () {
        return new DisplayLaptopElectronic();
    };
    return LaptopElectronicFactory;
}());
function appElectronicFactory(factory) {
    var cpu = factory.createCPU();
    var memory = factory.createMemory();
    var display = factory.createDisplay();
    cpu.setSeries();
    memory.setCapacityInGB();
    display.setResolution();
}
function createFactory(type) {
    var factories = {
        phone: PhoneElectronicFactory,
        tablet: TabletElectronicFactory,
        laptop: LaptopElectronicFactory
    };
    var Factory = factories[type];
    return new Factory();
}
appElectronicFactory(createFactory('phone'));
