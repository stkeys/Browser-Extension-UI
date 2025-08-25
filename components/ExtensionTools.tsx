'use client';
import Image from 'next/image';
import AutoGrid from './AutoGrid';
import ExtensionSwitch from './Switch';
 
interface ExtensionToolsProps {
  extensions: { id: number; isActive: boolean; image: string; title: string; description: string; }[];
  onToggle: (index: number) => void;
  onRemove: (index: number) => void;
}

export default function ExtensionTools({ extensions, onToggle, onRemove }: ExtensionToolsProps) { 
  return(
    <div >
      {/* <p>Removed!</p> */}
      <AutoGrid  >
        {extensions.map((item, index) => (
          <div
           key={item.id}
           className="bg-white p-6 rounded-lg shadow-md dark:bg-[hsl(226,25%,17%)]">
           <div className="flex gap-6">
            <Image
              src={item.image}
              alt="Extension icon"
              width={50}
              height={50}    
              className="w-12 h-12 "
            />
            <div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-[hsla(0,0%,78%,1.00)]">{item.description}</p>
            </div>
            </div>
            <div className='flex justify-between mt-6 items-center'>
            <button
             className="p-2 bg-transparent text-black rounded-full border border-gray-300 dark:text-white"
             onClick={ () => onRemove(item.id)}>
              remove 
            </button>
            <ExtensionSwitch checked={extensions[index].isActive}
              onCheckedChange={() => onToggle(item.id)}/>
            </div>
          </div>
        ))}
      </AutoGrid>
    </div>
      
  )
}  