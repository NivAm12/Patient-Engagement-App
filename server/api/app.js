import express from 'express';
import patient from './routes/patient.js';
import patientOptions from './routes/patientOptions.js';
import { config } from "dotenv";


// app settings:
const app = express();
config();
const port = process.env.PORT || 5000;
app.use(express.json());

// routes:
app.use('/api/patient', patient);
app.use('/api/patientOptions', patientOptions);

// run the server:
app.listen(port, () => {
    console.log(`Server Running at ${port}`);
});