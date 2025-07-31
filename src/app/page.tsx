'use client';
import Image from "next/image";
import DarkModeToggle from "../../components/DarkModeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import  Logo  from "../../public/images/logo.svg"

export default function Home() {
  return (
  <>
    <ThemeProvider>
      <div className=" bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] min-h-screen overflow-hidden text-black   dark:bg-gradient-to-b dark:from-[#040918] dark:to-[#091540] dark:text-white px-[10%]">
          <div className="  bg-[hsl(200,60%,99%)] dark:bg-gradient-to-b dark:bg-[hsl(226,25%,17%)] rounded-xl my-10 py-2 px-4 flex justify-between items-center">
            <div>
              <Image 
                src={Logo}
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
            <button className="bg-[hsl(226,11%,37%)] p-2 rounded-xl transition-colors mt-2 flex items-center">
              <DarkModeToggle/>
            </button>
            
          </div>
         
         <div>
            <p>Extension Lists</p>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
