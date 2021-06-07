import { connection, connect } from "mongoose";
import Option from "./models/Option";
import maleIcon from "./icons/gender/male.png";
import femaleIcon from "./icons/gender/female.png";
import youngIcon from "./icons/ageGroup/young.png";
import adultIcon from "./icons/ageGroup/adult.png";
import oldIcon from "./icons/ageGroup/old.png";
import catarcatIcon from "./icons/procedure/catarcat.png";
import catheterIcon from "./icons/procedure/catheter.png";
import colonoscopyIcon from "./icons/procedure/colonoscopy.png";
import precolonoscopyIcon from "./icons/procedure/preColonoscopy.png";
import heartIcon from "./icons/procedure/heart.png";
import pleuralTopIcon from "./icons/procedure/pleuralTop.png";

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
  { text: "Catheterization", icon: catarcatIcon },
  { text: "Colonoscopy", icon: colonoscopyIcon },
  { text: "Pre Colonoscopy", icon: precolonoscopyIcon },
  { text: "Heart Failure", icon: heartIcon },
  { text: "Pleural Top", icon: pleuralTopIcon },
];

const createOption = async(optionsData, key) =>{
    
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
