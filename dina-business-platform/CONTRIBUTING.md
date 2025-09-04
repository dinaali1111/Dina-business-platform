# Contributing to Dina Business Platform

First off, thank you for considering contributing to Dina Business Platform! 🎉

It's people like you that make Dina Business Platform such a great tool. We welcome contributions from everyone, whether you're a seasoned developer or just starting out.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## 📝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- **Be respectful** and inclusive to all contributors
- **Be constructive** in your feedback
- **Be patient** with new contributors
- **Be open** to different viewpoints and experiences

## 🤝 How Can I Contribute?

There are many ways to contribute to this project:

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if possible**
- **Specify your OS, browser, and version**

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **Include mockups or examples if possible**

### 🔧 Code Contributions

#### Types of Contributions We're Looking For

- Bug fixes
- Feature implementations
- Performance improvements
- Documentation improvements
- Tests
- UI/UX improvements
- Accessibility improvements
- Internationalization (i18n)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- Git
- Code editor (VS Code recommended)

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/dina-business-platform.git
   cd dina-business-platform
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/dinaali1111/dina-business-platform.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

6. **Set up database**
   ```bash
   npx prisma migrate dev
   npm run db:seed
   ```

7. **Start development server**
   ```bash
   npm run dev
   ```

## 🔄 Development Process

### Branching Strategy

We use GitHub Flow:

1. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** with clear, atomic commits
   ```bash
   git commit -m "feat: add user profile editing functionality"
   ```

3. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request**

### Commit Messages

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: new feature
- `fix`: bug fix
- `docs`: documentation changes
- `style`: formatting, missing semicolons, etc.
- `refactor`: code restructuring
- `test`: adding tests
- `chore`: maintenance tasks

**Examples:**
```
feat(auth): add two-factor authentication
fix(ui): resolve mobile navigation issue
docs(readme): update installation instructions
style(components): format header component
refactor(api): optimize database queries
test(auth): add login flow tests
chore(deps): update dependencies
```

### Testing

Before submitting your changes:

```bash
# Run all tests
npm test

# Run E2E tests
npm run test:e2e

# Run linting
npm run lint

# Run build to check for errors
npm run build
```

## 📝 Pull Request Process

1. **Ensure your code follows our style guidelines**
2. **Update documentation** if needed
3. **Add tests** for new functionality
4. **Ensure all tests pass**
5. **Update the changelog** if needed
6. **Fill out the PR template** completely

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added new tests
- [ ] Manual testing completed

## Screenshots
(If applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings
```

## 🎨 Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic
- Prefer functional components with hooks

### CSS/Styling

- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use semantic class names

### File Structure

```
src/
├── app/                 # Next.js pages
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── sections/       # Page-specific sections
├── lib/                # Utilities and helpers
├── types/              # TypeScript type definitions
└── contexts/           # React contexts
```

### Component Guidelines

```tsx
// ✅ Good
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
}
```

## 🧪 Testing Guidelines

### Unit Tests
- Test individual functions and components
- Use Jest and React Testing Library
- Aim for good test coverage

### E2E Tests
- Test complete user workflows
- Use Playwright
- Focus on critical user paths

### Test Examples

```tsx
// Component test
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });
});
```

## 📚 Documentation Guidelines

- Use clear, concise language
- Include code examples
- Update README if needed
- Document new features
- Keep documentation up to date

## 🏷️ Issue Labels

We use labels to organize issues:

- `bug` - Something isn't working
- `feature` - New feature request
- `documentation` - Documentation updates
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority: high` - High priority
- `status: in progress` - Being worked on

## 👥 Community

### Getting Help

- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Report bugs via GitHub Issues
- 📧 **Email**: Reach out to dinaali1111@gmail.com

### Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Social media shoutouts

## 📞 Contact

- **GitHub**: [@dinaali1111](https://github.com/dinaali1111)
- **Email**: dinaali1111@gmail.com

---

Thank you for contributing to Dina Business Platform! 🎉

Your efforts help make this project better for everyone.
