const express=require('express');
const cors = require('cors');
const bodyParser=require('body-parser');

//utils import
const sequelize=require('./utils/database');

//routes import
const expenseRouter=require('./routes/expense');

//models impot
const User=require('./models/expense')


const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));


app.use(expenseRouter);


sequelize.sync()
.then((result)=>{
    app.listen(3300);
})
.catch((err)=>{
    console.log(err);
});