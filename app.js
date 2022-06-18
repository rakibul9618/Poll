const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const pollController = require('./pollController');

const app = express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
});

mongoose
  .connect('mongodb://localhost:27017/poll')
  .then(() => {
    app.listen('8000', () => {
      console.log('Your sever is live on port 8000');
    });
  })
  .catch((e) => {
    console.log(e);
  });

app.get('/create', pollController.createPollGetController);
app.post('/create', pollController.createPollPostController);

app.get('/polls/:id', pollController.viewPollGetController);
app.get('/polls', pollController.getAllPolls);

