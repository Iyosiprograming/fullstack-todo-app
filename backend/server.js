const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRouter = require('./router/taskrouter');
const authRouter = require('./router/authrouter');
const Port = process.env.Port || 5000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/task', taskRouter);
app.use('/api/auth', authRouter);


app.listen(Port, () => {
  console.log(`PORT is running on http://localhost:${Port}`);
});