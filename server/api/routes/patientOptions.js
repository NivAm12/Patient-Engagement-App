import {Router} from "express";
import DbHandler from '../../db/DbHandler.js';
import fs from "fs";
const router = Router();

// HTTP REQUESTS:

router.get('/', async(req, res) => {
    try{
        // if optionKey is null it will return all of the options:
        const optionToFind = await DbHandler.findOption();
        res.send(optionToFind);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong..");
    }
});

router.get('/:optionKey', async(req, res) => {
    try{
        // get the option from the db:
        const optionToFind = await DbHandler.findOption({key: req.params.optionKey});

        if(!optionToFind[0]) res.status(404).send("No such option to choose");

        res.send(optionToFind);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong..");
    }
});


export default router;