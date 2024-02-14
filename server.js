const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config({path: './config/config.env'})
connectDB()
const transactions = require('./routes/transactions')

const app = express()
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        const filePath = path.resolve(__dirname, 'client', 'build', 'index.html');
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error("Error sending file:", err);
                res
                    .status(500)
                    .send("Internal Server Error");
            }
        });
    });

    console.log("__dirname:", __dirname);
    console.log(
        "Resolved Path:",
        path.resolve('./', 'client', 'build', 'index.html')
    );

}

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running on in ${process.env.NODE_ENV} mode on PORT ${PORT}`.blue.bold)
)

//"dev": "concurrently \"npm run server\" \"npm run client\""