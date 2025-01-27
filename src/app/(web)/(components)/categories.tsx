"use client"

import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


type Category = {
    categoryName: string
    _id: string
}

export function Categories() {



    const [categories, setCategories] = useState<Category[]>([])
    async function fetchCategory() {
        const res = await fetch ("http://localhost:9000/food-category/")
        const data = await res.json();
        setCategories(data)
        console.log(data)
      }
    
      useEffect(() => {
        fetchCategory();
      }, [])



    return (
           <div className=" justify-center">
            <h1>Categories</h1>
            <div className=" flex justify-center">
            <Carousel
            opts={{
              align: "start",
              loop: false
            }}
      className=" w-fit "
    >
      <CarouselContent className="flex justify-center ">
                {categories.map((category) => (
                    <CarouselItem key={category._id} className="basis-1/9">  
                <Badge key={category._id} className="h-[36px w-fit py-1 px-5 gap-10 rounded-full bg-white text-black">{category.categoryName}</Badge>
                </CarouselItem>
                ))}
            
                     </CarouselContent>
                     <CarouselPrevious className="bg-white"><ChevronLeft/></CarouselPrevious>
                     <CarouselNext className="bg-white"><ChevronRight/></CarouselNext>
                   </Carousel>

            </div>





           </div> 



    )

}