define([
    'jquery',
    'handlebars',
    'lib/convert',
    'text!templates/results.tpl'
], function ($, Handlebars, convert, params, resultsTPL) {
    'use strict';
    return function (e) {
        e.preventDefault();
        var form_out = $(e.currentTarget).serializeArray();
        var form_values = {};
        for (var i = 0; i < form_out.length; i++) {

            if(form_values[form_out[i].name]) {
                form_values[form_out[i].name].push(form_out[i].value);
            } else {
                form_values[form_out[i].name] = [];
                form_values[form_out[i].name].push(form_out[i].value);
            }
        }
        console.log(form_values)
    }

});
