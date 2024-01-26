const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 8081;


const dataDir = path.join(__dirname, 'tmp', 'data');

// Create data directory if not exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Create 30 files with random content (around 100MB each)
const fileCreationPromises = [];

for (let i = 1; i <= 30; i++) {
  const fileName = path.join(dataDir, `${i}.txt`);
  const randomContent = generateRandomContent(100 * 1024 * 1024); // 100MB

  fileCreationPromises.push(fs.promises.writeFile(fileName, randomContent));
}

Promise.all(fileCreationPromises)
  .then(() => {
    console.log('Files created successfully.');
  })
  .catch((err) => {
    console.error('Error creating files:', err);
  });

app.get('/data', (req, res) => {
  const fileName = req.query.n;
  const lineNumber = req.query.m;

  if (!fileName) {
    return res.status(400).send('File name is required');
  }

  const filePath = path.join(dataDir, `${fileName}.txt`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('File not found');
  }

  if (lineNumber) {
    const readStream = fs.createReadStream(filePath);
    readStream.on('error', (err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });

    readStream.pipe(res);
  } else {
    const readStream = fs.createReadStream(filePath, 'utf8');
    readStream.on('error', (err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });

    readStream.pipe(res);
  }
});

function generateRandomContent(size) {
  return crypto.randomBytes(size).toString('hex');
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
