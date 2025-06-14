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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TSSedanProductionLine = /** @class */ (function () {
    function TSSedanProductionLine(_a) {
        var model = _a.model;
        this.setInternalModel(model);
        this.resetProductionLine();
    }
    TSSedanProductionLine.prototype.setAirBags = function (howMany) {
        this.sedanCar.airBags = howMany;
        return this;
    };
    TSSedanProductionLine.prototype.setColor = function (color) {
        this.sedanCar.color = color;
        return this;
    };
    TSSedanProductionLine.prototype.setEdition = function (edition) {
        this.sedanCar.edition = edition;
        return this;
    };
    TSSedanProductionLine.prototype.setInternalModel = function (model) {
        this.internalModel = model;
    };
    TSSedanProductionLine.prototype.setModel = function () {
        this.sedanCar.model = 'sedan';
    };
    //We can use a factory here to determine which model use
    TSSedanProductionLine.prototype.resetProductionLine = function () {
        this.sedanCar =
            this.internalModel === 'mastodon'
                ? new TSMastodonCar()
                : new TSRhinoCar();
    };
    TSSedanProductionLine.prototype.build = function () {
        this.setModel();
        var sedanCar = this.sedanCar;
        this.resetProductionLine();
        return sedanCar;
    };
    return TSSedanProductionLine;
}());
var TSHatchbackProductionLine = /** @class */ (function () {
    function TSHatchbackProductionLine(_a) {
        var model = _a.model;
        this.setInternalModel(model);
        this.resetProductionLine();
    }
    TSHatchbackProductionLine.prototype.setAirBags = function (howMany) {
        this.hatchbackCar.airBags = howMany;
        return this;
    };
    TSHatchbackProductionLine.prototype.setColor = function (color) {
        this.hatchbackCar.color = color;
        return this;
    };
    TSHatchbackProductionLine.prototype.setEdition = function (edition) {
        this.hatchbackCar.edition = edition;
        return this;
    };
    TSHatchbackProductionLine.prototype.setInternalModel = function (model) {
        this.internalModel = model;
    };
    TSHatchbackProductionLine.prototype.setModel = function () {
        this.hatchbackCar.model = 'hatchback';
    };
    //We can use a factory here to determine which model use
    TSHatchbackProductionLine.prototype.resetProductionLine = function () {
        this.hatchbackCar =
            this.internalModel === 'mastodon'
                ? new TSMastodonCar()
                : new TSRhinoCar();
    };
    TSHatchbackProductionLine.prototype.build = function () {
        this.setModel();
        var sedanCar = this.hatchbackCar;
        this.resetProductionLine();
        return sedanCar;
    };
    return TSHatchbackProductionLine;
}());
var TSCar = /** @class */ (function () {
    function TSCar() {
        this._airBags = 2;
        this._color = 'black';
    }
    Object.defineProperty(TSCar.prototype, "airBags", {
        set: function (howMany) {
            this._airBags = howMany;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TSCar.prototype, "color", {
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TSCar.prototype, "edition", {
        set: function (edition) {
            this._edition = edition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TSCar.prototype, "model", {
        set: function (model) {
            this._model = model;
        },
        enumerable: false,
        configurable: true
    });
    return TSCar;
}());
var TSMastodonCar = /** @class */ (function (_super) {
    __extends(TSMastodonCar, _super);
    function TSMastodonCar() {
        return _super.call(this) || this;
    }
    return TSMastodonCar;
}(TSCar));
var TSRhinoCar = /** @class */ (function (_super) {
    __extends(TSRhinoCar, _super);
    function TSRhinoCar() {
        return _super.call(this) || this;
    }
    return TSRhinoCar;
}(TSCar));
/**STEP 4 */
var TSDirector = /** @class */ (function () {
    function TSDirector() {
    }
    TSDirector.prototype.setProductionLine = function (productionLine) {
        this.productionLine = productionLine;
    };
    TSDirector.prototype.constructCVTEdition = function () {
        this.productionLine
            .setAirBags(4)
            .setColor('blue')
            .setEdition('CVT');
    };
    TSDirector.prototype.constructSignatureEdition = function () {
        this.productionLine
            .setAirBags(8)
            .setColor('gray')
            .setEdition('Signature');
    };
    TSDirector.prototype.constructSportEdition = function () {
        this.productionLine
            .setAirBags(2)
            .setColor('red')
            .setEdition('Sport');
    };
    return TSDirector;
}());
function appBuilderTS(director) {
    var mastodonSedanProductLine = new TSSedanProductionLine({
        model: 'mastodon',
    });
    var rhinoHatchbackProductLine = new TSHatchbackProductionLine({
        model: 'rhino',
    });
    director.setProductionLine(mastodonSedanProductLine);
    director.constructCVTEdition();
    var mastodonSedanCVT = mastodonSedanProductLine.build();
    console.log(mastodonSedanCVT);
    director.constructSignatureEdition();
    var mastodonSedanSignature = mastodonSedanProductLine.build();
    console.log(mastodonSedanSignature);
    director.setProductionLine(rhinoHatchbackProductLine);
    director.constructSportEdition();
    var rhinoHatchbackSport = rhinoHatchbackProductLine.build();
    console.log(rhinoHatchbackSport);
}
appBuilderTS(new TSDirector());
