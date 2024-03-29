const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const userRouter = require('./routes/Users');
app.use('/users', userRouter);

const productRouter = require('./routes/Products');
app.use('/products', productRouter);

const branchRouter = require('./routes/Branch');
app.use('/branches', branchRouter);

const customerRouter = require('./routes/Customer');
app.use('/customers', customerRouter);

const saleRouter = require('./routes/Sales');
app.use('/sales', saleRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001')
  });
});
