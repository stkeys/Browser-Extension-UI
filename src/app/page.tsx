import Image from "next/image";
import DarkModeToggle from "../../components/DarkModeToggle";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  return (
  <>
    <ThemeProvider>
      <div className="h-auto  bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)]  min-h-screen text-black   dark:bg-gradient-to-b dark:from-[#040918] dark:to-[#091540] dark:text-white">
        <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition-colors mt-2">
         <DarkModeToggle/>
       </button>
     </div>
    </ThemeProvider>
  </>
  );
}
