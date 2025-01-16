"use client"

import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";



type productList = {
    foodName: string
    _id: string
    ingredients: string
    price: number
    image: string

}


export default function ProductList() {
const [productList, setProductList] = useState<productList[]>([])  

    async function fetchProduct() {
        const res = await fetch ("http://localhost:9000/food/")
        const data = await res.json();
        setProductList(data)
        console.log(data)
      }

      useEffect(() => {
        fetchProduct();
      }, [])
    
    return (

        <div className="flex-2 justify-end bg-white max-h-fit min-h-[400px] w-[2000px] rounded-xl p-6 gap-4 mt-[84px] ml-[210px] flex flex-wrap"> 
        <h4 className="text-[20px] font-bold w-full">Salads</h4>
  <div>  </div>
        <div
            className="flex flex-col justify-center text-center h-[241px] p-4 w-[270px] mt-[16px] rounded-[20px] text-black bg-white border-[#E4E4E7] border-[1px]">
        
          </div>

        {productList.map((product) => (
          <div
            className="flex flex-col justify-center text-center h-[241px] p-4 w-[270px] ml-[20px] mt-[16px] rounded-[20px] text-black bg-white border-[#E4E4E7] border-[1px]"
            key={product._id}
          >
            <img src="d.png" className="h-[129px] w-[250px] gap-10 rounded-xl" alt="Product" />
            <h1 className="text-start">Brie Crostini Appetizer <span className="text-end">$12</span></h1>
            <h3 className="text-left text-[12px] font-[400]">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</h3>
          
          </div>
        ))}
      </div>
      
    )

}