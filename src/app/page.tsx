import Image from "next/image";
import DarkModeToggle from "../../components/DarkModeToggle";

export default function Home() {
  return (
    <div className="h-auto bg-white min-h-screen text-black flex flex-col items-center justify-center">
     <p>Click the button to toggle dark mode!</p>
     <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition-colors mt-2">
       <DarkModeToggle/>
     </button>
    </div>
  );
}
