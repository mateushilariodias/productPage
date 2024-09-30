const express = require('express');
const axios = require('axios');
const router = express.Router();

// API base URL
const API_URL = 'https://api.escuelajs.co/api/v1/products';

// GET: Listar todos os produtos
router.get('/products', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Obter um único produto por ID
router.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${API_URL}/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Criar um novo produto
router.post('/products', async (req, res) => {
  try {
    const newProduct = req.body;
    const response = await axios.post(API_URL, newProduct);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Atualizar um produto por ID
router.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = req.body;
    const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Deletar um produto por ID
router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${API_URL}/${id}`);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;