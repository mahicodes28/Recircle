import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppProvider'

const AllSellers = () => {
  const { sellers, fetchSellers } = useAppContext()

 
// const sellers = [
//   {
//     _id: "s1",
//     name: "EcoMart Retailers",
//     totalproducts: 15
//   },
//   {
//     _id: "s2",
//     name: "Urban Threads",
//     totalproducts: 32
//   },
//   {
//     _id: "s3",
//     name: "GreenGlow Organics",
//     totalproducts: 12
//   },
//   {
//     _id: "s4",
//     name: "TechZone India",
//     totalproducts: 8
//   },
//   {
//     _id: "s5",
//     name: "Wellness Co.",
//     totalproducts: 24
//   },
//   {
//     _id: "s6",
//     name: "GadgetGarage",
//     totalproducts: 17
//   },
//   {
//     _id: "s7",
//     name: "FreshBasket Pvt Ltd",
//     totalproducts: 29
//   },
//   {
//     _id: "s8",
//     name: "ClothCulture",
//     totalproducts: 11
//   }, {
//     _id: "s1",
//     name: "EcoMart Retailers",
//     totalproducts: 15
//   },
//   {
//     _id: "s2",
//     name: "Urban Threads",
//     totalproducts: 32
//   },
//   {
//     _id: "s3",
//     name: "GreenGlow Organics",
//     totalproducts: 12
//   },
//   {
//     _id: "s4",
//     name: "TechZone India",
//     totalproducts: 8
//   },
//   {
//     _id: "s5",
//     name: "Wellness Co.",
//     totalproducts: 24
//   },
//   {
//     _id: "s6",
//     name: "GadgetGarage",
//     totalproducts: 17
//   },
//   {
//     _id: "s7",
//     name: "FreshBasket Pvt Ltd",
//     totalproducts: 29
//   },
//   {
//     _id: "s8",
//     name: "ClothCulture",
//     totalproducts: 11
//   }
// ]
  return (
    <div className="!no-scrollbar flex-1 !border-l-2 !border-gray-200  w-full flex flex-col justify-between">
      <div className="w-full md:p-6 !p-2 md:!p-4 xl:!p-4">
        <h2 className="pb-4 text-lg font-medium xl:!pb-4 xl:text-4xl xl:font-[500] md:!pb-4 md:text-4xl md:font-[500]">
          All Sellers
        </h2>

        <div className="flex flex-col items-center w-full overflow-x-auto rounded-md bg-white border border-gray-500/20">
          <table className="!max-w-screen xl:min-w-[85vw] xl:!max-w-screen md:table-auto table-fixed w-full overflow-hidden text-xs sm:text-sm text-black">
            <thead className="text-gray-900">
              <tr>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-center">#</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-left">Name</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-left hidden sm:table-cell">Total Products</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  <td className="!px-2 xl:!px-4 xl:!py-6 md:!py-4 !py-5 text-center">{index + 1}</td>
                  <td className="!px-2 xl:!px-4 xl:!py-6 md:!py-4 !py-5">
                    <span>{seller.user}</span>
                  </td>
                  <td className="!px-2 xl:!px-4 xl:!py-6 md:!py-4 !py-5 hidden sm:table-cell">
                    {seller.totalproducts}
                  </td>
                  <td className="!px-2 xl:!px-4 xl:!py-6 md:!py-4 !py-5">
                    <div className="relative inline-block text-left group">
                      <button className="text-xl font-bold text-gray-500">⋯</button>
                      <div className="z-10 hidden group-hover:block absolute top-7 right-0 w-32 bg-white border border-gray-200 rounded shadow-lg">
                        <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                          Block
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllSellers
