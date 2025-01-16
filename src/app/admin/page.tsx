"use client"

import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Icon, LayoutDashboardIcon } from "lucide-react"
import { SettingsIcon } from "lucide-react"
import { TruckIcon } from "lucide-react"
import { PlusIcon } from "lucide-react"
import ProductList from "../components/productList"
import { Badge } from "@/components/ui/badge"


type Category = {
    categoryName: string
    _id: string
}


export default function Home () {
const [run, setRun] = useState(1)
const [categories, setCategories] = useState<Category[]>([])



    async function addCategory() {
        const name = prompt("name")
        const url = "http://localhost:9000/food-category/"  
        await fetch (url, {
           method: 'Post',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ categoryName: name})
         })
         setRun(run + 1)
    }

  async function fetchCategory() {
    const res = await fetch ("http://localhost:9000/food-category/")
    const data = await res.json();
    setCategories(data)
    console.log(data)
  }

  useEffect(() => {
    fetchCategory();
  }, [run])
    


    return (



                    <div className=" flex overflow-hidden overflow-y-hidden"> 
                      <aside className=" block fixed h-screen bg-white  w-[205px] justify-end">
                        <img src="Logo.png" className="h-[40px] w-[40px] absolute left-[20px]"></img>
                        <h1 className=" text-[18px] font-bold text-center ">NomNom</h1>
                        <h4 className=" text-[12px] font-normal text-center text-[#71717A]">Swift delivery</h4>
                        <div className="flex justify-center">
                        <Button className="mt-7 h-[40px] w-[165px] rounded-full px-6 text-[14px] font-[500]"> <LayoutDashboardIcon/>  Food menu</Button>
                        </div>

                        <div className="flex justify-center">
                        <Button  className="mt-7 bg-white h-[40px] w-[165px] rounded-full px-6 text-black text-[14px] font-[500]"><TruckIcon/>Orders</Button>
                        </div>

                        <div className="flex justify-center">
                        <Button className="mt-7 bg-white h-[40px] w-[165px] rounded-full px-6 text-black text-[14px] font-[500]"> <SettingsIcon/> Settings</Button>
                        </div>
                   
                    </aside>
                    <main className=" flex-col justify-center">
                    <div className=" bg-white  max-h-fit min-h-[176px] w-[2000px] w-max-fit rounded-xl p-6 gap-4 mt-[84px] ml-[210px] mr-[230px] "> 
                     <h4 className=" text-[20px] font-bold ">Dishes Category</h4>
                      {categories.map((category) => (
                            <Button className=" h-[36px] ml-[20px] text-[14px] font-semibold mt-[16px] px-[16px] rounded-full py-[8px] px-[16px text-black hover:bg-none  w-fit bg-white border-[#E4E4E7] border-[1px]" key={category._id}>{category.categoryName} <Badge className="w-[28px] h-[20px] rounded-full">5</Badge></Button>
                        ))}
                            <Button size="icon" variant="outline" className="h-[36px] w-[36px] py-[8px] px-[16px] rounded-full bg-red-500 ml-4 " onClick={addCategory}><PlusIcon></PlusIcon></Button>
                        </div>
                     
              
                      
               
                    <ProductList></ProductList>

                    </main>
                    </div>
      


                
    )
    
}