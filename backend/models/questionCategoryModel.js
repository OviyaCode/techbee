const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionCategorySchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true 
    },
    name: {
        type: String,
        required: [true, 'Please enter question category name'],
        unique: true
    },
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'questions',

        }
    ],
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('questionCategory', QuestionCategorySchema);
