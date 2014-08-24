define([
    'jquery',
    'handlebars',
    'lib/convert',
    'text!templates/menu.tpl'
], function ($, Handlebars, convert, menuTPL) {
    'use strict';

    Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {
        var operators, result;
        if (arguments.length < 3) {
            throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
        }

        if (options === undefined) {
            options = rvalue;
            rvalue = operator;
            operator = "===";
        }

        operators = {
            '==': function (l, r) { return l == r; },
            '===': function (l, r) { return l === r; },
            '!=': function (l, r) { return l != r; },
            '!==': function (l, r) { return l !== r; },
            '<': function (l, r) { return l < r; },
            '>': function (l, r) { return l > r; },
            '<=': function (l, r) { return l <= r; },
            '>=': function (l, r) { return l >= r; },
            'typeof': function (l, r) { return typeof l == r; }
        };

        if (!operators[operator]) {
            throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
        }

        result = operators[operator](lvalue, rvalue);

        if (result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
    Handlebars.registerHelper('indexloop', function(arrayOne, arrayTwo, options) {
        var ret = '';
        for (var i = 0; i < arrayOne.length; i++) {
            ret = ret + options.fn({
                value: arrayOne[i],
                label: arrayTwo[i]
            });
        };

        return ret;
    });

    return {
        url: 'http://www.carqueryapi.com/api/0.3/?callback=?',
        cmd: ['getYears', 'getMakes', 'getModels', 'getTrims', 'getModel'],
        params: {
            fields: [
                {
                    values: ['Coupe', 'Sedan', 'SUV', 'Pickup', 'Crossover', 'Minivan', 'Hatchback'],
                    labels: ['Coupe', 'Sedan', 'SUV', 'Pickup', 'Crossover', 'Minivan', 'Hatchback'],
                    type: 'checkbox',
                    input: 'check',
                    label: 'Body Style',
                    name: 'body'
                },
                {
                    values: [],
                    input: 'text',
                    type: 'number',
                    label: 'Doors',
                    name: 'doors'
                },
                {
                    values: ['Front', 'Rear', 'AWD', '4WD'],
                    labels: ['Front', 'Rear', 'AWD', '4WD'],
                    type: 'checkbox',
                    input: 'check',
                    label: 'Drive Train',
                    name: 'drive'
                },
                {
                    values: ['Front', 'Middle', 'Rear'],
                    labels: ['Front', 'Middle', 'Rear'],
                    type: 'checkbox',
                    input: 'check',
                    label: 'Engine Position',
                    name: 'engine_position'
                },
                {
                    values: ['V', 'in-line', 'W', 'Flat'],
                    labels: ['V', 'in-line', 'W', 'Flat'],
                    type: 'checkbox',
                    input: 'check',
                    label: 'Engine Type',
                    name: 'engine_type'
                },
                {
                    values: ['Gasoline', 'Diesel', 'Electric'],
                    labels: ['Gasoline', 'Diesel', 'Electric'],
                    type: 'checkbox',
                    input: 'check',
                    label: 'Fuel Type',
                    name: 'fuel_type'
                },
                {
                    values: ['min_cylinders', 'max_cylinders'],
                    min: 0,
                    max: 20,
                    input: 'slider',
                    type: 'range',
                    label: 'Cylinders',
                    name: 'cylinders'
                },
                {
                    values: ['min_year', 'max_year'],
                    input: 'slider',
                    type: 'range',
                    min: 1941,
                    max: new Date().getFullYear() + 1,
                    label: 'Years',
                    name: 'years'
                },
                {
                    values: [],
                    min: 1941,
                    input: 'slider',
                    max: new Date().getFullYear() + 1,
                    type: 'range',
                    label: 'Year',
                    name: 'year'
                },
                {
                    values: [],
                    input: 'text',
                    type: 'number',
                    label: 'Seats',
                    name: 'seats'
                },
                {
                    values: ['1', '0'],
                    labels: ['Yes', 'No'],
                    type: 'radio',
                    input: 'check',
                    label: 'Sold in USA',
                    name: 'sold_in_us'
                },
                {
                    values: [],
                    input: 'text',
                    type: 'text',
                    label: 'Keywords',
                    name: 'keyword'
                }
            ]
        },
        buildNavigation: function () {
            var template = Handlebars.compile(menuTPL);
            console.log(this.params);
            $('.finder_options').html(template(this.params));
        }
    }


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

