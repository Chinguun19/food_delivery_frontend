"use client"

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
           <div>
            <h1>Categories</h1>
            <div>
            <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className=" w-[1000px] "
    >
      <CarouselContent className="flex justify-center ">
                {categories.map((category) => (
                    <CarouselItem key={category._id} className="lg:basis-1/6 py-9 ml-5">  
                <Badge key={category._id} className="h-[36px w-fit py-1 px-5 gap-10 rounded-full">{category.categoryName}</Badge>
                </CarouselItem>
                ))}
            
                     </CarouselContent>
                     <CarouselPrevious />
                     <CarouselNext />
                   </Carousel>

            </div>





           </div> 



    )

}