'use client';

import { useState } from "react";

export default function Buttons() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const buttons = [
    { label: 'All', path: '/'},
    { label: 'Active', path: '/'},
    { label: 'Inactive', path: '/'},
    ]
  return (
    <div className="space-x-2">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => setActiveButton(index)}
          className={`p-[12px] btn-bg rounded-2xl transition-colors mb-4
          ${activeButton === index ? 'bg-[hsl(hsl(3,77%,44%)] text-white' : 'bg-[hsl(hsl(3,77%,44%))] dark:bg-[hsl(226,11%,37%)] text-black dark:text-white'}`}>
          {btn.label}
        </button>
      ))}
    </div>
  );
}