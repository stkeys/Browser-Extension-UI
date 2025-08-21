'use client';


interface ButtonsProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

export default function Buttons({ onFilterChange, activeFilter }: ButtonsProps) {
  const buttons = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive'},
    ]
  const getButtonClasses = (buttonFilter: string) => {
    const baseClasses = "py-2 px-6 rounded-full  transition-colors duration-200";
    const activeClasses = "bg-[hsl(3,77%,44%)] text-white dark:bg-[hsl(3,71%,56%)] dark:text-black";
    const inactiveClasses = "bg-[hsl(200,60%,99%)] dark:bg-[hsl(226,11%,37%)] ";
    return `${baseClasses} ${activeFilter === buttonFilter ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {buttons.map((btn) => (
        <button
          key={btn.value}
          onClick={() => onFilterChange(btn.value)}
          className={getButtonClasses(btn.value)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );

         
}