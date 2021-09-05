/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
require('dotenv').config();
const express = require('express');

const cors = require('cors');
const path = require('path')
const PORT = process.env.PORT || 5000;
const planModel = require('./models/planModel');

const app = express();

const db = require('./db');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({ extended: false })); // params יכולת לשלוף מידע מ
app.use(methodOverride('_method'));
app.use(cors());

const adminRouter = require('./routes/adminRoutes');
const plansRouter = require('./routes/planRouter');
const newsLetterRouter = require('./routes/newsLetterRouter');
const productRouter = require('./routes/productRouter');
const contactUsRouter = require('./routes/contactUsRouter');
const teamRouter = require('./routes/teamRouter');

app.use('/form', newsLetterRouter);
app.use('/plans', plansRouter);
app.use('/admin', adminRouter);
app.use('/product', productRouter);
app.use('/contactUs', contactUsRouter);
app.use('/team', teamRouter);


// app.get('/', async (req, res) => {
//   const articles = await articleModel.find().sort({ createdAt: 'desc' });
//   res.render('articles/index', { articles });
// });

if (process.env.NODE_ENV === 'production'){ //NODE_ENV משתנה סביבה מובנה
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, '../client/build','index.html'))
    });
} else {
    app.get('/', (req,res) =>{
        res.send("Api running")
    })
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
