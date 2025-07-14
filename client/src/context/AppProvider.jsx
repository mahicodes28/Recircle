import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {



  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isAdmin ,setisAdmin ]= useState(false);
  const [products , setProducts] = useState([]);
  const [sellers , setSellers] = useState([]);
  const [isseller , setIsSeller ] = useState(false);
  const [seller , setSeller] = useState({});
  const [sellerProducts , setSellerProducts] = useState([]);
  const [orders , setOrders] = useState([]);
   const [productsByCategory , setProductsByCategory ] = useState([]);
   const[productById , setProductById] = useState({});
   const [productId , setProductId] = useState("");


   const fetchProductById = async (id)=>{
    try{
      const {data} = await axios.get('http://localhost:5000/product/' + id);
      if(data.success){
        setProductById(data.product);
      }else{
        toast.error(data.message);
      }
    }catch (error) {
      toast.error("Something went wrong");
    }
   }
  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('seller_token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data } = await axios.get('/api/seller/orders');
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };


  const searchByCategory = async(label)=>{
  try {

      const {data} =await axios.get(`http://localhost:5000/category/${label}`);

    if(data.success){
      setProductsByCategory(data.products);
    }else{
      toast.error(data.error);
    }
    
  } catch (error) {
    toast.error("Something went wrong");
  }
 }

   //function for Fetchig products
   const fetchProduct =async()=>{
         try{
           const {data} = await axios.get('http://localhost:5000/product/'); 
           
           if(data.success){
            // console.log(data);
             // console.log(data.products);
             setProducts(data.products);
         }
         else{
           toast.error(data.message);
         }
       }catch (error) {
         toast.error("Something went wrong");
       }
       }


  const value = {isAdmin , setisAdmin , products , setProducts , fetchProduct , sellers , setSellers  , isseller , setIsSeller , axios, seller , setSeller , sellerProducts  , fetchOrders , setOrders , orders ,productsByCategory,setProductsByCategory,searchByCategory,productById,setProductById,fetchProductById ,setProductId ,productId,fetchProduct};

//  useEffect(() => {
//     fetchSellers()
//   }, [])
 
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);