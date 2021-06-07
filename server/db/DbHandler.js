import {connect, connection} from 'mongoose';
import Option from './models/Option';
import Patient from './models/Patient';
import uniqueId from 'uniqid';


class DbHandler{

    constructor(){
        // SINGLETON:
        if(!DbHandler.instance){
            this.connectToDb();
            DbHandler.instance = this;
        }

        return DbHandler.instance;
    }

    async findOption(optionKey = null){
        const option = await Option.find({key: key});

        return option;
    }

    async findPatient(patientKey=null){
        const patientToFind = await Patient.find({key: patientKey});

        return patientToFind;
    }

    async insertPatientAndReturn(patientToInsert) {
        // unique key for each patient:
        const patientKey = uniqueId();

        // create the new patient:
        let newPatientToAdd = new Patient({
            key: patientKey,
            gender: patientToInsert.gender,
            ageGroup: patientToInsert.ageGroup,
            language: patientToInsert.language,
            procedure: patientToInsert.procedure
        });

        // save and return the newly added patient, if the patient already exists, then update his info:
        newPatientToAdd = await Patient.findOneAndUpdate({key: patientKey}, newPatientToAdd, {upsert: true, new: true});
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