<<<<<<< HEAD
require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
const db = require("./db/db");
=======
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const articleModel = require('./models/article')
const app = express();
const cors = require('cors');
const db = require('./db/db');
const methodOverride = require('method-override');
 
app.set('view engine','ejs')
app.set('views', __dirname + '/views');
>>>>>>> 5b11a11d878bfdb98c5ecdd650b4762e189e1c17

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({ extended: false })); // params יכולת לשלוף מידע מ
app.use(methodOverride('_method'))
app.use(cors());

<<<<<<< HEAD
const newsLetterRouter = require("./routes/newsLetterRouter");

app.use("/form", newsLetterRouter);
=======
const adminRouter = require('./routes/adminRoutes')
const articlesRouter = require('./routes/articleRouter')
const newsLetterRouter = require('./routes/newsLetterRouter');

app.use('/form', newsLetterRouter);
app.use('/login', articlesRouter);
app.use('/admin',adminRouter);


app.get('/',async (req,res)=>{
    const articles = await articleModel.find().sort({createdAt:'desc'})
    res.render('articles/index', {articles:articles})
})

>>>>>>> 5b11a11d878bfdb98c5ecdd650b4762e189e1c17


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use('/articles', articlesRouter);

