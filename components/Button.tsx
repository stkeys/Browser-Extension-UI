'use client';

export default function Buttons() {
  return (
    <div className="space-x-2">
              <button 
                className="p-[12px] btn-bg rounded-2xl transition-colors mb-4">
                <a href="#" >All</a>
              </button>
              <button 
                className="p-[12px] btn-bg rounded-2xl transition-colors mb-4">
                <a href="#" >Active</a>
              </button>
              <button 
                className="p-[12px] btn-bg rounded-2xl transition-colors mb-4">
                <a href="#" >Inactive</a>
              </button>
            </div>
  );
}