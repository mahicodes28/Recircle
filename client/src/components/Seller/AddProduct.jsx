import { Button } from '@mui/material'
import React from 'react'

const AddProduct = () => {
  return (
      <div className="!py-10 rounded-md !px-10 shadow-lg !mt-2 flex flex-col  justify-between bg-white">
            <form className="!md:p-10 !p-4  !space-y-5 !w-full">
              <div className="add flex w-[100%]">
                <div className="left w-[50%]">
                  <div>
                    <p className="!text-base !font-medium !mb-2">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(6).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image${index}`}>
                                <input accept="image/*" type="file" id={`image${index}`} hidden />
                                <img className="!w-40 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={100} height={100} />
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col !mt-5 !gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
                    <input id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col !gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea id="product-description" rows={4} className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select id="category" className="outline-none md:py-2.5 !py-2 !px-3 !rounded-md border border-gray-500/40">
                        <option  value="">Select Category</option>
                        {[{ name: 'Electronics' }, { name: 'Clothing' }, { name: 'Groceries' },{ name: 'Auto Parts' },{ name: 'Beauty' }].map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
              </div>
                <div className="right  w-[50%]">
                    <div className="top">
                        <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex-1 flex flex-col !gap-1 w-[50%]">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-[50%]">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                    </div>
                     <div className="flex-1 flex flex-col gap-1 w-[50%]">
                        <label className="text-base font-medium" htmlFor="offer-price">Manufacturer</label>
                        <input id="offer-price" type="text" placeholder="Manufacturer" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                    </div>
                     <div className="flex-1 flex flex-col gap-1 w-[50%]">
                        <label className="text-base font-medium" htmlFor="Expiry-Date">Expiry Date</label>
                        <input id="offer-price" type="date" placeholder="0" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                    </div> <div className="flex-1 flex flex-col gap-1 w-[100%]">
                        <label className="text-base font-medium" htmlFor="MFG-Date">MFG Date</label>
                        <input id="offer-price" type="date" placeholder="0" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                    </div>
                     <div className="flex-1 flex flex-col gap-1 w-[50%]">
                        <label className="text-base font-medium" htmlFor="offer-price">Color</label>
                        <input id="offer-price" type="text" placeholder="Color" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                    </div>
                     <div className="flex-1 flex flex-col gap-1 w-[50%]">
                        <label className="text-base font-medium" htmlFor="offer-price">Available Till</label>
                        <input id="offer-price" type="Date" placeholder="0" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                    </div>
                     <div className="flex-1 flex flex-col gap-1 w-[50%]">
                        <label className="text-base font-medium" htmlFor="Type">Type</label>
                        <input id="offer-price" type="text" placeholder="Type" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                    </div>
                </div>
              </div>
                <Button className="!px-8 w-full !py-2.5 !bg-indigo-500 !text-white !font-medium rounded">ADD</Button>
            </form>
        </div>
  )
}

export default AddProduct