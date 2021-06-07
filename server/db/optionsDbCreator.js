import mongoose from "mongoose";
import fs from "fs";
const {connect, connection} = mongoose;
import Option from "./models/Option.js";

// icons:

const maleIcon = fs.readFileSync( "./icons/gender/male.PNG", {encoding: 'base64'});
const femaleIcon = fs.readFileSync( "./icons/gender/female.PNG", {encoding: 'base64'});
const youngIcon = fs.readFileSync( "./icons/ageGroup/young.PNG", {encoding: 'base64'});
const adultIcon = fs.readFileSync( "./icons/ageGroup/adult.PNG", {encoding: 'base64'});
const oldIcon = fs.readFileSync( "./icons/ageGroup/old.PNG", {encoding: 'base64'});
const cataractIcon = fs.readFileSync( "./icons/procedure/cataract.PNG", {encoding: 'base64'});
const catheterIcon = fs.readFileSync( "./icons/procedure/catheter.PNG", {encoding: 'base64'});
const colonoscopyIcon = fs.readFileSync( "./icons/procedure/colonoscopy.PNG", {encoding: 'base64'});
const precolonoscopyIcon = fs.readFileSync( "./icons/procedure/preColonoscopy.PNG", {encoding: 'base64'});
const heartIcon = fs.readFileSync( "./icons/procedure/heart.PNG", {encoding: 'base64'});
const pleuralTopIcon = fs.readFileSync( "./icons/procedure/pleuralTop.PNG", {encoding: 'base64'});


// data:
const gender = [
  { text: "male", icon: maleIcon },
  { text: "female", icon: femaleIcon },
];
const ageGroup = [
  { text: "20 - 50", icon: youngIcon },
  { text: "50 - 70", icon: adultIcon },
  { text: "70+", icon: oldIcon },
];
const language = [
  { text: "english" },
  { text: "hebrew" },
  { text: "russian" },
  { text: "arabic" },
];
const procedure = [
  { text: "Catheter", icon: catheterIcon },
  { text: "Catheterization", icon: cataractIcon },
  { text: "Colonoscopy", icon: colonoscopyIcon },
  { text: "Pre Colonoscopy", icon: precolonoscopyIcon },
  { text: "Heart Failure", icon: heartIcon },
  { text: "Pleural Top", icon: pleuralTopIcon },
];

const createDb = () => {
  connectToDb();

  // create the option for each type:
  createOption(gender, "gender");
  createOption(ageGroup, "ageGroup");
  createOption(language, "language");
  createOption(procedure, "procedure");
}

const createOption = async(optionsData, optionKey) =>{
  const optionsToInsert = [];

  optionsData.forEach(value => {
    // let iconBuffer = null;

    // if(value.icon) {
    //   // make the image binary:
    //   iconBuffer = value.icon.toString("base64");  
    // }

    optionsToInsert.push({text: value.text, icon: value.icon});  
  });

  // create the option doc:
  const optionDoc = new Option({
    key: optionKey,
    options: optionsToInsert
  });

  await optionDoc.save();
}

const connectToDb = () => {
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
};

createDb();