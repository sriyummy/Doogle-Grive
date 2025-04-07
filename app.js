const express = require ('express');
const dotenv = require ('dotenv');
const userRouter = require ('./routes/user.routes');
const connectToDB = require ('./config/db');

dotenv.config();
const app = express();
connectToDB();

app.set ('view engine', 'ejs');
app.use (express.json());
app.use (express.urlencoded ({extended: true}));

app.use ('/user', userRouter);

app.listen (3000, () => {
    console.log ('Server is running on port 3000');
});