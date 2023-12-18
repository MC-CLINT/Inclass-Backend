const express = require('express');
const app = express();

let encounters = [];

app.use(express.json());

app.post('/start-service', (req, res) => {
  const { ID, date, time, encounter } = req.body;

  const encounterExist = encounters.find(
    (encounter) => encounter.ID === ID
  );
  if (encounterExist) {
    return res.status(400).json({ error: 'Encounter already exists' });
  }

  const encounterHistory = {
    ID,
    date,
    time,
    encounter,
  };

  encounters.push(encounterHistory);

  res.status(201).json({ message: 'Encounter started successfully' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});