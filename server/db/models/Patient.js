import mongoose from "mongoose";
const { Schema, model } = mongoose;
import Joi from "joi";

// create the schema:
const patientSchema = new Schema({
    key: {
        type: Number,
        unique: true,
    },
    gender: {
        type: String,
    },
    ageGroup: {
        type: String,
    },
    language: {
        type: String,
    },
    procedure: {
        type: String,
    }
});

// create the model:
const Patient = new model("Patient", patientSchema);

// model validation:
const patientValidation = (patientToValidate) => {
    const joiSchema = Joi.object({
        gender: Joi.string().required(),
        ageGroup: Joi.string().required(),
        language: Joi.string().required(),
        procedure: Joi.string().required()
    });

    return joiSchema.validate(patientToValidate);
}
export {Patient, patientValidation};