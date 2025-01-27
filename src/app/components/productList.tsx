"use client"

import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




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
        <h4 className="text-[20px] font-bold w-full">Salads (12)</h4>
        <div className="flex flex-wrap"> 

        <Dialog>
          <DialogTrigger asChild> 
        <div
            className="flex flex-col justify-center text-center h-[241px] p-4 w-[270px] ml-[20px] mt-[16px] rounded-[20px] text-black bg-white  border-[1px] border-dashed border-[#EF4444]"
          
          >
           
              <h1>Add new Dish to Salads</h1>
       
          
          </div>
          </DialogTrigger> 
          <DialogContent className="bg-white w-[460px] h-[592px] rounded-xl">
          <DialogTitle>Add new Dish to Appetizers</DialogTitle>
          <div className="flex items-center space-x-2 ">
                              <div className="grid flex-1 gap-2">
                                <h1>Category name</h1>
                                <input placeholder="Type category name" id="name"/>
                              </div>

                            </div>
            
            
            
            
            </DialogContent>  
          </Dialog>

        {productList.map((product) => (
          <div
            className="flex flex-col justify-center text-center h-[241px] p-4 w-[270px] ml-[20px] mt-[16px] rounded-[20px] text-black bg-white border-[#E4E4E7] border-[1px]"
            key={product._id}
          >
            <img src="d.png" className="h-[129px] w-[250px] gap-10 rounded-xl" alt="Product" />
            <h1 className="flex justify-between items-center mt-[20px]">
            <span className="text-[#EF4444] text-[14px] font-[500]">Brie Crostini Appetizer</span>
            <span className=" text-[12px] font-[400]">$12.99</span>
          </h1>
            <h3 className="text-left text-[12px] font-[400] mt-[8px]">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</h3>
          
          </div>
        ))}
        </div>
      </div>
      
    )

}