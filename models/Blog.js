const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Technology', 'Web Development', 'AI/ML', 'Mobile Development', 'DevOps']
  },
  author: {
    type: String,
    required: true,
    default: 'Minddev Team'
  },
  excerpt: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);