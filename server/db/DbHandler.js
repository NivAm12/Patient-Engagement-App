import mongoose from "mongoose";
import Option from './models/Option.js';
import {Patient, patientValidation} from './models/Patient.js';
import uniqueId from 'uniqid';
const {connect, connection} = mongoose;


class DbHandler{

    constructor(){
        // SINGLETON:
        if(!DbHandler.instance){
            this.connectToDb();
            DbHandler.instance = this;
        }

        return DbHandler.instance;
    }

    async findOption(optionKey = {}){
        const option = await Option.find(optionKey);
        return option;
    }

    async findPatient(patientKey = {}){
        const patientToFind = await Patient.find(patientKey);
        return patientToFind;
    }

    async insertPatientAndReturn(patientToInsert) {
        // unique key for each patient:
        const patientKey = uniqueId();
        
        // validate the patient data:
        const patientValidationResult = patientValidation(patientToInsert);
        if(patientValidationResult.error != null) throw patientValidationResult.error;

        // create the new patient:
        let newPatientToAdd = new Patient({
            key: patientKey,
            gender: patientToInsert.gender,
            ageGroup: patientToInsert.ageGroup,
            language: patientToInsert.language,
            procedure: patientToInsert.procedure
        });

        // save and return the newly added patient:
        newPatientToAdd = await newPatientToAdd.save();
        return newPatientToAdd;
    }

    connectToDb(){
        connect("mongodb://localhost:27017/patientEngagement", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
          });
        
          const db = connection;
          db.on("error", console.error.bind(console, "connection error"));
          db.once("open", () => {
            console.log("Database connected");
          });
    }
}

// make sure that the db will only be access from one class:
const dbHandlerInstance = new DbHandler();
Object.freeze(dbHandlerInstance);

export default dbHandlerInstance;