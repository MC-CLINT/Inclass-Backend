const express = require('express');
const app = express();


let patientInfo = [];

app.use(express.json());


app.post('/submit-patient-info', (req, res) => {
  const { staffId, bloodPressure, temperature, pulse, spo2 } = req.body;

 
  const newpatientInfo = {
    staffId,
    bloodPressure,
    temperature,
    pulse,
    spo2
  };

  patientInfo.push(newpatientInfo);

 
  res.status(201).json({ message: 'patient info submitted' });
});

//Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});