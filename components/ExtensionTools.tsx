'use client';
import Image from 'next/image';
import {Data} from './Data';
import AutoGrid from './AutoGrid';
import ExtensionSwitch from './Switch';
 
export default function ExtensionTools() { 
  return(
    <div >
      <AutoGrid  >
        {Data.map((item, index) => (
          <div
           key={index}
           className="bg-white p-4 rounded-lg shadow-md ">
           <div className="flex  gap-6">
            <Image
              src={item.image}
              alt="Extension icon"
              width={50}
              height={50}    
              className="w-12 h-12 "
            />
            <div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            </div>
            </div>
            <div className='flex justify-between mt-6 items-center'>
            <button className=" p-2 bg-transparent text-black rounded-full border border-gray-300 ">
              remove 
            </button>
            <ExtensionSwitch />
            </div>
          </div>
        ))}
      </AutoGrid>
    </div>
      
  )
}  