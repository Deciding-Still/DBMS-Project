const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const userRouter = require('./routes/Users');
app.use('/users', userRouter);

const branchRouter = require('./routes/Branch');
app.use('/branches', branchRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001')
  });
});
