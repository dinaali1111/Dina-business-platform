#!/bin/bash

# 🚀 Dina Business Platform - Quick Deploy Script
# This script helps you deploy the project to different platforms

echo "🚀 Dina Business Platform - Deploy Script"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d 'v' -f 2)
    print_success "Node.js version: $NODE_VERSION"
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    NPM_VERSION=$(npm -v)
    print_success "npm version: $NPM_VERSION"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    npm ci
    if [ $? -eq 0 ]; then
        print_success "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Run tests
run_tests() {
    print_status "Running tests..."
    npm run test
    if [ $? -eq 0 ]; then
        print_success "All tests passed"
    else
        print_error "Tests failed"
        exit 1
    fi
}

# Build project
build_project() {
    print_status "Building project..."
    npm run build
    if [ $? -eq 0 ]; then
        print_success "Project built successfully"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Deploy to Vercel
deploy_vercel() {
    print_status "Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    vercel --prod
    if [ $? -eq 0 ]; then
        print_success "Successfully deployed to Vercel!"
    else
        print_error "Vercel deployment failed"
        exit 1
    fi
}

# Deploy to Netlify
deploy_netlify() {
    print_status "Deploying to Netlify..."
    
    if ! command -v netlify &> /dev/null; then
        print_warning "Netlify CLI not found. Installing..."
        npm install -g netlify-cli
    fi
    
    netlify deploy --prod
    if [ $? -eq 0 ]; then
        print_success "Successfully deployed to Netlify!"
    else
        print_error "Netlify deployment failed"
        exit 1
    fi
}

# Deploy to Railway
deploy_railway() {
    print_status "Deploying to Railway..."
    
    if ! command -v railway &> /dev/null; then
        print_warning "Railway CLI not found. Installing..."
        npm install -g @railway/cli
    fi
    
    railway up
    if [ $? -eq 0 ]; then
        print_success "Successfully deployed to Railway!"
    else
        print_error "Railway deployment failed"
        exit 1
    fi
}

# Main deployment function
deploy() {
    echo ""
    echo "Select deployment platform:"
    echo "1. Vercel (Recommended)"
    echo "2. Netlify"
    echo "3. Railway"
    echo "4. All platforms"
    echo "5. Skip deployment"
    echo ""
    read -p "Enter your choice (1-5): " choice

    case $choice in
        1)
            deploy_vercel
            ;;
        2)
            deploy_netlify
            ;;
        3)
            deploy_railway
            ;;
        4)
            deploy_vercel
            deploy_netlify
            deploy_railway
            ;;
        5)
            print_warning "Skipping deployment"
            ;;
        *)
            print_error "Invalid choice"
            exit 1
            ;;
    esac
}

# Environment setup
setup_env() {
    print_status "Setting up environment..."
    
    if [ ! -f ".env" ]; then
        if [ -f ".env.example" ]; then
            print_warning ".env file not found. Copying from .env.example"
            cp .env.example .env
            print_warning "Please update .env file with your actual values before deployment"
        else
            print_error ".env.example file not found. Cannot set up environment."
            exit 1
        fi
    else
        print_success ".env file found"
    fi
}

# Git operations
setup_git() {
    print_status "Setting up Git repository..."
    
    if [ ! -d ".git" ]; then
        print_status "Initializing Git repository..."
        git init
        git add .
        git commit -m "Initial commit"
        print_success "Git repository initialized"
    else
        print_success "Git repository already exists"
    fi
    
    # Ask for remote repository
    read -p "Enter your GitHub repository URL (or press Enter to skip): " repo_url
    if [ ! -z "$repo_url" ]; then
        git remote add origin "$repo_url"
        git push -u origin main
        print_success "Code pushed to GitHub"
    fi
}

# Main function
main() {
    echo "Starting deployment process..."
    echo ""
    
    # Checks
    check_node
    check_npm
    
    # Setup
    setup_env
    
    # Install and test
    install_dependencies
    
    # Ask if user wants to run tests
    read -p "Do you want to run tests before deployment? (y/n): " run_tests_choice
    if [ "$run_tests_choice" = "y" ] || [ "$run_tests_choice" = "Y" ]; then
        run_tests
    fi
    
    # Build
    build_project
    
    # Git setup
    read -p "Do you want to set up Git repository? (y/n): " git_choice
    if [ "$git_choice" = "y" ] || [ "$git_choice" = "Y" ]; then
        setup_git
    fi
    
    # Deploy
    read -p "Do you want to deploy now? (y/n): " deploy_choice
    if [ "$deploy_choice" = "y" ] || [ "$deploy_choice" = "Y" ]; then
        deploy
    fi
    
    echo ""
    print_success "🎉 Deployment process completed!"
    echo ""
    echo "Next steps:"
    echo "1. Update your .env file with production values"
    echo "2. Set up your database"
    echo "3. Configure your domain name"
    echo "4. Set up monitoring and analytics"
    echo ""
    echo "📚 Check the README.md for more detailed instructions"
    echo "🆘 Need help? Open an issue on GitHub"
    echo ""
    echo "Thank you for using Dina Business Platform! 🚀"
}

# Run main function
main
