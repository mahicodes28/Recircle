import express from 'express'
const app = express();
import mongoose from 'mongoose';
import SellerRoutes from './routes/seller.js'
import productrouter from './routes/product.js'

import dotenv from 'dotenv';
dotenv.config();


const PORT  = process.env.PORT || 5000;


//connect this mongo from cloud 
mongoose.connect('mongodb://127.0.0.1:27017/productdata')
   .then(() => {console.log("MongoDB connected ");})
   .catch((err) => {console.log("MongoDB connection error", err);
});


app.use(express.json());
app.use(express.urlencoded({extended : true }));

app.use("/api/seller",SellerRoutes);

app.use("/api/product",productrouter);


app.listen(PORT,()=>{
    console.log('your server is running');
})

