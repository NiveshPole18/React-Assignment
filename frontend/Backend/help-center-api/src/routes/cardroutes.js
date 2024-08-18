const express = require('express');
const router = express.Router();
const { createCard, getAllCards, getCardByTitle } = require('../models/card');

// Create a card
router.post('/cards', (req, res) => {
  const { title, description } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const existingCard = getCardByTitle(title);
  if (existingCard) {
    return res.status(400).json({ error: 'Card with this title already exists' });
  }

  const newCard = { id: `${Date.now()}`, title, description };
  createCard(newCard);
  res.status(201).json(newCard);
});

// Get all cards
router.get('/cards', (req, res) => {
  const cards = getAllCards();
  res.json(cards);
});

// Get a specific card by title
router.get('/:title', (req, res) => {
  const { title } = req.params;
  const card = getCardByTitle(title);
  
  if (!card) {
    return res.status(404).json({ error: 'Card not found' });
  }

  res.json(card);
});

module.exports = router;
