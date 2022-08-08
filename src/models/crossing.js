const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CrossingSchema = new mongoose.Schema({
    steps:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
});

CrossingSchema.plugin(mongoosePaginate);
mongoose.model('crossing', CrossingSchema,'crossing');
module.exports = CrossingSchema;