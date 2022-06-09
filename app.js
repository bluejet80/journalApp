'use strict';

const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();

// read and write functions
const pages = JSON.parse(fs.readFileSync('./data/journal_data.json'));

// middleware
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('public'));

// routing

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server!');
});

app.post('/add_journal_page', (req, res) => {
  const newId = pages[pages.length - 1].id + 1;
  const newPage = Object.assign({ id: newId }, req.body);
  pages.push(newPage);

  fs.writeFile('./data/journal_data.json', JSON.stringify(pages), err => {
    res.status(201).json({
      status: 'success',
      data: newPage,
    });
  });
});

module.exports = app;
