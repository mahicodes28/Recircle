import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from '../context/AppProvider';
import { Button } from "@/components/ui/button";
import { Collapse } from 'react-collapse';

const BannerDetails = () => {
  const { axios } = useAppContext();
  const [isOpen, setIsOpen] = useState(true);
  const [banners, setBanners] = useState([]);
  const [banner, setBanner] = useState({
    title: '',
    old_price: '',
    new_price: '',
    product_link: '',
    direction: 'left',
    image: null,
  });

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

  const fetchBanners = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/admmin/banner/'); // adjust path
      if (data.success) {
        setBanners(data.banners);
      }
    } catch (error) {
      toast.error("Failed to fetch banners");
    }
  };


  const deleteBanner = async (id) =>{
    try {
      const {data} = await axios.delete(`http://127.0.0.1:8000/admmin/banner/delete/${id}/`);
      if(data.success){
        toast.success(data.message);
        fetchBanners();
      }else{
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Failed to delete banner");
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!banner.image) return toast.error('Please upload an image');

    const formData = new FormData();
    formData.append('title', banner.title);
    formData.append('old_price', banner.old_price);
    formData.append('new_price', banner.new_price);
    formData.append('product_link', banner.product_link);
    formData.append('direction', banner.direction);
    formData.append('image', banner.image);

    try {
      const { data } = await axios.post('http://127.0.0.1:8000/admmin/banner/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data.success) {
        toast.success('Banner added successfully');
        fetchBanners();
        setBanner({
          title: '',
          old_price: '',
          new_price: '',
          product_link: '',
          direction: 'left',
          image: null,
        });
        setIsOpen(false);
      } else {
        toast.error(data.message || "Failed to add banner");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="text-black min-h-screen w-[70vw] xl:w-[87vw] !px-2 !py-0 md:!px-6 border-l-2 border-gray-200">

      <div className="head flex items-center justify-between !mb-4">
        <h1 className='text-white text-2xl md:text-3xl xl:text-4xl xl:whitespace-nowrap font-[500]'>
          Banner List
        </h1>
        <div className="flex justify-end w-full !mb-4">
          <Button onClick={toggleInput} className="!text-black !px-2 cursor-pointer w-[auto] bg-white" variant="outline">Add Banner</Button>
        </div>
      </div>

      <Collapse isOpened={isOpen} className="mb-4">
        <div className="bg-white border border-gray-300 rounded-md shadow-md !p-4 xl:!p-6 !mb-6">
          <h2 className="text-xl font-semibold !mb-4">Add New Banner</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
            {[
              { name: 'title', type: 'text' },
              { name: 'old_price', type: 'number' },
              { name: 'new_price', type: 'number' },
              { name: 'product_link', type: 'url' }
            ].map(({ name, type }) => (
              <div key={name}>
                <label className="block font-medium !mb-1 capitalize">
                  {name.replace(/_/g, ' ')}
                </label>
                <input
                  type={type}
                  name={name}
                  value={banner[name]}
                  onChange={handleChange}
                  required
                  className="w-full border !px-3 !py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            ))}
            <div>
              <label className="block font-medium !mb-1">Direction</label>
              <select
                value={banner.direction}
                onChange={handleChange}
                name="direction"
                required
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
                name="image"
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

      {/* Banner table */}
      <div className="w-full overflow-x-auto bg-white rounded-md border border-gray-300 shadow-sm">
        <table className="w-full text-sm md:text-base text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="!py-3 !px-4">#</th>
              <th className="!py-3 !px-4">Title</th>
              <th className="!py-3 !px-4 hidden md:table-cell">Old Price</th>
              <th className="!py-3 !px-4 hidden md:table-cell">New Price</th>
              <th className="!py-3 !px-4 hidden md:table-cell">Direction</th>
              <th className="!py-3 !px-4 hidden md:table-cell">Product Link</th>
              <th className="!py-3 !px-4">Image</th>
              <th className="!py-3 !px-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {banners.length > 0 ? (
              banners.map((b, index) => (
                <tr key={b._id || index} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="!py-3 !px-4 text-center">{index + 1}</td>
                  <td className="!py-3 !px-4 font-medium max-w-[160px] truncate" title={b.title}>{b.title}</td>
                  <td className="!py-3 !px-4 hidden md:table-cell">{b.old_price}</td>
                  <td className="!py-3 !px-4 hidden md:table-cell">{b.new_price}</td>
                  <td className="!py-3 !px-4 hidden md:table-cell capitalize">{b.direction}</td>
                  <td className="!py-3 !px-4 hidden md:table-cell max-w-[160px] truncate">
                    <a href={b.product_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View</a>
                  </td>
                  <td className="!py-3 !px-4">
                    <img
                      src={b.image || '/fallback.jpg'}
                      alt="Banner"
                      className="w-16 h-10 object-cover rounded shadow"
                    />
                  </td>
                  <td className="!py-3 !px-4">
                    <button onClick={()=>deleteBanner(b._id)} className="text-red-500 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-gray-500 !py-6">
                  No banners found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BannerDetails;
