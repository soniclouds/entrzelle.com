// DEPENDENCIES
const   express     = require('express'),
        cors        = require('cors'),
        mongoose    = require('mongoose');

require('dotenv').config();

// SERVER SETUP
const   app     = express(),
        port    = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DATABASE
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});


// ROUTES
// const   exerciseRouter  = require('./routes/exerciseRoute'),
//         userRouter      = require('./routes/userRoute');

// app.use('/exercises', exerciseRouter);
// app.use('/users', userRouter);


// SERVER START
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


// additional debug details
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});