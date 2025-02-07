require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.get('/', async (req, res) => {
  console.log('Request Headers:', req.headers);

  // Log additional meta-data about the request
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.originalUrl);
  console.log('Protocol:', req.protocol);
  console.log('IP Address:', req.ip);
  console.log('Query Parameters:', req.query);
  console.log('Timestamp:', new Date().toISOString());
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(process.env.PORT, () => {
  console.log(`Hello World Application is running on port ${process.env.PORT}`)
})
