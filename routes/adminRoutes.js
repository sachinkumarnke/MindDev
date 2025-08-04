const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Admin dashboard
router.get('/admin', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render('admin/dashboard', { blogs, title: 'Admin Dashboard' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create blog form
router.get('/admin/create', (req, res) => {
  res.render('admin/create', { title: 'Create New Blog' });
});

// Create blog
router.post('/admin/create', async (req, res) => {
  try {
    const blogData = { ...req.body };
    if (req.body.tags) {
      blogData.tags = JSON.parse(req.body.tags);
    }
    const blog = new Blog(blogData);
    await blog.save();
    res.redirect('/admin');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit blog form
router.get('/admin/edit/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.render('admin/edit', { blog, title: 'Edit Blog' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update blog
router.post('/admin/edit/:id', async (req, res) => {
  try {
    const blogData = { ...req.body };
    if (req.body.tags) {
      blogData.tags = JSON.parse(req.body.tags);
    }
    await Blog.findByIdAndUpdate(req.params.id, blogData);
    res.redirect('/admin');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete blog
router.post('/admin/delete/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;