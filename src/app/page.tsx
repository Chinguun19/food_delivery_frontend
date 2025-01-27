import Image from "next/image";
import Food from "./components/productList";
import Card from "./(web)/(components)/card";
import { Categories } from "./(web)/(components)/categories";

export default function Home() {

  return (
   <main className="bg-[#18181B] h-screen w-screen">
      <img src="bg.png" alt="" />
      <Categories/>




   </main>

  )
}
