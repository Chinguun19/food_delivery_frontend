"use client"
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Icon, LayoutDashboardIcon } from "lucide-react"
import { SettingsIcon } from "lucide-react"
import { TruckIcon } from "lucide-react"
import { PlusIcon } from "lucide-react"
import ProductList from "../components/productList"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CheckIcon } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


type Category = {
    categoryName: string
    _id: string
}


export default function Home () {
const [run, setRun] = useState(1)
const [categories, setCategories] = useState<Category[]>([])
const [value, setValue] = useState("") 
const successToast = () => { toast("New dish is being added to the menu",{
  className: "custom-toast",
  position: 'top-center'

}) 

}
function handleChange(e: any) {
  setValue(e.target.value);
}


    async function addCategory(value: string) {
        const url = "http://localhost:9000/food-category/" 
        
        if(value !== "") {
        await fetch (url, {
           method: 'Post',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ categoryName: value})
         })
         setRun(run + 1)
         successToast()
         setValue("")
    }
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
                        <img src="Logo.png" className="h-[40px] w-[40px] absolute left-[20px] mt-5"></img>
                        <h1 className=" text-[18px] font-bold text-center mt-5 ">NomNom</h1>
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
                    <main className=" flex-col justify-center px-10">
                    <ToastContainer hideProgressBar={true} theme="dark" autoClose={3500} ></ToastContainer>
                    <div className=" bg-white  max-h-fit min-h-[176px] w-screen rounded-xl p-6 gap-4 mt-[84px] ml-[210px] mr-[230px] "> 
                     <h4 className=" text-[20px] font-bold ">Dishes Category</h4>
                      {categories.map((category) => (
                            <Button className=" h-[36px] ml-[20px] text-[14px] font-semibold mt-[16px] px-[16px] rounded-full py-[8px] px-[16px text-black hover:bg-none  w-fit bg-white border-[#E4E4E7] border-[1px]" key={category._id}>{category.categoryName} <Badge className="w-[28px] h-[20px] rounded-full">5</Badge></Button>
                        ))}


<Dialog>
      <DialogTrigger asChild>
      <Button size="icon" variant="outline" className="h-[36px] w-[36px] py-[8px] px-[16px] rounded-full bg-red-500 ml-4 "><PlusIcon className="text-white"></PlusIcon></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white h-[272px] w-[460px]">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2 ">
          <div className="grid flex-1 gap-2">
            <h1>Category name</h1>
            <Input value={value} onChange={handleChange} placeholder="Type category name" id="name"/>
          </div>

        </div>
        <DialogFooter className="sm:justify-end">

          <DialogClose> 

        <div onClick={() => addCategory(value)}>
        Add Category
      </div>
      </DialogClose>

        </DialogFooter>
      </DialogContent>
       </Dialog>
            
                        </div>
                     
              
                      
               
                    <ProductList></ProductList>
                    <ProductList></ProductList>
                    <ProductList></ProductList>

                    </main>
                    </div>
      


                
    )
    
}