var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Message = new Schema({
    user_id: String
    , content: String
    , updated_at: Date
});
mongoose.model('Messange', Messange);
mongoose.connect('mongodb://localhost/express-messange');