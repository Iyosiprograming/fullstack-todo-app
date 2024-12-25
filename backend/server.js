const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const taskRouter = require('./router/taskrouter');
const authRouter = require('./router/authrouter');


dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Log SESSION_SECRET to verify it's being loaded
if (!process.env.SESSION_SECRET) {
  console.error('SESSION_SECRET is not defined. Please set it in your .env file.');
  process.exit(1);
}

app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false // Fix: should be false to prevent uninitialized sessions
}));

app.use(cors());
app.use(express.json());


connectDB();

app.use('/api/task', taskRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
