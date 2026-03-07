const express = require('express');
const router = express.Router();
const teamMembers = require('../data/teamData');

// GET all team members
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      count: teamMembers.length,
      data: teamMembers
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET team members by category
router.get('/category/:category', (req, res) => {
  try {
    const { category } = req.params;
    const filteredMembers = teamMembers.filter(
      member => member.category.toLowerCase() === category.toLowerCase()
    );
    
    res.json({
      success: true,
      count: filteredMembers.length,
      data: filteredMembers
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single team member by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const member = teamMembers.find(m => m.id === parseInt(id));
    
    if (!member) {
      return res.status(404).json({ success: false, error: 'Team member not found' });
    }
    
    res.json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET leadership team
router.get('/roles/leadership', (req, res) => {
  try {
    const leadership = teamMembers.filter(
      member => member.category === 'leadership'
    );
    res.json({ success: true, data: leadership });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET all team heads
router.get('/roles/heads', (req, res) => {
  try {
    const heads = teamMembers.filter(
      member => member.role.includes('Head')
    );
    res.json({ success: true, data: heads });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
