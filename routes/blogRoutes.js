const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blogs with category filter
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    const categories = await Blog.distinct('category');
    
    res.render('index', { 
      blogs, 
      categories, 
      selectedCategory: category || 'All',
      title: 'Minddev - Professional Development Blog'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single blog
router.get('/blog/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).render('404');
    }
    res.render('blog-detail', { blog, title: blog.title });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;