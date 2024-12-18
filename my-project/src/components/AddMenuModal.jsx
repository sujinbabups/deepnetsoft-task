import React, { useState } from "react";

const AddMenuModal = ({ isOpen, onClose }) => {
  const [menuTitle, setMenuTitle] = useState("");
  const [menuDescription, setMenuDescription] = useState("");

  const handleAddMenu = async () => {
    try {
      const payload = {
        title: menuTitle,
        description: menuDescription,
      };

      // Send data to backend using fetch
      const response = await fetch(`${import.meta.env.VITE_API}/menus/add-menu`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      alert("New menu created")
      console.log("Menu added successfully:", data);

      // Reset fields and close modal
      setMenuTitle("");
      setMenuDescription("");
      onClose();
    } catch (error) {
      console.error("Error adding menu:", error.message);
    }
  };

  const handleCancel = () => {
    setMenuTitle("");
    setMenuDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Create New Menu</h2>
        <p className="text-gray-600 mb-4">Fill in the details for your new menu</p>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={menuTitle}
            onChange={(e) => setMenuTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter menu title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={menuDescription}
            onChange={(e) => setMenuDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter menu description"
          />
        </div>

        {/* Buttons */}
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
            onClick={handleAddMenu}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Add Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMenuModal;
