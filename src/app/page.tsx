'use client';
import Image from "next/image";
import DarkModeToggle from "../../components/DarkModeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import  Logo  from "../../public/images/logo.svg"
import Buttons from "../../components/Button";

export default function Home() {
  return (
  <>
    <ThemeProvider>
      <div className="font-sans bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] min-h-screen overflow-hidden text-black   dark:bg-gradient-to-b dark:from-[#040918] dark:to-[#091540] dark:text-white px-[10%]">
          <div className="  bg-[hsl(200,60%,99%)] dark:bg-gradient-to-b dark:bg-[hsl(226,25%,17%)] rounded-xl my-10 py-2 px-4 flex justify-between items-center">
            <div>
              <Image 
                src={Logo}
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
            <button className=" dark:bg-gradient-to-b dark:bg-[hsl(226,11%,37%)] bg-[hsl(0,0%,93%)] p-2 rounded-xl transition-colors mt-2 flex items-center">
              <DarkModeToggle/>
            </button>
            
          </div>
         
         <div className="flex justify-between ">
            <p className="text-[2rem] mb-4 font-bold text-[hsl(227,75%,14%)] dark:text-white">Extensions List</p>
            <Buttons />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
