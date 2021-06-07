import { Schema, model } from "mongoose";


// create the schema:
const patientSchema = new Schema({
    key: {
        type: Number,
        unique: true
    },
    gender: {
        type: String
    },
    ageGroup: {
        type: String
    },
    language: {
        type: String
    },
    procedure: {
        type: String
    }
});

// create the model:
const Patient = new model("Patient", patientSchema);

export default Patient;