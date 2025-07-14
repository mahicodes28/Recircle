import React, { useContext } from 'react'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import ProductItem from '../ProductSlider/ProductItem'
import { AppContext } from '../../context/AppProvider'
const DialoagueProduct = ({open, setOpen, product}) => {
  const {productId} = useContext(AppContext)
  console.log(productId)
  return (
    <div>
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Product Details</DialogTitle>
            <DialogContent>
                <ProductItem product={productId} />
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default DialoagueProduct