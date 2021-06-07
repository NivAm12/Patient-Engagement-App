import { Schema, model } from "mongoose";


// create the schame:
const optionSchema = new Schema({
    key: {
        type: String,
        unique: true
    },
    options: [{
        text: String,
        icon: {
            data: Buffer,
            contentType: String
        }
    }]
});

// create the model:
const Option = new model("Option", optionSchema);

export default Option;