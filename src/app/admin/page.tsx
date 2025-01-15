"use client"

import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

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
            <div className="h-screen w-screen bg-gray-100 flex">
                <div className="w-[205px] h-screen bg-white ">
                    <div>
                        <img src="Logo.png" className="h-[40px] w-[40px]"></img>
                        <h1 className="">NomNom</h1>
                        <h4>Swift delivery</h4>
                    </div>



                </div>
                        <div className=" bg-white h-[176px] w-[1171px] rounded-xl p-6 gap-4 mt-[84px] "> 
                            <h4 className=" text-[20px] font-bold ">Dishes Category</h4>
                        {categories.map((category) => (
                            <Button className=" h-[36px] ml-[20px] text-[14px] font-semibold mt-[16px] px-[16px] rounded-full py-[8px] px-[16px text-black hover:bg-none  w-fit bg-white border-[#E4E4E7] border-[1px]" key={category._id}>{category.categoryName}</Button>
                        ))}
                            <button onClick={addCategory}>ADD Category</button>
                        </div>
            </div>
    )
    
}