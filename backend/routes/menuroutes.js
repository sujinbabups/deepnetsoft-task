const express = require("express");
const router = express.Router();
const Menu = require("../modals/menu.js"); 
const Items=require('../modals/items.js')

// Add menu route
router.post("/add-menu", async (req, res) => {
  try {
    const { title, description } = req.body;

    // Input validation
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    // Create a new menu item
    const newMenu = new Menu({
      title,
      description,
    });

    await newMenu.save();
    res.status(201).json({ message: "Menu added successfully", data: newMenu });
  } catch (error) {
    console.error("Error adding menu:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post('/add-item', async (req, res) => {
  try {
    const { menuId, itemname, price, imgurl } = req.body;

    // Input validation
    if (!menuId || !itemname || !price || !imgurl) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new item
    const newItem = new Items({
      menu: menuId,
      itemname,
      price,
      imgurl,
    });

    await newItem.save();
    res.status(201).json({ message: 'Item added successfully', data: newItem });
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();  // Fetch all menus from the database
    res.status(200).json({ menus });
  } catch (error) {
    console.error('Error fetching menus:', error);
    res.status(500).json({ message: 'Error fetching menus' });
  }
});


router.get('/menu-sections', async (req, res) => {
  try {
    
    const menuSections = await Menu.find(); 
    res.json(menuSections);
  } catch (err) {
    console.error('Error fetching menu sections:', err);
    res.status(500).json({ message: 'Error fetching menu sections' });
  }
});


module.exports = router;
