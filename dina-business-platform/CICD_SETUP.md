# CI/CD Setup Guide

This guide will help you set up Continuous Integration and Continuous Deployment for the Dina Business Platform.

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git
- GitHub account
- Vercel account (for deployment)

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dinaali1111/dina-business-platform.git
   cd dina-business-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your actual values.

4. **Set up database**
   ```bash
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

## Testing Setup

### Unit Tests
We use Jest and React Testing Library for unit tests.

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### E2E Tests
We use Playwright for end-to-end testing.

```bash
# Install Playwright browsers
npx playwright install

# Run E2E tests
npm run test:e2e

# Run E2E tests in headed mode
npx playwright test --headed
```

## CI/CD Pipeline

Our GitHub Actions workflow includes:

1. **Lint and Type Check** - ESLint and TypeScript validation
2. **Unit Tests** - Jest tests with coverage
3. **Build** - Next.js production build
4. **Deploy** - Automatic deployment to Vercel on main branch

## GitHub Secrets Setup

For deployment to work, you need to add these secrets to your GitHub repository:

### Vercel Deployment
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Generate tokens and get project details
3. Add to GitHub repository secrets:
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

### Optional: Lighthouse CI
- `LHCI_GITHUB_APP_TOKEN`: For automated performance monitoring

## Deployment Options

### Vercel (Recommended)
```bash
npm run deploy:vercel
```

### Netlify
```bash
npm run deploy:netlify
```

### Manual Deployment
```bash
npm run build
npm run start
```

## Performance Monitoring

We use Lighthouse CI for automated performance monitoring. Reports are generated on each deployment and include:

- Performance metrics
- Accessibility scores
- Best practices validation
- SEO optimization checks

## Code Quality

### ESLint
```bash
npm run lint
npm run lint:fix
```

### TypeScript
```bash
npm run type-check
```

## Database Management

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Create and run migrations
npm run db:migrate

# Reset database
npm run db:reset

# Open Prisma Studio
npm run db:studio
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Troubleshooting

### Common Issues

1. **Tests failing locally**
   - Make sure all dependencies are installed: `npm ci`
   - Clear Jest cache: `npx jest --clearCache`

2. **Build failing**
   - Check TypeScript errors: `npm run type-check`
   - Check linting errors: `npm run lint`

3. **Database issues**
   - Reset database: `npm run db:reset`
   - Check environment variables

4. **CI/CD pipeline failing**
   - Verify GitHub secrets are set correctly
   - Check build logs for specific errors

### Getting Help

- Check existing [GitHub Issues](https://github.com/dinaali1111/dina-business-platform/issues)
- Create a new issue with detailed description
- Contact the maintainers

## Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run type-check` | Run TypeScript checks |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage |
| `npm run test:e2e` | Run E2E tests |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to database |
| `npm run db:migrate` | Run database migrations |
| `npm run db:studio` | Open Prisma Studio |
| `npm run deploy:vercel` | Deploy to Vercel |
| `npm run deploy:netlify` | Deploy to Netlify |
