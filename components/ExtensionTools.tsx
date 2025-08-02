'use client';
import Image from 'next/image';
import {Data} from './Data';

 
export default function ExtensionTools() { 
  return(
    <div className='bg-red-50 p-4 rounded-lg shadow-md'>
        {Data.map((item, index) => (
          <div
           key={index}
           className="">
          
            <Image
              src={item.image}
              alt="Extension icon"
              width={100}
              height={100}    
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>

           
          </div>
        ))}
    </div>
      
  )
}  