/**
 *  How implement Prototype?
 *
 *  1. Declare a base class/interface prototype that contains clone methods
 *  2. Create concrete products who inherits/implements from prototype class
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
var CarTS = /** @class */ (function () {
    function CarTS(_a) {
        var edition = _a.edition, model = _a.model, airBags = _a.airBags, color = _a.color;
        this._edition = edition || 'default';
        this._model = model || '';
        this._airBags = airBags || 0;
        this._color = color || 'default';
    }
    Object.defineProperty(CarTS.prototype, "airBags", {
        get: function () {
            return this._airBags;
        },
        set: function (howMany) {
            this._airBags = howMany;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarTS.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarTS.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarTS.prototype, "edition", {
        get: function () {
            return this._edition;
        },
        set: function (edition) {
            this._edition = edition;
        },
        enumerable: false,
        configurable: true
    });
    return CarTS;
}());
var MastodonCarTS = /** @class */ (function (_super) {
    __extends(MastodonCarTS, _super);
    function MastodonCarTS(carToClone) {
        return _super.call(this, {
            edition: carToClone === null || carToClone === void 0 ? void 0 : carToClone.edition,
            color: carToClone === null || carToClone === void 0 ? void 0 : carToClone.color,
            model: carToClone === null || carToClone === void 0 ? void 0 : carToClone.model,
            airBags: carToClone === null || carToClone === void 0 ? void 0 : carToClone.airBags
        }) || this;
    }
    /**STEP 2 */
    MastodonCarTS.prototype.clone = function () {
        return new MastodonCarTS(this);
    };
    ;
    return MastodonCarTS;
}(CarTS));
var OriginalCarTS = new MastodonCarTS();
console.log('Creacion de Original Car: ' + OriginalCarTS);
OriginalCarTS.edition = 'cvt';
OriginalCarTS.model = 'sedan';
OriginalCarTS.airBags = 4;
OriginalCarTS.color = 'red';
console.log('🔵 Original Car:');
console.log(OriginalCarTS);
console.log('Clonar Objeto');
var clonOriginalCarTS = OriginalCarTS.clone();
console.log('🔵 CLON Original Car:');
console.log(clonOriginalCarTS);
//Modificación
clonOriginalCarTS.model = 'x2';
clonOriginalCarTS.color = 'blue';
console.log('🔵 CLON Original Car modificado:');
console.log(clonOriginalCarTS);
