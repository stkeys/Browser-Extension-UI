'use client';
import Image from 'next/image';
import {Data} from './Data';
import AutoGrid from './AutoGrid';
 
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

            <button className="mt-4 px-2 py-2 bg-transparent text-black rounded-full border border-gray-300 ">
              remove 
            </button>
          </div>
        ))}
      </AutoGrid>
    </div>
      
  )
}  