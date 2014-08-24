(function () {
    'use strict';
    require.config({
        baseUrl: 'javascripts/',
        paths: {
            "jquery": "vendor/jquery.min",
            "handlebars": "vendor/handlebars",
            "text": "vendor/text"
        },
        shim: {
            jquery: {
                exports: '$',
            },
            handlebars: {
                exports: 'Handlebars',
            },
        },
    });

    require([
        'jquery',
        'lib/car-finder'
    ], function ($, carFinder) {
        carFinder.buildNavigation(); // build navigation options
    });

}());
