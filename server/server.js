require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const db = require('./db/db');

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({ extended: true })); // params יכולת לשלוף מידע מ
app.use(cors());

const newsLetterRouter = require('./routes/newsLetterRouter');

app.use('/form', newsLetterRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));