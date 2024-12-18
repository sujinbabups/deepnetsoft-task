import React, { useState, useEffect } from 'react';

const AddItemModal = ({ isOpen, onClose }) => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [itemname, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [imgurl, setImageUrl] = useState('');

  // Fetch menus from the backend
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/menus`);
        const data = await response.json();
        if (data && data.menus) {
          setMenus(data.menus);
        }
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  const handleAddItem = async () => {
    const newItem = {
      menuId: selectedMenu,
      itemname: itemname, 
      price: itemPrice,
      imgurl: imgurl,
    };
    

    try {
      const response = await fetch(`${import.meta.env.VITE_API}/menus/add-item`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      const data = await response.json();
      if (data.message === 'Item added successfully') {
        console.log("New item added to menu");

        console.log('Item added:', data.data);
        
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }

    // Reset fields and close modal
    resetForm();
    onClose();
  };

  const handleCancel = () => {
    // Reset fields and close modal
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setSelectedMenu('');
    setItemName('');
    setItemPrice('');
    setImageUrl('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Add Item to Menu</h2>

        <div className="mb-4">
          <label htmlFor="menu" className="block text-sm font-medium text-gray-700 mb-2">
            Select Menu
          </label>
          <select
            id="menu"
            value={selectedMenu}
            onChange={(e) => setSelectedMenu(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a Menu</option>
            {menus.map((menu) => (
              <option key={menu._id} value={menu._id}>
                {menu.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-2">
            Item Name
          </label>
          <input
            type="text"
            id="itemname"
            value={itemname}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="itemPrice" className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="number"
            id="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
            step="0.01"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="imgurl"
            value={imgurl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleAddItem}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            disabled={!selectedMenu || !itemname || !itemPrice}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
