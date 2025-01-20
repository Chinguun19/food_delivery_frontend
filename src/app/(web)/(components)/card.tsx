 import { Button } from "@/components/ui/button"
 import { PlusIcon } from "lucide-react"
 
 export default function Card() {

    

 return (
    <div className="bg-white h-[342px] w-[397px] p-4 gap-5 rounded-[20px] ">
        <div className=" relative">    
        <img  className="w-[365px] h-[210px]" src="d.png" alt="" />
        <Button size="lg" className="absolute right-[20px] top-[146px] h-[44px] w-[44px] rounded-full py-[8px] px-[16px] bg-white "><PlusIcon className=" text-[#FD543F]"></PlusIcon></Button>
              </div>
   
        <h1 className="flex justify-between items-center mt-[20px]">
            <span className="text-[#FD543F] text-[24px] font-[600]">Brie Crostini Appetizer</span>
            <span className=" text-[18px] font-[600]">$12.99</span>
        </h1>
        <h3 className="text-left text-[14px] font-[400] mt-[8px]">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</h3>         
    </div>


 )
}