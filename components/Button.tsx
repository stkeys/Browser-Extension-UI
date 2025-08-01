'use client';

export default function Buttons() {
  const buttons = ['All', 'Active', 'Inactive'];
  return (
    <div className="space-x-2">
      {buttons.map((button, index) => (
        <button
          key={index}
           className="p-[12px] btn-bg rounded-2xl transition-colors mb-4">
            {button}
        </button>
      ))}
    </div>
  );
}