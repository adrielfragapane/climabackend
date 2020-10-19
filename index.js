const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

/********************************************SETTINGS********************************************/

//Configuring the port
app.set('port', process.env.PORT || 4000);

dotenv.config();

/********************************************CONFIGURING DB********************************************/

require('./databaseMongo');  // MongoDB


/********************************************MIDDLEWARES********************************************/

app.use(morgan('dev'));
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: '*'}));

/********************************************GLOBAL VARIABLES********************************************/

//Se indica que el usuario va a ver la ruta "/public" pero en el servidor representa "public"

console.log(__dirname);
app.use('/public', express.static(path.join(__dirname,'/public')));

/********************************************ROUTES********************************************/

app.use('/user',require('./routes/user.routes'));
app.use('/weather',require('./routes/weather.routes'));


const weatherController = require('./controllers/weather.controller');

//Starting the server
const server = app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
  });
  