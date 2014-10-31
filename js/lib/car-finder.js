define([
    'jquery',
    'handlebars',
    'lib/car-list-params',
    'text!templates/menu.tpl',
    'lib/compare-helper'
], function ($, Handlebars, params, menuTPL) {
    'use strict';

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
        buildNavigation: function () {
            var template = Handlebars.compile(menuTPL);
            $('.finder_options').html(template(params));
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

