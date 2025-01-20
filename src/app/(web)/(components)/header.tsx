export default function Header () {
  
  
  return (  <header className="bg-[#18181B] h-[68px] w-screen flex items-center">

    <div className="flex ml-10b gap-3 ml-10">
        <img className=" h-[37.29px] w-[46px] mt-6" src="Logo.png" alt="" />

        <li className="mb-4"> <h1 className="text-[20px] font-bold"> <span className="text-white">Nom</span><span className="text-[#EF4444]">Nom</span></h1>
        <h3 className="text-white text-[12px]">Swift Delivery</h3> </li>
      
    </div>

    <div className=" flex items-center absolute right-10">
        <button className="w-fit h-[36px] rounded-full py-[8px] px-[12px] mr-3 bg-white ">Sign up</button>
        <button className="w-fit text-white h-[36px] rounded-full py-[8px] px-[12px] bg-[#EF4444]">Login in</button>
    </div>



  </header>

  )
}