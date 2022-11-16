const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please enter a name']
    },
    amount: {
        type: Number,
        required: [true, 'Please enter a number']
    },
    createdAt: {
        type:Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)