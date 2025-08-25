'use client';
import Image from "next/image";
import DarkModeToggle from "../../components/DarkModeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import Logo from "../../public/images/logo.svg"
import Buttons from "../../components/Button";
import ExtensionTools from "../../components/ExtensionTools";
import {Data} from "../../components/Data";
import { useState } from "react";

export default function Home() {
  const initialExtensions = Data.map((item, index) => ({
    ...item,
    id: index + 1,
    isActive: true, 
  }));

  
  const [extensions, setExtensions] = useState(initialExtensions);
  const [filter, setFilter] = useState('all');

  const toggleExtension = (id: number) => {
    setExtensions(extensions.map(ext =>
      ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
    ));
  };

  const handleRemove = (idToRemove: number) => {
    setExtensions (prevExtension => prevExtension.filter(ext => ext.id !== idToRemove))
  }


  const filteredExtensions = extensions.filter(ext => {
    switch (filter) {
      case 'active':
        return ext.isActive;
      case 'inactive':
        return !ext.isActive;
      case 'all':
      default:
        return true;
    }
  });
  return (
    <>
      <ThemeProvider>
        <div className="font-sans bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] min-h-screen overflow-hidden text-black   dark:bg-gradient-to-b dark:from-[#040918] dark:to-[#091540] dark:text-white px-[10%]">
          <div className=" shadow-md bg-[hsl(200,60%,99%)] dark:bg-gradient-to-b dark:bg-[hsl(226,25%,17%)] rounded-xl my-10 py-2 px-4 flex justify-between items-center">
            <div>
              <Image
                src={Logo}
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
            <div className=" dark:bg-gradient-to-b dark:bg-[hsl(226,11%,37%)] bg-[hsl(0,0%,93%)] p-2 rounded-xl transition-colors mt-2 flex items-center">
              <DarkModeToggle />
            </div>

          </div>

          <div className="flex justify-between ">
            <p className="text-[2rem] mb-4 font-bold text-[hsl(227,75%,14%)] dark:text-white">Extensions List</p>
            <Buttons onFilterChange={setFilter} activeFilter={filter} />
          </div>
            <ExtensionTools extensions={filteredExtensions} onToggle={toggleExtension} onRemove={handleRemove}/>
        </div>
      </ThemeProvider>
    </>
  );
}
