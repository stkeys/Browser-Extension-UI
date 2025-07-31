'use client';
import DarkModeToggle from "../../components/DarkModeToggle";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  return (
  <>
    <ThemeProvider>
      <div className=" bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] min-h-screen overflow-hidden text-black   dark:bg-gradient-to-b dark:from-[#040918] dark:to-[#091540] dark:text-white">
          <div className=" mx-[10%] bg-[hsl(200,60%,99%)] dark:bg-gradient-to-b dark:bg-[hsl(225,23%,24%)] rounded-lg mt-10">
            <button className="bg-[hsl(226,11%,37%)] p-2 rounded-lg hover:bg-gray-300 transition-colors mt-2 flex items-center">
              <DarkModeToggle/>
            </button>     
          </div>
         
        
     </div>
    </ThemeProvider>
  </>
  );
}
