'use client';
import Image from 'next/image';
import {Data} from './Data';
import AutoGrid from './AutoGrid';
 
export default function ExtensionTools() { 
  return(
    <div className='bg-white p-4 rounded-lg shadow-md '>
      <AutoGrid  >
        {Data.map((item, index) => (
          <div
           key={index}
           className="bg-gray-100 p-4 rounded-lg">
          
            <Image
              src={item.image}
              alt="Extension icon"
              width={50}
              height={50}    
              className="w-12 h-12 "
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>

           
          </div>
        ))}
      </AutoGrid>
    </div>
      
  )
}  