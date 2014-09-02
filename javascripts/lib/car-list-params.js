define([], function () {
    'use strict';

    return {
        url: 'http://www.carqueryapi.com/api/0.3/?callback=?',
        short_list: 'full_results=0',
        cmd: ['getYears', 'getMakes', 'getModels', 'getTrims', 'getModel'],
        fields: [
            {
                values: ['Coupe', 'Sedan', 'SUV', 'Pickup', 'Crossover', 'Minivan', 'Hatchback', 'Van', 'Convertible'],
                labels: ['Coupe', 'Sedan', 'SUV', 'Pickup', 'Crossover', 'Minivan', 'Hatchback', 'Van', 'Convertible'],
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
                labels: ['Min', 'Max'],
                input: 'text',
                type: 'number',
                label: 'Cylinders',
                name: 'cylinders'
            },
            {
                values: ['min_year', 'max_year'],
                labels: ['Min', 'Max'],
                input: 'text',
                type: 'number',
                min: 1941,
                max: new Date().getFullYear() + 1,
                label: 'Years',
                name: 'years'
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
        ],
        output: [
            {
                name: 'model_id',
                label: '',
            },
            {
                name: 'model_make_id',
                label: '',
            },
            {
                name: 'model_name',
                label: '',
            },
            {
                name: 'model_trim',
                label: '',
            },
            {
                name: 'model_year',
                label: '',
            },
            {
                name: 'model_body',
                label: '',
            },
            {
                name: 'model_engine_position',
                label: '',
            },
            {
                name: 'model_engine_cc',
                label: '',
            },
            {
                name: 'model_engine_cyl',
                label: '',
            },
            {
                name: 'model_engine_type',
                label: '',
            },
            {
                name: 'model_engine_valves_per_cyl',
                label: '',
            },
            {
                name: 'model_engine_power_ps',
                label: '',
                convert: 'psToHp',
            },
            {
                name: 'model_engine_power_rpm',
                label: '',
            },
            {
                name: 'model_engine_torque_nm',
                lable: '',
                convert: 'nmToPoundFeet',
            },
            {
                name: 'model_engine_torque_rpm',
                label: '',
            },
            {
                name: 'model_engine_bore_mm',
                label: '',
            },
            {
                name: 'model_engine_stroke_mm',
                label: '',
            },
            {
                name: 'model_engine_compression',
                label: '',
            },
            {
                name: 'model_engine_fuel',
                label: '',
            },
            {
                name: 'model_top_speed_kph',
                label: '',
            },
            {
                name: 'model_0_to_100_kph',
                label: '',
            },
            {
                name: 'model_drive',
                label: '',
            },
            {
                name: 'model_transmission_type',
                label: '',
            },
            {
                name: 'model_seats',
                label: '',
            },
            {
                name: 'model_doors',
                label: '',
            },
            {
                name: 'model_weight_kg',
                label: '',
                convert: 'kgToLbs',
            },
            {
                name: 'model_length_mm',
                label: '',
            },
            {
                name: 'model_width_mm',
                label: '',
            },
            {
                name: 'model_height_mm',
                label: '',
            },
            {
                name: 'model_wheelbase_mm',
                label: '',
            },
            {
                name: 'model_lkm_hwy',
                label: '',
            },
            {
                name: 'model_lkm_mixed',
                label: '',
            },
            {
                name: 'model_lkm_city',
                label: '',
            },
            {
                name: 'model_fuel_cap_l',
                label: '',
            },
            {
                name: 'model_sold_in_us',
                label: '',
            },
            {
                name: 'model_co2',
                label: '',
            },
            {
                name: 'model_make_display',
                label: '',
            },
            {
                name: 'make_display',
                label: '',
            },
            {
                name: 'make_country',
                label: '',
            },
        ]
    };
});
