import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'



export default function SignUp() {    

  return (
    <div className=' flex gap-[80px] h-screen w-screen bg-[white] '>
        <div className=' flex-col justify-center items-start gap-6 flex ml-[100px]'>
            <Button variant="outline" size="icon" className='w-[36px] h-[36px] bg-white' ><ChevronLeft/> </Button>
            <h1 className='text-[24px] font-[600] text-[#09090B] ' >Create your account</h1>
            <h3 className='text-[16px] font-[400] text-[#71717A] '>Sign up to explore your favorite dishes.</h3>
        <input className='w-[416px] h-[36px] border-[#E4E4E7] bg-[#FFFFFF] text-[#71717A] border-[1px] rounded-md pl-[20px] ' placeholder='Enter your email adress' type="email" name="" id="" />
        <Button className='text-[#FAFAFA] bg-[#18181B] w-[416px] h-[36px] '>Let's Go</Button>
        <div className=' flex items-center justify-center self-stretch'>  <h1 className='text-[17px] text-[#71717A] font-[400] justify-self-center'>Already have an account? <span className='text-[#2563EB] ml-8 font-[400]'>Log in</span></h1>   </div>
          

            
        </div>

        <div>     
      <img src="signup.jpeg" className='rounded-[16px] h-screen flex-shrink-0 mt-2 mb-3' alt="" />
      </div>
    </div>
  )
}



