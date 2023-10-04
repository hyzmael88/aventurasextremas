import { AppContext } from '@/context/StateContext'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Product from './Product'

function Store() {

  const{getProducts, products} = AppContext()

  useEffect(() => {
    getProducts()
  }, [])

  console.log(products)
  

  return (
    <div className='w-full h-full flex flex-col justify-center items-center
    
    '>
        <div className='
        flex flex-col justify-center items-center
        bg-gray-900  bg-clip-padding backdrop-filter
      backdrop-blur-xl bg-opacity-10  w-[90%] h-[70vh] rounded-[25px]'>
        <div className='w-[95%] h-[90%] bg-white/50 rounded-[30px]
        grid grid-cols-2 xl:grid-cols-4 items-center
        '>
          {
            products.map((item, index) =>(
              <Product
              item={item}
              key={index}
              />
            ))
          }

        </div>
        </div>

    </div>
  )
}

export default Store