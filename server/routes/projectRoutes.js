const express = require('express');
const router = express.Router();
const projects = require('../data/projectsData');

// GET all projects
router.get('/', (req, res) => {
  try {
    const { category, status, year } = req.query;
    let filteredProjects = [...projects];
    
    if (category) {
      filteredProjects = filteredProjects.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (status) {
      filteredProjects = filteredProjects.filter(
        p => p.status.toLowerCase() === status.toLowerCase()
      );
    }
    
    if (year) {
      filteredProjects = filteredProjects.filter(
        p => p.year === parseInt(year)
      );
    }
    
    res.json({
      success: true,
      count: filteredProjects.length,
      data: filteredProjects
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single project by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const project = projects.find(p => p.id === parseInt(id));
    
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET projects by developer
router.get('/developer/:name', (req, res) => {
  try {
    const { name } = req.params;
    const developerProjects = projects.filter(
      p => p.developers.some(dev => 
        dev.toLowerCase().includes(name.toLowerCase())
      )
    );
    
    res.json({
      success: true,
      count: developerProjects.length,
      data: developerProjects
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET project categories
router.get('/meta/categories', (req, res) => {
  try {
    const categories = [...new Set(projects.map(p => p.category))];
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET project statistics
router.get('/meta/stats', (req, res) => {
  try {
    const stats = {
      total: projects.length,
      completed: projects.filter(p => p.status === 'Completed').length,
      active: projects.filter(p => p.status === 'Active').length,
      inDevelopment: projects.filter(p => p.status === 'In Development').length,
      byCategory: {}
    };
    
    projects.forEach(p => {
      stats.byCategory[p.category] = (stats.byCategory[p.category] || 0) + 1;
    });
    
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
