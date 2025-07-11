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
  const [sellerProducts , setSellerProducts] = ([]);
  const [orders , setOrders] = ([]);
   const [productsByCategory , setProductsByCategory ] = useState([]);


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


    const fetchSellerProducts = async () => {
  try {
    const token = localStorage.getItem('seller_token');
const { data } = await axios.get('http://localhost:5000/seller/products', {
  headers: { Authorization: `Bearer ${token}` }
});
    if (data.success) {
      setSellerProducts(data.products);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error);
  }
};
   //function for Fetchig products
    const fetchProduct =async()=>{
      try{
        const {data} = await axios.get('http://localhost:5000/product/'); 
        
        if(data.success){
          console.log(data);
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

    //fetching all seller details
    const fetchSellers = async ()=>{
      try{
        
      // const {data} = await axios.get('/api/admin/all-sellers');/
      const {data} = await axios.get(backendUrl + '/sellers');
        console.log(data);
      if(data.success){
        setSellers(data.sellers);
      }else{
        toast.error(data.message);
      }
    }catch (error) {
      toast.error("Something went wrong");
    }

    }


    // const fetchSeller = async() =>{
    //   try {
    //     const {data} = await axios.get('/api/seller/is-auth')
    //     if(data.success){
    //       setSeller(data.seller)
    //     }else{
    //       toast.error(data.message)
    //     }
        
    //   } catch (error) {
    //     toast.error(data.error)
    //   }
    // } 


    useEffect(()=>{

      //fetchProduct();
      fetchSellers();

    },[])
  const value = {isAdmin , setisAdmin , products , setProducts , fetchProduct , sellers , setSellers , fetchSellers , isseller , setIsSeller , axios, seller , setSeller , sellerProducts , fetchSellerProducts , fetchOrders , setOrders , orders ,productsByCategory,setProductsByCategory }

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