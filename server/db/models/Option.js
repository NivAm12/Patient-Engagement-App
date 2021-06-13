import mongoose from "mongoose";
const { Schema, model } = mongoose;


// create the schame:
const optionSchema = new Schema({
    key: {
        type: String,
        unique: true
    },
    options: [{
        text: String,
        icon: String
    }]
});

// create the model:
const Option = new model("Option", optionSchema);

export default Option;