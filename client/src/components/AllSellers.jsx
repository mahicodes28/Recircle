import React, { useState } from 'react'
import { useAppContext } from '../context/AppProvider'

const AllSellers = () => {
    
const {sellers, setSellers } = useAppContext();

  return (
     <div className='container p-4 mx-auto'>
        <div >
            <table className='w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm'>
                <thead>
                    <tr className='border-b border-gray-200'>
                        <th className='py-2 px-4 text-left'>#</th>
                        <th className='py-2 px-4 text-left'>Name</th>
                        <th className='py-2 px-4 text-left max-sm:hidden'>Total Products</th>
                        <th className='py-2 px-4 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map((seller, index) => (
                        <tr key={index} className='text-gray-700'>
                            <td className='py-2 px-4 border-b text-center border-gray-200'>{index + 1}</td>
                            <td className='py-2 px-4 border-b flex border-gray-200 mt-2'>
                                <span>{seller.name}</span>
                            </td>
                            <td className='py-2 px-4 border-b max-sm:hidden border-gray-200'>{seller.totalproducts}</td>
                            <td className='py-2 px-4 border-b relative border-gray-200'>
                                <div className='relative inline-block text-left group '>
                                    <button className='text-gray-500  action-button' >...</button>
                                    <div className='z-10 hidden absolute right-0 left-0 top-0 w-32 bg-white border border-gray-200 rounded shadow group-hover:block'>
                                        <button className=' block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100'>Block</button>
                                        <button className=' block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100'>Remove</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AllSellers