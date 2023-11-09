
const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
electronics_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("electronics", electronicsSchema)