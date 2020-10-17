const climas = {
    climas: [{
        city: 'Mendoza',
        coord: {
            lat: -32.882601,
            lng: -68.863457
        },
        weather: {
            description: 'Parcialmente Nublado',
            iconURL: 'http://localhost:4000/public/img/parcialmenteNublado.png'
        }
        ,
        main: {
            temp: 22,   
            feels_like: 23,
            temp_min: 25,
            temp_max: 15,
            pressure: 1014,
            humidity: 70
        }
    },
    {
        city: 'Buenos Aires',
        coord: {
            lat: -34.6154611,
            lng: -58.5733849
        },
        weather: {
            description: 'Nublado',
            iconURL: 'http://localhost:4000/public/img/nublado.png'
        }
        ,
        main: {
            temp: 27,   
            feels_like: 25,
            temp_min: 10,
            temp_max: 35,
            pressure: 1019,
            humidity: 95
        }
    },{
        city: 'Río de Janeiro',
        coord: {
            lat: -22.9132525,
            lng: -43.7261833
        },
        weather: {
            description: 'Fuertes tormentas',
            iconURL: 'http://localhost:4000/public/img/tormentoso.png'
        }
        ,
        main: {
            temp: 10,   
            feels_like: 12,
            temp_min: 08,
            temp_max: 20,
            pressure: 1025,
            humidity: 73
        }
    },{
        city: 'Puerto Madryn',
        coord: {
            lat: -42.6854183,
            lng: -65.3040942
        },
        weather: {
            description: 'Lluvias leves',
            iconURL: 'http://localhost:4000/public/img/pocaLluvia.png'
        }
        ,
        main: {
            temp: 16,   
            feels_like: 18,
            temp_min: 13,
            temp_max: 21,
            pressure: 1029,
            humidity: 84
        }
    },{
        city: 'Ushuaia',
        coord: {
            lat: -54.8067441,
            lng: -68.372843
        },
        weather: {
            description: 'Nevadas',
            iconURL: 'http://localhost:4000/public/img/nevado.png'
        }
        ,
        main: {
            temp: 28,   
            feels_like: 27,
            temp_min: 20,
            temp_max: 35,
            pressure: 1023,
            humidity: 79
        }
    },{
        city: 'Salta',
        coord: {
            lat: -24.7959127,
            lng: -65.5006695
        },
        weather: {
            description: 'Parcialmente Nublado',
            iconURL: 'http://localhost:4000/public/img/parcialmenteNublado.png'
        }
        ,
        main: {
            temp: 35,   
            feels_like: 36,
            temp_min: 20,
            temp_max: 37,
            pressure: 1023,
            humidity: 70
        }
    },{
        city: 'Lima',
        coord: {
            lat: -12.0551637,
            lng: -77.0802424
        },
        weather: {
            description: 'Despejado',
            iconURL: 'http://localhost:4000/public/img/arcoiris.png'
        }
        ,
        main: {
            temp: 26,   
            feels_like: 28,
            temp_min: 20,
            temp_max: 32,
            pressure: 1011,
            humidity: 85
        }
    },{
        city: 'La Paz',
        coord: {
            lat: -16.5205361,
            lng: -68.1941186
        },
        weather: {
            description: 'Soleado',
            iconURL: 'http://localhost:4000/public/img/soleado.png'
        }
        ,
        main: {
            temp: 27,   
            feels_like: 25,
            temp_min: 17,
            temp_max: 28,
            pressure: 1015,
            humidity: 76
        }
    }]     
}

module.exports = climas;