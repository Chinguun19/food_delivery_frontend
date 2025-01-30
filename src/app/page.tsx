import Image from "next/image";
import Food from "./components/productList";
import Card from "./(web)/(components)/card";
import { Categories } from "./(web)/(components)/categories";
import UserProductList from "./components/userProductList";

export default function Home() {

  return (
   <main className="bg-[#404040] h-fitw-screen">
      <img src="bg.png" alt="" />
      <Categories/>
      <UserProductList/>






   </main>

  )
}
