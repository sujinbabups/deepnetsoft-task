import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menuSections, setMenuSections] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    // Fetch menu sections from the backend
    const fetchMenuSections = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/menus/menu-sections`);
        const data = await response.json();
        setMenuSections(data);
        console.log("data :",data[0]);
        

      } catch (err) {
        console.error('Error fetching menu sections:', err);
      }
    };

    fetchMenuSections();
  }, []);

  const handleSectionClick = (section) => {
    setSelectedMenu(section);
    
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">MENU</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {menuSections.map((section, index) => (
          
          <div
            key={index}
            className={`${section.bgColor} rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer`}
            onClick={() => handleSectionClick(section)}
          >
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">{section.title}</h3>
              <p className="text-black opacity-80">{section.description}</p>
              
              
            </div>
          </div>
        ))}
      </div>

      {/* Show selected menu details */}
      {selectedMenu && (
        <div className="mt-8 p-8 bg-gray-100 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedMenu.title}</h3>
          <p className="text-lg text-gray-600 font-semibold">{selectedMenu.description}</p>
          <p className="text-lg text-gray-600 font-semibold">{selectedMenu.itemname}</p>
          <p className="text-lg text-gray-600 font-semibold">{selectedMenu.price}</p>
                <img
                  src={selectedMenu.imgurl}
                  alt="Menu item"
                  className="w-[20%] h-auto rounded-lg mt-4"
                />


        </div>
      )}
    </div>
  );
};

export default Menu;
