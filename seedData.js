require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const sampleBlogs = [
  {
    title: "Getting Started with Node.js and Express",
    content: "Node.js has revolutionized server-side development with its non-blocking, event-driven architecture. In this comprehensive guide, we'll explore how to build robust web applications using Node.js and Express framework.\n\nExpress.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's designed to make building web applications and APIs easier and more efficient.\n\nKey features of Express include:\n- Robust routing system\n- Middleware support\n- Template engine integration\n- Static file serving\n- Error handling\n\nLet's start by setting up a basic Express server and gradually build more complex features.",
    category: "Web Development",
    author: "Minddev Team",
    excerpt: "Learn how to build powerful web applications using Node.js and Express framework with this comprehensive beginner's guide.",
    tags: ["nodejs", "express", "javascript", "backend"],
    featured: true
  },
  {
    title: "Understanding Machine Learning Fundamentals",
    content: "Machine Learning is transforming industries and creating new possibilities in technology. This article covers the fundamental concepts every developer should understand.\n\nMachine Learning can be categorized into three main types:\n1. Supervised Learning - Learning with labeled data\n2. Unsupervised Learning - Finding patterns in unlabeled data\n3. Reinforcement Learning - Learning through interaction and feedback\n\nPopular algorithms include:\n- Linear Regression\n- Decision Trees\n- Neural Networks\n- Support Vector Machines\n- K-Means Clustering\n\nThe key to successful ML implementation is understanding your data, choosing the right algorithm, and proper model evaluation.",
    category: "AI/ML",
    author: "Dr. Sarah Johnson",
    excerpt: "Dive into the world of Machine Learning with this comprehensive overview of fundamental concepts and algorithms.",
    tags: ["machinelearning", "ai", "algorithms", "datascience"],
    featured: true
  },
  {
    title: "Modern CSS Grid Layout Techniques",
    content: "CSS Grid Layout is a powerful tool for creating complex, responsive web layouts. It provides a two-dimensional layout system that makes it easier to design web pages.\n\nKey concepts include:\n- Grid Container and Grid Items\n- Grid Lines and Grid Tracks\n- Grid Areas and Grid Template\n- Implicit vs Explicit Grids\n\nCSS Grid works perfectly with Flexbox to create modern, responsive designs. While Flexbox is great for one-dimensional layouts, Grid excels at two-dimensional layouts.\n\nPractical examples:\n- Creating responsive card layouts\n- Building complex dashboard interfaces\n- Designing magazine-style layouts\n- Implementing responsive navigation systems",
    category: "Web Development",
    author: "Alex Chen",
    excerpt: "Master modern web layouts with CSS Grid - the most powerful layout system available in CSS today.",
    tags: ["css", "grid", "layout", "responsive", "frontend"],
    featured: false
  },
  {
    title: "Docker Containerization Best Practices",
    content: "Docker has revolutionized how we deploy and manage applications. Understanding containerization is crucial for modern development workflows.\n\nKey Docker concepts:\n- Images and Containers\n- Dockerfile best practices\n- Multi-stage builds\n- Container orchestration\n- Security considerations\n\nBest practices for Docker:\n1. Use official base images\n2. Minimize layer count\n3. Use .dockerignore files\n4. Don't run as root\n5. Use multi-stage builds for production\n6. Keep containers stateless\n7. Use health checks\n\nDocker Compose makes it easy to define and run multi-container applications, perfect for development environments.",
    category: "DevOps",
    author: "Mike Rodriguez",
    excerpt: "Learn Docker containerization best practices to improve your development workflow and deployment strategy.",
    tags: ["docker", "containers", "devops", "deployment"],
    featured: false
  },
  {
    title: "React Native vs Flutter: Mobile Development Comparison",
    content: "Choosing the right cross-platform mobile development framework is crucial for project success. Let's compare React Native and Flutter.\n\nReact Native Advantages:\n- JavaScript ecosystem\n- Code sharing with web apps\n- Large community\n- Mature ecosystem\n- Hot reloading\n\nFlutter Advantages:\n- Single codebase for iOS and Android\n- Excellent performance\n- Rich UI components\n- Growing rapidly\n- Backed by Google\n\nConsiderations:\n- Team expertise\n- Project requirements\n- Performance needs\n- Long-term maintenance\n- Community support\n\nBoth frameworks have their strengths and are suitable for different types of projects.",
    category: "Mobile Development",
    author: "Emma Wilson",
    excerpt: "Compare React Native and Flutter to make an informed decision for your next mobile development project.",
    tags: ["reactnative", "flutter", "mobile", "crossplatform"],
    featured: false
  },
  {
    title: "Cybersecurity in Modern Web Applications",
    content: "Security should be a top priority in web application development. Understanding common vulnerabilities and how to prevent them is essential.\n\nCommon security threats:\n- SQL Injection\n- Cross-Site Scripting (XSS)\n- Cross-Site Request Forgery (CSRF)\n- Authentication vulnerabilities\n- Data breaches\n\nSecurity best practices:\n1. Input validation and sanitization\n2. Use HTTPS everywhere\n3. Implement proper authentication\n4. Regular security audits\n5. Keep dependencies updated\n6. Use security headers\n7. Implement rate limiting\n\nSecurity is not a one-time implementation but an ongoing process that requires constant attention and updates.",
    category: "Technology",
    author: "David Kim",
    excerpt: "Essential cybersecurity practices every web developer should implement to protect applications and user data.",
    tags: ["security", "cybersecurity", "web", "protection"],
    featured: true
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('Cleared existing blogs');
    
    // Insert sample blogs
    await Blog.insertMany(sampleBlogs);
    console.log('Sample blogs inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();