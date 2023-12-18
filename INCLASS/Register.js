const express = require('express');
const app = express();


let patients = [];


app.use(express.json());

// This is the endpoint to register patients
app.post('/register', (req, res) => {
  const { patientID, surname, otherNames, gender, phoneNumber, emergencyName, contact, relationship } = req.body;

  // if patient exist
  const patientExist = patients.find((patient) => patient.patientID === patientID);
  if (patientExist) {
    return res.status(400).json({ error: 'Patient already exists' });
  }

  // Creating a new patient who doesn't exist
  const newPatient = {
    staffId,
    surname,
    otherNames,
    gender,
    tel,
    emergencyName
  };

  officers.push(newPatient);

  
  res.status(201).json({ message: ' registeration successfully' });
});

// A server must listen
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});