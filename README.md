# Minddev - Professional Development Blog

A modern, professional blogging website built with Node.js, Express, and MongoDB, featuring a complete CI/CD pipeline with GitHub Actions and Docker containerization.

## 🚀 Features

- **Professional Design**: Clean, responsive UI with Bootstrap 5
- **Category-based Blogs**: Organized content by technology categories
- **MongoDB Integration**: Robust data storage and retrieval
- **Docker Support**: Containerized application for easy deployment
- **CI/CD Pipeline**: Automated testing, building, and deployment with GitHub Actions
- **Security Focused**: Built-in security best practices and vulnerability scanning

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: EJS, Bootstrap 5, Font Awesome
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Testing**: Jest

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (v7.0 or higher)
- Docker (optional, for containerized deployment)
- Git

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Minddev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   ```

4. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

5. **Seed the database** (optional)
   ```bash
   node seedData.js
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Visit the application**
   Open http://localhost:3000 in your browser

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   Open http://localhost:3000 in your browser

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📁 Project Structure

```
Minddev/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions CI/CD pipeline
├── config/
│   └── database.js            # Database configuration
├── models/
│   └── Blog.js                # Blog data model
├── routes/
│   └── blogRoutes.js          # Blog routes
├── views/
│   ├── partials/
│   │   ├── navbar.ejs         # Navigation component
│   │   └── footer.ejs         # Footer component
│   ├── index.ejs              # Homepage
│   └── blog-detail.ejs        # Blog detail page
├── public/
│   └── css/
│       └── style.css          # Custom styles
├── tests/
│   └── app.test.js            # Test files
├── docker-compose.yml         # Docker Compose configuration
├── Dockerfile                 # Docker configuration
├── server.js                  # Main application file
├── seedData.js               # Database seeder
└── package.json              # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/minddev-blog
NODE_ENV=development
```

### Blog Categories

The application supports the following blog categories:
- Technology
- Web Development
- AI/ML
- Mobile Development
- DevOps

## 🚀 Deployment

### GitHub Actions CI/CD

The project includes a comprehensive CI/CD pipeline that:

1. **Tests**: Runs automated tests with MongoDB
2. **Builds**: Creates Docker images
3. **Security Scans**: Performs vulnerability scanning
4. **Deploys**: Deploys to staging/production environments

### Manual Deployment

1. **Build Docker image**
   ```bash
   docker build -t minddev-blog .
   ```

2. **Run container**
   ```bash
   docker run -d -p 3000:3000 --name minddev-blog \
     -e MONGODB_URI=your_mongodb_uri \
     minddev-blog
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Bootstrap for the responsive UI framework
- Font Awesome for icons
- MongoDB for the database solution
- Docker for containerization
- GitHub Actions for CI/CD automation

## 📞 Support

For support, email support@minddev.com or create an issue in the GitHub repository.

---

**Built with ❤️ by the Minddev Team**