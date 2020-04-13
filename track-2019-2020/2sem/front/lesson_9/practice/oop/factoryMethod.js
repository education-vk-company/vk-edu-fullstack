"use strict";
var Infected = /** @class */ (function () {
    function Infected(name, virus, relatives) {
        this.name = name;
        this.virus = virus;
        this.relatives = relatives;
        this.name = name;
        this.virus = virus;
        this.relatives = relatives;
        // why public?
    }
    Infected.createCovidInfected = function (name, relatives) {
        return new Infected(name, 'covid', relatives);
    };
    Infected.prototype.test = function () {
        return 'positive';
    };
    return Infected;
}());
var covidInfectedMan = Infected.createCovidInfected('Boris J', ['anton', 'liza']);
console.log(covidInfectedMan.test());
