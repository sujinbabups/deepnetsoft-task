import React, { useState } from "react";
import bg1 from "../assets/bg-1.jpg";
import AddItemModal from "./AddItemModal";
import AddMenuModal from "./AddMenuModal";


const Home = () => {
  const [isAddMenuModalOpen, setIsAddMenuModalOpen] = useState(false);
  const [isAddToMenuModalOpen, setIsAddToMenuModalOpen] = useState(false);
  
  // Sample menus (in a real app, this would come from state or API)
  const [menus, setMenus] = useState([
    { id: '1', title: 'Breakfast Menu' },
    { id: '2', title: 'Lunch Menu' },
    { id: '3', title: 'Dinner Menu' }
  ]);

  const handleCreateMenuClick = () => {
    setIsAddMenuModalOpen(true);
  };

  const handleAddToMenuClick = () => {
    setIsAddToMenuModalOpen(true);
  };

  return (
    <>
      <div className="relative w-full h-screen flex">
        {/* Left Section: Centered Image with Gradient Overlay */}
        <div className="relative w-full h-full flex items-center justify-center border-y-4 border-blue-500">
          <img
            src={bg1}
            alt="Background"
            className="w-full h-full object-cover object-top opacity-85"
          />
          <div className="absolute inset-60 bg-gradient-to-l from-gray-950 to-transparent flex items-center justify-center gap-10">
            <div 
              className="cursor-pointer border-2 border-green-900 px-5 py-8 bg-transparent w-[30%] flex items-center justify-center hover:bg-black/70"
              onClick={handleCreateMenuClick}
            >
              <h1 className="text-4xl font-bold text-white">Create Menu</h1>
            </div>
            <div 
              className="cursor-pointer border-2 border-green-900 hover:border-4 px-5 py-8 bg-gray-500 bg-transparent w-[30%] flex justify-center hover:bg-black/70"
              onClick={handleAddToMenuClick}
            >
              <h1 className="text-4xl font-bold text-white">Add to Menu</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Create Menu Modal */}
      <AddMenuModal
        isOpen={isAddMenuModalOpen} 
        onClose={() => setIsAddMenuModalOpen(false)} 
      />

      {/* Add to Menu Modal */}
      <AddItemModal
        isOpen={isAddToMenuModalOpen} 
        onClose={() => setIsAddToMenuModalOpen(false)}
        menus={menus}
      />
    </>
  );
};

export default Home;