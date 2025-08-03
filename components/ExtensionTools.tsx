'use client';
import Image from 'next/image';
import {Data} from './Data';
import FlexSwitcher from './Flex-Switcher';

 
export default function ExtensionTools() { 
  return(
    <div className='bg-white p-4 rounded-lg shadow-md '>
    <FlexSwitcher gap='3rem' threshold="65rem" className="items-center">

        {Data.map((item, index) => (
          <div
           key={index}
           className="">
          
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
    </FlexSwitcher>

    </div>
      
  )
}  