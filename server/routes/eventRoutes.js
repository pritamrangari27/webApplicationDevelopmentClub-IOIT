const express = require('express');
const router = express.Router();
const events = require('../data/eventsData');

// GET all events
router.get('/', (req, res) => {
  try {
    const { status, type } = req.query;
    let filteredEvents = [...events];
    
    if (status) {
      filteredEvents = filteredEvents.filter(
        e => e.status.toLowerCase() === status.toLowerCase()
      );
    }
    
    if (type) {
      filteredEvents = filteredEvents.filter(
        e => e.type.toLowerCase() === type.toLowerCase()
      );
    }
    
    // Sort by date (upcoming first)
    filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    res.json({
      success: true,
      count: filteredEvents.length,
      data: filteredEvents
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET upcoming events
router.get('/upcoming', (req, res) => {
  try {
    const upcomingEvents = events
      .filter(e => e.status === 'upcoming')
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    res.json({
      success: true,
      count: upcomingEvents.length,
      data: upcomingEvents
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET past events
router.get('/past', (req, res) => {
  try {
    const pastEvents = events
      .filter(e => e.status === 'past')
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    res.json({
      success: true,
      count: pastEvents.length,
      data: pastEvents
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single event by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const event = events.find(e => e.id === parseInt(id));
    
    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    
    res.json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET event types
router.get('/meta/types', (req, res) => {
  try {
    const types = [...new Set(events.map(e => e.type))];
    res.json({ success: true, data: types });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
