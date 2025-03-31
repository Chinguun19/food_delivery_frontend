"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Category = {
  categoryName: string;
  _id: string;
};

export function Categories({ onSelectCategory }: { onSelectCategory?: (id: string) => void }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function fetchCategory() {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:9000/food-category/");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      setCategories(data);
      
      // Auto-select first category if available
      if (data.length > 0 && !selectedCategory) {
        setSelectedCategory(data[0]._id);
        if (onSelectCategory) onSelectCategory(data[0]._id);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (onSelectCategory) onSelectCategory(categoryId);
  };

  if (isLoading) {
    return (
      <div className="bg-[#424242] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-2xl font-semibold mb-4">Categories</h1>
          <div className="flex justify-center py-4">
            <div className="animate-pulse h-10 bg-gray-600 rounded-full w-32 mx-2"></div>
            <div className="animate-pulse h-10 bg-gray-600 rounded-full w-24 mx-2"></div>
            <div className="animate-pulse h-10 bg-gray-600 rounded-full w-28 mx-2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#424242] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-2xl font-semibold mb-4">Categories</h1>
          <div className="text-red-400 text-center">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#424242] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-2xl font-semibold mb-4">Categories</h1>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl"
          >
            <CarouselContent className="py-2">
              {categories.map((category) => (
                <CarouselItem key={category._id} className="basis-auto md:basis-auto flex-grow-0 px-2">
                  <Badge 
                    onClick={() => handleCategoryClick(category._id)}
                    className={`h-10 px-6 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors 
                    ${selectedCategory === category._id 
                      ? "bg-[#F44336] text-white hover:bg-[#e53935]" 
                      : "bg-white text-black hover:bg-gray-100"}`}
                  >
                    {category.categoryName}
                  </Badge>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-black hover:bg-gray-100 -left-3 shadow-md" />
            <CarouselNext className="bg-white text-black hover:bg-gray-100 -right-3 shadow-md" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
