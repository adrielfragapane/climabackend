const mongoose = require('mongoose');
const { Schema } = mongoose;

const WeatherSchema = new Schema({

    city: {type: String, required: true},
    coord: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true},
    },
    weather: {
        description: {type: String, required: true},
        iconURL: {type: String, required: true},
    },
    main: {
        temp: {type: Number, required: true},  
        feels_like: {type: Number, required: true},
        temp_min: {type: Number, required: true},
        temp_max: {type: Number, required: true},
        pressure: {type: Number, required: true},
        humidity: {type: Number, required: true},
    }
});

module.exports = mongoose.model('Weather',WeatherSchema);