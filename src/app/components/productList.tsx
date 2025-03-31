"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});




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

export default function ProductList() {
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
    <div className="flex flex-col bg-white min-h-[400px] w-full rounded-xl p-6 gap-4 mt-[84px] ml-[210px]">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="mb-6">
          <h4 className="text-[20px] font-bold w-full">{category} ({products.length})</h4>
          <div className="flex flex-wrap">
            {/* Add New Dish Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-col justify-center text-center h-[241px] p-4 w-[270px] ml-[20px] mt-[16px] rounded-[20px] text-black bg-white border-[1px] border-dashed border-[#EF4444]">
                  <h1>Add new Dish to {category}</h1>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-white w-[460px] h-[592px] rounded-xl">
                <DialogTitle>Add new Dish to {category}</DialogTitle>
             
        
                    <h1>Food name</h1>
                    <Input></Input>
                    <h1>Price</h1>
                    <Input></Input>
                    <h1>Ingredients</h1>
                    <Input></Input>
                    <h1>Image</h1>
                    <Input></Input>
                
             
              </DialogContent>
            </Dialog>

            {/* Render Each Product Under Its Category */}
            {products.map((product) => (
              <div
                key={product._id}
                className="flex flex-col justify-center text-center h-[241px] p-4 w-[270px] ml-[20px] mt-[16px] rounded-[20px] text-black bg-white border-[#E4E4E7] border-[1px]"
              >
                <img
                  src={product.image || "placeholder.jpg"}
                  className="h-[129px] w-[250px] rounded-xl object-cover"
                  alt={product.foodName}
                />
                <h1 className="flex justify-between items-center mt-[20px]">
                  <span className="text-[#EF4444] text-[14px] font-[500]">{product.foodName}</span>
                  <span className="text-[12px] font-[400]">${product.price.toFixed(2)}</span>
                </h1>
                <h3 className="text-left text-[12px] font-[400] mt-[8px]">{product.ingredients}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
