import { Button } from '@mui/material'
import React from 'react'

const AddProduct = () => {
  return (
    <div className="!py-6 sm:!py-10 rounded-md !px-2 sm:!px-6 md:!px-10 shadow-lg !mt-2 flex flex-col justify-between bg-white">
      <form className="!p-2 sm:!p-4 md:!p-10 !space-y-5 !w-full">
        <div className="add flex flex-col md:flex-row w-full gap-6">
          {/* Left Side */}
          <div className="left w-full md:w-1/2">
            <div>
              <p className="!text-base !font-medium !mb-2">Product Image</p>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {Array(6).fill('').map((_, index) => (
                  <label key={index} htmlFor={`image${index}`}>
                    <input accept="image/*" type="file" id={`image${index}`} hidden />
                    <img className="!w-24 sm:!w-32 md:!w-40 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={100} height={100} />
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
                <option value="">Select Category</option>
                {[{ name: 'Electronics' }, { name: 'Clothing' }, { name: 'Groceries' }, { name: 'Auto Parts' }, { name: 'Beauty' }].map((item, index) => (
                  <option key={index} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Right Side */}
          <div className="right w-full md:w-1/2">
            <div className="top">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[48%] flex flex-col !gap-1">
                  <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                  <input id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex-1 min-w-[48%] flex flex-col gap-1">
                  <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                  <input id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex-1 min-w-[48%] flex flex-col gap-1">
                  <label className="text-base font-medium" htmlFor="manufacturer">Manufacturer</label>
                  <input id="manufacturer" type="text" placeholder="Manufacturer" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex-1 min-w-[48%] flex flex-col gap-1">
                  <label className="text-base font-medium" htmlFor="expiry-date">Expiry Date</label>
                  <input id="expiry-date" type="date" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex-1 min-w-full flex flex-col gap-1">
                  <label className="text-base font-medium" htmlFor="mfg-date">MFG Date</label>
                  <input id="mfg-date" type="date" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex-1 min-w-[48%] flex flex-col gap-1">
                  <label className="text-base font-medium" htmlFor="color">Color</label>
                  <input id="color" type="text" placeholder="Color" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex-1 min-w-[48%] flex flex-col gap-1">
                  <label className="text-base font-medium" htmlFor="available-till">Available Till</label>
                  <input id="available-till" type="date" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex-1 min-w-[48%] flex flex-col gap-1">
                  <label className="text-base font-medium" htmlFor="type">Type</label>
                  <input id="type" type="text" placeholder="Type" className="outline-none md:py-2.5 !py-2 !px-3 rounded border border-gray-500/40" required />
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