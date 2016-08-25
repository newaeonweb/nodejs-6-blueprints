// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StoreSchema = new Schema({
    distance: Number,
    store: {
        id: { type: String},
        name: {type: String},
        brandName: {type: String},
        phoneNumber: {type: String},
        market: {type: String},
        operatingStatus: {
            operating: {type: Boolean},
            openDate: {type: String},
            closeDate: {type: String},
            status: {type: String}
        },
        coordinates: {type: [Number], index: '2dsphere'}
    }
});

mongoose.model('Store', StoreSchema);
