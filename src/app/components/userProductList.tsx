"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";







type Product = {
  _id: string;
  foodName: string;
  ingredients: string;
  price: number;
  image: string;
  category: {
    _id: string;
    categoryName: string;
  };
};

export default function UserProductList() {
  const [groupedProducts, setGroupedProducts] = useState<Record<string, Product[]>>({});

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("http://localhost:9000/food/");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();

        console.log("Fetched Products:", data); // Debugging API response

        // ✅ Group products by category name
        const grouped = data.reduce((acc: Record<string, Product[]>, product) => {
          const categoryName = product.category?.categoryName || "Uncategorized"; // Default if category is missing
          acc[categoryName] = acc[categoryName] || [];
          acc[categoryName].push(product);
          return acc;
        }, {});

        console.log("Grouped Products:", grouped); // Debugging grouped categories

        setGroupedProducts(grouped);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-[#404040] min-h-[400px] w-full rounded-xl p-6 gap-4 mt-[84px] ml-[210px]">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="mb-6">
          <h4 className="text-[20px] font-bold w-[1500px]">{category} ({products.length})</h4>
          <div className="flex flex-wrap">
            {/* Add New Dish Dialog */}
         

            {/* Render Each Product Under Its Category */}
            {products.map((product) => (
            <div className="bg-white h-[342px] w-[397px] p-4 gap-7 ml-6 rounded-[20px] mb-8">
            <div className=" relative">    
            <img  className="w-[365px] h-[210px]" src="foodimage.png" alt="" />
            <Button size="lg" className="absolute right-[20px] top-[146px] h-[44px] w-[44px] rounded-full py-[8px] px-[16px] bg-white "><PlusIcon className=" text-[#FD543F]"></PlusIcon></Button>
                  </div>
       
            <h1 className="flex justify-between items-center mt-[20px]">
                <span className="text-[#FD543F] text-[24px] font-[600]">{product.foodName}</span>
                <span className=" text-[18px] font-[600]">{product.price}</span>
            </h1>
            <h3 className="text-left text-[14px] font-[400] mt-[8px]">{product.ingredients}</h3>         
        </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
