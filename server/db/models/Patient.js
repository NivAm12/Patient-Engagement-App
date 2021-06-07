import { Schema, model } from "mongoose";


// create the schema:
const patientSchema = new Schema({
    key: {
        type: Number,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    ageGroup: {
        begin:{
            type: Number
        },
        end: {
            type: Number
        },
        required: true
    },
    language: {
        type: String,
        required: true
    },
    procedure: {
        type: String,
        required: true
    }
});

// create the model:
const Patient = new model("Patient", patientSchema);

export default Patient;