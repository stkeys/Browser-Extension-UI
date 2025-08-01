'use client';

export default function Buttons() {
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
          className="p-[12px] btn-bg rounded-2xl transition-colors mb-4">
          {btn.label}
        </button>
      ))}
    </div>
  );
}