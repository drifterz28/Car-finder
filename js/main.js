$(function () {
    'use strict';
    var el_pos;
    $(window).scroll(function() {
        el_pos = el_pos || $('.js-fixed').offset();
        if ($(this).scrollTop() > el_pos.top) {
            $('.js-fixed').addClass('fixed').css({'left': el_pos.left, 'margin-top': 0});
        } else {
            $('.js-fixed').removeClass('fixed').css({'margin-top': '-40px'});
        }
    });
});

var carFinder = angular.module('carFinder', []);
carFinder.controller('FinderOptionsController', function($scope, $http) {

    $scope.formData = {
        "sold_in_us": "1",
        "cmd": "getTrims"
    };
    var req = {
        method: 'GET',
        url: 'http://www.carqueryapi.com/api/0.3/',
        data: ''
    };
    $scope.submit = function() {
        angular.forEach($scope.formData, function(value, key) {
            //this.push(key + ': ' + value);
            if(angular.isObject(value)) {
                //var key_update = key.replace('_obj', '');
                //$scope.formData[key_update] = [];
                var value_array = []
                angular.forEach(value, function (new_value, new_key) {
                    if(new_value) {
                        value_array.push(new_key);
                    }
                });
                $scope.formData[key.replace('_obj', '')] = value_array.join(',');
            }
        });
        console.log($scope.formData)
        $http.jsonp('http://www.carqueryapi.com/api/0.3/?callback=JSON_CALLBACK', {params: $scope.formData}).success(function(data) {
            function compare(a, b) {
                return (a.model_make_id < b.model_make_id) ? -1 : 1;
            }
            data.Trims.sort(compare);
            console.log(data.Trims);
            $scope.cars = data.Trims;
        });
    };
});
