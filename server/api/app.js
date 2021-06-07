import express from 'express';
import patient from './routes/patient';
import patientOptions from './routes/patientOptions';
import cors from "cors";
import { config } from "dotenv";


// app settings:
const app = express();
config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({origin: 'localhost:5000', credentials:true }));

// routes:
app.use('/api/patient', patient);
app.use('/api/patientOptions', patientOptions);

// run the server:
app.listen(port, () => {
    console.log(`Server Running at ${port}`);
  });