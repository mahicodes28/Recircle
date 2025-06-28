const express =  require('express');
const app = express();
const fs = require('fs');
const PORT = 8000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/productdata')
   .then(() => {console.log("MongoDB connected ");})
   .catch((err) => {console.log("MongoDB connection error", err);
});

const sellerrouter = require('./routs/seller');
const productrouter = require('./routs/product')

app.use(express.json());
app.use(express.urlencoded({extended : true }));

app.use("/seller",sellerrouter);
app.use("/product",productrouter);

app.listen(PORT,()=>{
    console.log('your server is running');
})

