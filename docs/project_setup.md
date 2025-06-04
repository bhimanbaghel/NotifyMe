# NotifyMe Project Setup Documentation

This document outlines the setup of the NotifyMe project, including repository structure, development workflow, and deployment mechanisms.

## Repository Structure

The project is split into two separate repositories:

1. **Frontend Repository (Public)**
   - **Repository URL:** https://github.com/bhimanbaghel/NotifyMe
   - **Hosted At:** https://bhimanbaghel.github.io/NotifyMe/
   - **Technology Stack:** React, webpack, Bootstrap
   - **Purpose:** User interface for selecting companies, viewing job notifications

2. **Backend Repository (Private)**
   - **Repository URL:** https://github.com/bhimanbaghel/NotifyMe-backend
   - **Technology Stack:** Python, Flask, SQLite, BeautifulSoup/Selenium
   - **Purpose:** Web scraping, data storage, notification delivery
   - **Hosting:** Runs locally on the user's machine

## Development Workflow

### Frontend Development

1. **Local Development**
   ```bash
   cd frontend
   npm install          # Install dependencies
   npm start            # Start development server
   ```

2. **Build and Deploy**
   ```bash
   npm run build        # Build for production
   npm run deploy       # Deploy to GitHub Pages (manual)
   ```

3. **Automated Deployment**
   - GitHub Actions automatically deploys to GitHub Pages when changes are pushed to main branch
   - Configuration file: `.github/workflows/deploy.yml`

### Backend Development

1. **Local Development**
   ```bash
   cd backend
   conda activate notifyme    # Activate conda environment
   python app.py              # Run the Flask application
   ```

2. **Database Initialization**
   ```bash
   python app.py --init-db    # Initialize the SQLite database
   ```

## Configuration

### Frontend Configuration

1. **Environment Variables**
   - Development: React development server uses default settings
   - Production: GitHub Pages deployment with proper base paths

2. **Key Files**
   - `webpack.config.js`: Configures build process and paths
   - `package.json`: Defines scripts and dependencies
   - `.github/workflows/deploy.yml`: GitHub Actions workflow

### Backend Configuration

1. **Environment Variables**
   - Copy `.env_example` to `.env` and update values
   - Contains database path, email settings, API keys

2. **Key Files**
   - `app.py`: Main entry point
   - `requirements.txt`: Python dependencies
   - `.gitignore`: Prevents sensitive data from being committed

## Data Synchronization

The local backend and public frontend synchronize through:

1. Backend generates static JSON files with job data
2. JSON files are committed to GitHub in a specific directory
3. Frontend fetches data from these static JSON files
4. This approach allows the locally running backend to update the GitHub Pages frontend

## Versioning and Updates

### Frontend

- Hosted on GitHub Pages
- GitHub Actions automatically builds and deploys on push to main
- Version control through git

### Backend

- Private repository for security
- No direct public access
- Updates must be manually pulled and run locally

## Security Considerations

1. **Backend Privacy**
   - Backend code is in a private repository to protect:
     - API keys
     - Scraping logic
     - Authentication mechanisms

2. **Frontend Security**
   - No sensitive data stored in frontend code
   - All API calls use secure endpoints

## Getting Started (New Developer)

1. Clone both repositories:
   ```bash
   git clone https://github.com/bhimanbaghel/NotifyMe.git
   git clone https://github.com/bhimanbaghel/NotifyMe-backend.git
   ```

2. Set up frontend:
   ```bash
   cd NotifyMe/frontend
   npm install
   npm start
   ```

3. Set up backend:
   ```bash
   cd NotifyMe-backend
   conda create -n notifyme python=3.10
   conda activate notifyme
   pip install -r requirements.txt
   python app.py --init-db
   python app.py
   ```

## Troubleshooting

### Frontend Issues

- **Blank page after deployment**: Check webpack configuration and base paths
- **404 errors for assets**: Ensure publicPath is correctly set in webpack.config.js
- **GitHub Actions failure**: Verify workflow permissions in repository settings

### Backend Issues

- **Database errors**: Run with `--init-db` flag to reset database
- **Scraping failures**: Check company website changes, update scrapers
- **Environment variables**: Ensure `.env` file is properly configured 