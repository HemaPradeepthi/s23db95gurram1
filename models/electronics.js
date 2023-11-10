
const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
Gadget: String,
Price: String,
Storage: Number
})
module.exports = mongoose.model("electronics", electronicsSchema)