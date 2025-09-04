# Contributing to Dina Business Platform

Thank you for your interest in contributing to Dina Business Platform! 🎉

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### 🐛 Reporting Bugs

1. **Check existing issues** to avoid duplicates
2. **Use the bug report template** when creating new issues
3. **Include steps to reproduce** the bug
4. **Add screenshots** if applicable

### 💡 Suggesting Features

1. **Check existing feature requests** to avoid duplicates
2. **Use the feature request template**
3. **Describe the use case** and benefits
4. **Include mockups** if you have them

### 🔧 Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/dina-business-platform.git
   cd dina-business-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Set up database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

### 📝 Making Changes

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update tests if needed

3. **Test your changes**
   ```bash
   npm run build
   npm run lint
   npm run type-check
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

## 📋 Pull Request Guidelines

### Before submitting:
- ✅ All tests pass
- ✅ Code follows existing style
- ✅ No TypeScript errors
- ✅ Updated documentation if needed
- ✅ Added tests for new features

### PR Title Format:
Use conventional commits format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## 🎯 Coding Standards

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible

### React Components
- Use functional components with hooks
- Follow React best practices
- Use proper prop typing

### Styling
- Use Tailwind CSS utility classes
- Follow responsive design principles
- Maintain consistent spacing

### File Structure
```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable components
│   ├── ui/          # Basic UI components
│   ├── sections/    # Page sections
│   └── admin/       # Admin-specific components
├── contexts/        # React contexts
├── lib/            # Utility libraries
└── utils/          # Helper functions
```

## 🧪 Testing

- Write tests for new features
- Update existing tests when needed
- Ensure all tests pass before submitting

## 📖 Documentation

- Update README.md for significant changes
- Add JSDoc comments for functions
- Update API documentation if applicable

## ❓ Questions?

Feel free to:
- Open an issue for questions
- Join our discussions
- Contact the maintainers

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🚀
