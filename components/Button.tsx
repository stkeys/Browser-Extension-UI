'use client';

import { useState } from "react";

export default function Buttons() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const buttons = [
    { label: 'All' },
    { label: 'Active' },
    { label: 'Inactive'},
    ]
  return (
    <div className="space-x-2">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => setActiveButton(index)}
          className={
          `p-[12px]  rounded-2xl transition-colors mb-4
          ${activeButton === index 
          ? 'bg-[hsl(3,77%,44%)] text-white dark:bg-[hsl(3,71%,56%)] dark:text-black' 
          : 'bg-[hsl(200,60%,99%)] dark:bg-[hsl(226,11%,37%)] '}
          `}>
          {btn.label}
        </button>
      ))}
    </div>
  );
}