import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from '../context/AppProvider';
import { Button } from "@/components/ui/button";
import { Collapse } from 'react-collapse';
const BannerDetails = () => {
  const { axios } = useAppContext();
  const [isOpen, setIsOpen] = useState(true);
  // const [banners, setBanners] = useState([]);

//dummy
  const banners = [
  {
    _id: "1",
    title: "Summer Sale - Up to 50% Off",
    oldPrice: "₹1999",
    newPrice: "₹999",
    productLink: "https://recircle.in/product/1",
    direction: "left",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+1",
  },
  {
    _id: "2",
    title: "Eco-Friendly Bottles",
    oldPrice: "₹499",
    newPrice: "₹349",
    productLink: "https://recircle.in/product/2",
    direction: "right",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+2",
  },
  {
    _id: "3",
    title: "Clothing Clearance",
    oldPrice: "₹799",
    newPrice: "₹399",
    productLink: "https://recircle.in/product/3",
    direction: "left",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+3",
  },
  {
    _id: "4",
    title: "Gadget Deals - Limited Time",
    oldPrice: "₹2499",
    newPrice: "₹1799",
    productLink: "https://recircle.in/product/4",
    direction: "right",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+4",
  },
   {
    _id: "1",
    title: "Summer Sale - Up to 50% Off",
    oldPrice: "₹1999",
    newPrice: "₹999",
    productLink: "https://recircle.in/product/1",
    direction: "left",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+1",
  },
  {
    _id: "2",
    title: "Eco-Friendly Bottles",
    oldPrice: "₹499",
    newPrice: "₹349",
    productLink: "https://recircle.in/product/2",
    direction: "right",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+2",
  },
  {
    _id: "3",
    title: "Clothing Clearance",
    oldPrice: "₹799",
    newPrice: "₹399",
    productLink: "https://recircle.in/product/3",
    direction: "left",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+3",
  },
  {
    _id: "4",
    title: "Gadget Deals - Limited Time",
    oldPrice: "₹2499",
    newPrice: "₹1799",
    productLink: "https://recircle.in/product/4",
    direction: "right",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+4",
  },
   {
    _id: "1",
    title: "Summer Sale - Up to 50% Off",
    oldPrice: "₹1999",
    newPrice: "₹999",
    productLink: "https://recircle.in/product/1",
    direction: "left",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+1",
  },
  {
    _id: "2",
    title: "Eco-Friendly Bottles",
    oldPrice: "₹499",
    newPrice: "₹349",
    productLink: "https://recircle.in/product/2",
    direction: "right",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+2",
  },
  {
    _id: "3",
    title: "Clothing Clearance",
    oldPrice: "₹799",
    newPrice: "₹399",
    productLink: "https://recircle.in/product/3",
    direction: "left",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+3",
  },
  {
    _id: "4",
    title: "Gadget Deals - Limited Time",
    oldPrice: "₹2499",
    newPrice: "₹1799",
    productLink: "https://recircle.in/product/4",
    direction: "right",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+4",
  },
   {
    _id: "1",
    title: "Summer Sale - Up to 50% Off",
    oldPrice: "₹1999",
    newPrice: "₹999",
    productLink: "https://recircle.in/product/1",
    direction: "left",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+1",
  },
  {
    _id: "2",
    title: "Eco-Friendly Bottles",
    oldPrice: "₹499",
    newPrice: "₹349",
    productLink: "https://recircle.in/product/2",
    direction: "right",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+2",
  },
  {
    _id: "3",
    title: "Clothing Clearance",
    oldPrice: "₹799",
    newPrice: "₹399",
    productLink: "https://recircle.in/product/3",
    direction: "left",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+3",
  },
  {
    _id: "4",
    title: "Gadget Deals - Limited Time",
    oldPrice: "₹2499",
    newPrice: "₹1799",
    productLink: "https://recircle.in/product/4",
    direction: "right",
    imageUrl: "https://via.placeholder.com/150x80.png?text=Banner+4",
  }
];
  // const [banner, setBanner] = useState({
  //   title: '',
  //   oldPrice: '',
  //   newPrice: '',
  //   productLink: '',
  //   direction: 'left',
  //   image: null,
  // });

  const toggleInput = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBanner({ ...banner, [name]: value });
  };

  const handleFileChange = (e) => {
    setBanner({ ...banner, image: e.target.files[0] });
  };

  // const fetchBanners = async () => {
  //   try {
  //     const { data } = await axios.get('/api/banner/all');
  //     if (data.success) {
  //       setBanners(data.banners);
  //     }
  //   } catch (error) {
  //     toast.error("Failed to fetch banners");
  //   }
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!banner.image) return toast.error('Please upload an image');

  //   const formData = new FormData();
  //   for (let key in banner) {
  //     formData.append(key, banner[key]);
  //   }

  //   try {
  //     const { data } = await axios.post('/api/banner/add', formData);
  //     if (data.success) {
  //       toast.success('Banner added successfully');
  //       fetchBanners();
  //       setBanner({
  //         title: '',
  //         oldPrice: '',
  //         newPrice: '',
  //         productLink: '',
  //         direction: 'left',
  //         image: null,
  //       });
  //       setIsOpen(false);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (err) {
  //     toast.error(err.response?.data?.message || 'Something went wrong');
  //   }
  // };

  // useEffect(() => {
  //   fetchBanners();
  // }, []);

  return (
    <div className="text-black min-h-screen !no-scrollbar w-[70vw] xl:w-[87vw] !px-2 py-0 md:!px-6 md:py-0 xl:!px-6 border-l-2 border-gray-200">

    <div className="head flex items-center justify-between max-w-full  !mb-4">
       <h1 className='text-white xl:whitespace-nowrap !text-2xl md:!text-3xl xl:!text-4xl font-[500]  '>
  Banner List
</h1>
      <div className="flex justify-end  w-full !z-999  !mb-4">
        <Button onClick={toggleInput} className="!text-black w-[auto] !px-2 cursor-pointer xl:w-[6vw] md:w-[6vw] !bg-white " variant="outline">Add Banner</Button>
      </div>
    </div>
<Collapse isOpened={isOpen} className="!mb-4">
  <div className="bg-white border border-gray-300 rounded-md shadow-md !p-4 xl:!p-6 !mb-6">
    <h2 className="text-xl font-semibold !mb-4">Add New Banner</h2>
    <form onSubmit={""} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
      {['title', 'oldPrice', 'newPrice', 'productLink'].map((field) => (
        <div key={field}>
          <label className="block font-medium mb-1 capitalize">
            {field.replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            type={field === 'productLink' ? 'url' : 'text'}
            name={field}
            onChange={handleChange}
            required
            className="w-full border !px-3 !py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      ))}
      <div>
        <label className="block font-medium !mb-1">Direction</label>
        <select
          name="direction"
          onChange={handleChange}
          className="w-full border !px-3 !py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div>
        <label className="block font-medium !mb-1">Banner Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className="w-full"
        />
      </div>
      <div className="col-span-full !mt-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white !py-2 !px-4 rounded-md"
        >
          Submit Banner
        </button>
      </div>
    </form>
  </div>
</Collapse>

<div className="!w-full  xl:min-w-[82vw] xl:!max-w-[85vw] md:table-auto overflow-hidden table-fixed w-full">
  <div className="!w-full  overflow-x-auto   bg-white rounded-md border border-gray-300 xl:overflow-hidden shadow-sm">
    <table className="!w-full xl:min-w-[85vw] xl:!max-w-screen table-auto text-xs md:text-sm xl:text-base text-left">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="!py-3 !px-4  md:!px-6 md:!py-4 xl:!py-4 xl:!px-6">#</th>
          <th className="!py-3 !px-4  md:!px-6 md:!py-4 xl:!py-4 xl:!px-6">Title</th>
          <th className="!py-3 !px-4  md:!px-6 md:!py-4 xl:!py-4 xl:!px-6 hidden md:table-cell">Old Price</th>
          <th className="!py-3 !px-4  md:!px-6 md:!py-4 xl:!py-4 xl:!px-6 hidden md:table-cell">New Price</th>
          <th className="!py-3 !px-4  md:!px-6 md:!py-4 xl:!py-4 xl:!px-6 hidden md:table-cell">Direction</th>
          <th className="!py-3 !px-4  md:!px-6 md:!py-4 xl:!py-4 xl:!px-6 hidden sm:table-cell">Product Link</th>
          <th className="!py-3 !px-4  md:!px-6 md:!py-4 xl:!py-4 xl:!px-6">Image</th>
          <th className="!py-3 !px-4  md:!px-6 md:!py-4 xl:!py-4 xl:!px-6">Action</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        {banners.length > 0 ? (
          banners.map((banner, index) => (
            <tr key={banner._id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="!py-3 !px-4 xl:!px-6 text-center">{index + 1}</td>
              {/* <td className="!py-3 !px-4 xl !px-6 font-medium max-w-[160px] truncate">{banner.title}</td> */}
              <td title={banner.title} className="truncate ... !py-3 !px-4 xl:!px-6 font-medium max-w-[160px]">{banner.title}</td>

              <td className="!py-3 !px-4 xl:!px-6 hidden md:table-cell">{banner.oldPrice}</td>
              <td className="!py-3 !px-4 xl:!px-6 hidden md:table-cell">{banner.newPrice}</td>
              <td className="!py-3 !px-4 xl:!px-6 hidden md:table-cell capitalize">{banner.direction}</td>
              <td className="!py-3 !px-4 xl:!px-6 hidden md:table-cell max-w-[160px] truncate">
                <a
                  href={banner.productLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
              </td>
              <td className="!py-3 !px-4 xl !px-6">
                <img
                  src={banner.imageUrl || '/fallback.jpg'}
                  alt="Banner"
                  className="!w-16 !h-10 object-cover rounded shadow"
                />
              </td>
              <td className="!py-3 !px-4 xl:!px-6">
                <div className="relative inline-block text-left group">
                  <button
                    className="text-gray-600 font-bold !px-2 !py-1 focus:outline-none"
                    aria-haspopup="true"
                  >
                    ⋮
                  </button>
                  <div className="absolute right-0 z-20 mt-2 hidden group-hover:block w-32 bg-white border border-gray-200 rounded-md shadow-md">
                    <button className="w-full text-left !px-4 !py-2 text-red-500 hover:bg-gray-100">
                      Delete
                    </button>
                    <button className="w-full text-left !px-4 !py-2 text-blue-500 hover:bg-gray-100">
                      Edit
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center text-gray-500 py-6">
              No banners found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>


    </div>
  );
};

export default BannerDetails;
