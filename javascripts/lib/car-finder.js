(function (){
    var url = 'http://www.carqueryapi.com/api/0.3/?callback=?';
    var clUrl = 'http://{location}.craigslist.org/search/cta?format=rss&';
    var cmd = ['getYears', 'getMakes', 'getModels', 'getTrims', 'getModel'];
    var convert = {
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
    var params = {
        body: {
            values: ['Coupe', 'Sedan', 'SUV', 'Pickup', 'Crossover', 'Minivan', 'Hatchback'],
            name: 'Body Style'
        },
        doors: {
            values: [],
            type: 'int',
            name: 'Doors'
        },
        drive: {
            values: ['Front', 'Rear', 'AWD', '4WD', 'Other'],
            type: 'checkbox',
            name: 'Drive Train'
        },
        engine_position: {
            values: ['Front', 'Middle', 'Rear', 'Other'],
            type: 'checkbox',
            name: 'Engine Position'
        },
        engine_type: {
            values: ['V', 'in-line', 'W', 'Flat', 'Other'],
            type: 'checkbox',
            name: 'Engine Type'
        },
        fuel_type: {
            values: ['Gasoline', 'Diesel', 'Electric', 'Other'],
            type: 'checkbox',
            name: 'Fuel Type'
        },
        cylinders: {
            values: ['min_cylinders', 'max_cylinders'],
            type: 'int',
            name: 'Cylinders'
        },
        years: {
            values: ['min_year', 'max_year'],
            type: 'int',
            min: 1941,
            name: 'Years'
        },
        year: {
            values: [],
            min: 1941,
            type: 'int',
            name: 'Year'
        },
        seats: {
            values: [],
            type: 'int',
            name: 'Seats'
        },
        sold_in_us: {
            values: [0, 1],
            type: 'radio',
            name: 'Sold in USA'
        },
        keyword: {
            values: [],
            type: 'text',
            name: 'Keywords'
        }
    };

});

//full_results=[1 by default. Set to 0 to include only basic year / make /model / trim data (improves load times)]
//keyword=[Keyword search. Searches year, make, model, and trim values]
//make=[Make ID]
//min_lkm_hwy=[Maximum fuel efficiency (highway, l/100km)]
//min_power=[Minimum engine power (PS)]
//min_top_speed=[Minimum Top Speed (km/h)]
//min_torque=[Minimum Torque (nm)]
//min_weight=[Minimum Weight (kg)]
//max_lkm_hwy=[Minimum fuel efficiency (highway, l/100km)]
//max_power=[Minimum engine power (HP)]
//max_top_speed=[Maximum Top Speed (km/h)]
//max_torque=[Maximum Torque (nm)]
//max_weight=[Maximum Weight (kg)]
//model=[Model Name]

