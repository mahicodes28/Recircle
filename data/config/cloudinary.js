import  cloudinary from 'cloudinary';

const connectCloudinary = async ()=>{

    cloudinary.config({
        cloud_name : process.env.CLOUDINARY_NAME,
        api_key :456316594847657,
        api_secret : process.env.CLOUDINARY_SECRET_KEY
        
    })
}

export default connectCloudinary