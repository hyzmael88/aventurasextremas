import { AppContext } from '@/context/StateContext'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Product from './Product'
import Swiper from 'swiper'

function Store() {
  const { getProducts, products } = AppContext();

  useEffect(() => {
    getProducts();
  }, []);

  const [productoActivo, setProductoActivo] = useState(null)
 
  console.log(productoActivo)


  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 0,
      grabCursor: false,
    });

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className='w-full h-full flex flex-col justify-end xl:justify-center items-center'>
      <div className='flex flex-col justify-center items-center bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 w-[90%] h-[85%] xl:h-[70vh] rounded-[25px] mb-4'>
        <div className='w-[90%] xl:w-[95%] h-[95%] xl:h-[90%] bg-white/50 rounded-[30px] overflow-hidden ' ref={swiperRef}>
          <div className={`swiper-wrapper grid grid-cols-1 ${productoActivo? "xl:grid-cols-1": "xl:grid-cols-4"}  w-full h-full`}>
            {products.map((item, index) => (
              <div key={index} className='swiper-slide'
              onClick={()=>setProductoActivo(item)}
              >
                {
                  productoActivo?
                    item == productoActivo&&
                    <Product item={item}
                    productoActivo = {productoActivo}
                    />
                  :
                  <Product item={item}
                  />
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;