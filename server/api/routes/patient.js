import {Router} from "express";
import DbHandler from '../../db/DbHandler';
const router = Router();

// HTTP REQUESTS:
router.get('/', async(req, res) => {
    try{
        // find all patients:
        const patients = await DbHandler.findPatient();
        res.send(patients);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong...");
    }
});

router.get('/:patientId', async(req, res) => {
    try{
        // find patient:
        const patientToFind = await DbHandler.findPatient(req.params.patientId)[0];

        if(!patientToFind) res.status(404).send("The patient does not exists in our database");

        res.send(patientToFind);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong...");
    }
});

router.post('/', async(req, res) => {
    try{
        // create or update a patient:
        const patientToCreate = await DbHandler.insertPatientAndReturn(req.body);

        res.send(patientToCreate);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong...");
    }
});

