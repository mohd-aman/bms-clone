const express = require("express");

const app = express();
const PORT = 8081

const cors = require('cors')
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoute');
const movieRoute = require('./routes/movieRoute');
const theatreRoute = require('./routes/theatreRoute');
const bookingRoute = require('./routes/bookingRoute')

app.use(express.static('build'));
app.use(cors());
app.use(express.json());
app.use('/api/users',userRoute);
app.use('/api/movies',movieRoute);
app.use('/api/theatres',theatreRoute);
app.use('/api/bookings',bookingRoute);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})