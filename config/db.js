const mongoose = require('mongoose')

const dbConnect = async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected ${conn.connection.host}`.cyan.bold);
    } catch (err) {
        console.log(`${err.message}`.red)
        process.exit(1)
    }
}

module.exports = dbConnect