"use strict";
;
var InternalDataService = (function () {
    function InternalDataService() {
    }
    Object.defineProperty(InternalDataService.prototype, "Data", {
        get: function () {
            return this._setup;
        },
        set: function (setupObj) {
            this._setup = setupObj;
        },
        enumerable: true,
        configurable: true
    });
    return InternalDataService;
}());
exports.InternalDataService = InternalDataService;
//# sourceMappingURL=internalDataservice.js.map