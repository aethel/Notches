"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ScoreListItemComponent = (function () {
    function ScoreListItemComponent() {
        this.points = 0;
        this.playerAlias = 0;
    }
    ScoreListItemComponent.prototype.add = function () {
        this.points += 1;
    };
    ScoreListItemComponent.prototype.subtract = function () {
        this.points -= 1;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ScoreListItemComponent.prototype, "points", void 0);
    __decorate([
        core_1.Input('index'), 
        __metadata('design:type', Number)
    ], ScoreListItemComponent.prototype, "playerAlias", void 0);
    ScoreListItemComponent = __decorate([
        core_1.Component({
            selector: 'n-item',
            templateUrl: 'app/scoreList/score-list-item.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ScoreListItemComponent);
    return ScoreListItemComponent;
}());
exports.ScoreListItemComponent = ScoreListItemComponent;
//# sourceMappingURL=score-list-item.component.js.map