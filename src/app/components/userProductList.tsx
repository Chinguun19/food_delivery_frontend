"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:9000/food/");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();

        // Group products by category name
        const grouped = data.reduce((acc: Record<string, Product[]>, product) => {
          const categoryName = product.category?.categoryName || "Uncategorized";
          acc[categoryName] = acc[categoryName] || [];
          acc[categoryName].push(product);
          return acc;
        }, {});

        setGroupedProducts(grouped);
        setError(null);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load menu items. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);


  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const addToCart = (product: Product) => {
    console.log("Added to cart:", product);
  
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-xl font-medium text-gray-600">Loading menu items...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-xl font-medium text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{category} ({products.length})</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.foodName}
                      className="w-full h-48 object-cover"
                  
                    />
                    <button 
                      onClick={() => addToCart(product)}
                      className="absolute right-3 bottom-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                    >
                      <PlusIcon className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-red-500">{product.foodName}</h3>
                      <span className="font-bold text-gray-800">{formatPrice(product.price)}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{product.ingredients}</p>
                  </div>
                </div>
              ))}
              
            
              {/* <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center h-[300px] cursor-pointer">
                    <PlusIcon className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 font-medium">Add New Item</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Menu Item</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Food Name</label>
                      <Input id="name" placeholder="Enter food name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="ingredients" className="text-sm font-medium">Ingredients</label>
                      <Input id="ingredients" placeholder="List main ingredients" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="price" className="text-sm font-medium">Price</label>
                      <Input id="price" type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="image" className="text-sm font-medium">Image URL</label>
                      <Input id="image" placeholder="Enter image URL" />
                    </div>
                    <Button type="submit" className="bg-red-500 hover:bg-red-600">
                      Add Item
                    </Button>
                  </div>
                </DialogContent>
              </Dialog> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}