define([], function () {
    'use strict';

    return {
        psToHp: function (ps) {
            return (ps / 1.01387).toFixed(2);
        },
        hpToPs: function (hp) {
            return (hp * 1.01387).toFixed(2);
        },
        kmToMiles: function (km) {
            return (km / 1.609347).toFixed(2);
        },
        milesToKm: function (miles) {
            return (miles * 1.609347).toFixed(2);
        },
        litersToGallons: function (liters) {
            return (liters / 3.785412).toFixed(2);
        },
        gallonsToLiters: function (gallons) {
            return (gallons * 3.785412).toFixed(2);
        },
        kgTolbs: function (kg) {
            return (kg / 0.4535924).toFixed(2);
        },
        lbsToKg: function (lbs) {
            return (lbs * 0.4535924).toFixed(2);
        },
        nmToPoundFeet: function () {
            return (nm / 1.355818).toFixed(2);
        },
        poundFeetToNm: function () {
            return (ft * 1.355818).toFixed(2);
        }
    };
});
