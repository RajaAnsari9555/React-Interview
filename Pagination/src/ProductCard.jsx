import React from 'react'

const ProductCard = ({image ,  title}) => {
  return (
    <div className=  " flex  columns-1  w-100  flex-wrap border-black  border-2 p-5  gap-2 m-5  ">
        <img src={image} alt={title} className=' w-50 h-50 object-cover '/>
        <span>{title}</span>
      
    </div>
  )
}

export default ProductCard
