import ShopComponent from '@/components/Shop/ShopComponent'
import React from 'react'
import Parallax from "@/components/Parallax/Parallax";


function Shop() {
  return (
    <div className="relative overflow-hidden bg-[#031527]">
    <Parallax/>
    <ShopComponent/>
    </div>
  )
}

export default Shop