import { Button } from "@/components/ui/button"
import { Icon, LayoutDashboardIcon } from "lucide-react"
import { SettingsIcon } from "lucide-react"
import { TruckIcon } from "lucide-react"
import { PlusIcon } from "lucide-react"

export default function SideBar() {


    return (<>
    <div> 
                <aside className=" h-sc bg-white  w-[205px] justify-center">
                   
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
                    <main className="flex-1 p-6 bg-white">
                    <h1 className="text-2xl font-bold mb-4">Page Title</h1>
                    <p>This is the main content area. Add your page content here.</p>
                    </main>
                    </div>
    
    </>



    )
    
}