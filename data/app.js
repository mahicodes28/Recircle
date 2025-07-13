import express from 'express'
const app = express();
import mongoose from 'mongoose';
import SellerRoutes from './routes/seller.js'
import productrouter from './routes/product.js'
import adminRouter from './routes/admin.js';
import { clerkWebhooks } from './controllers/webhook.js';
import cors from 'cors';
import 'dotenv/config';
import {clerkMiddleware} from '@clerk/express'
//import connectCloudinary from './config/cloudinary.js';

//await connectCloudinary();

import dotenv from 'dotenv';
dotenv.config();


const PORT  =  5000;
const allowedOrigins = ['http://localhost:5173' , 'https://recircl.vercel.app'];

app.use(clerkMiddleware());
app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE' , 'PATCH'],
    credentials: true,
}));
//connect this mongo from cloud 
mongoose.connect('mongodb+srv://mahich:28122005@cluster0.twh2p51.mongodb.net/ReCircle?retryWrites=true&w=majority')
   .then(() => {console.log("MongoDB connected ");})
   .catch((err) => {console.log("MongoDB connection error", err);
});


app.use(express.json());
app.use(express.urlencoded({extended : true }));

app.use('/admin',adminRouter);
app.use('/webhooks' , clerkWebhooks);
app.use("/seller",SellerRoutes);

app.use("/product",productrouter);


app.listen(PORT,()=>{
    console.log('your server is running');
})

