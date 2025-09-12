# Next.js Landing Page Boilerplate

A comprehensive Next.js boilerplate specifically designed for building high-performance, modern landing pages with cutting-edge tools and best practices.

## 🚀 Features

### Core Stack

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[React 19](https://react.dev)** - Latest React with concurrent features

### UI & UX Enhancement

- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations and transitions
- **[Radix UI](https://www.radix-ui.com/)** - Accessible, unstyled UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** - Type-safe form handling
- **[CVA](https://cva.style/docs)** - Component variants with class-variance-authority

### Development Tools

- **[ESLint](https://eslint.org)** - Code linting with extended rules
- **[Prettier](https://prettier.io)** - Code formatting
- **[Husky](https://typicode.github.io/husky)** - Git hooks
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files
- **[Commitizen](http://commitizen.github.io/cz-cli/)** - Conventional commits

### Testing

- **[Jest](https://jestjs.io)** - Unit testing framework
- **[Testing Library](https://testing-library.com)** - Simple testing utilities
- **[Playwright](https://playwright.dev)** - End-to-end testing

### SEO & Analytics

- **[Vercel Analytics](https://vercel.com/analytics)** - Privacy-friendly analytics
- **[Vercel Speed Insights](https://vercel.com/docs/speed-insights)** - Performance monitoring
- **Structured Data** - Rich snippets for search engines
- **Advanced Meta Tags** - Complete Open Graph and Twitter Cards

### Performance & UX

- **[React Hot Toast](https://react-hot-toast.com/)** - Beautiful toast notifications
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** - Viewport-based animations
- **Loading States & Skeletons** - Enhanced user experience
- **Error Boundaries** - Graceful error handling

### Content Management

- **[MDX](https://mdxjs.com/)** - Markdown with JSX for blog content
- **[Gray Matter](https://github.com/jonschlinkert/gray-matter)** - Frontmatter parsing
- **[Reading Time](https://github.com/ngryman/reading-time)** - Estimated reading time
- **Dynamic Routing** - Automatic page generation from content

### Build & Deploy

- **[Release Please](https://github.com/googleapis/release-please)** - Automated releases
- **[Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)** - Sitemap generation
- **[Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)** - Bundle analysis
- **Performance Budgets** - Automated performance monitoring

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone this repository:

```bash
git clone <repository-url>
cd project-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers (optional, for E2E testing):

```bash
npm run playwright:install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Available Scripts

### Development

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing

- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:e2e:ui` - Run E2E tests with UI
- `npm run test:e2e:headed` - Run E2E tests in headed mode

### Tools

- `npm run commit` - Commit with Commitizen
- `npm run analyze` - Analyze bundle size
- `npm run audit:fix` - Fix npm audit issues

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility libraries
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Helper functions
├── __tests__/               # Unit tests
├── e2e/                     # End-to-end tests
├── public/                  # Static assets
├── .husky/                  # Git hooks
└── docs/                    # Documentation
```

## 🧪 Testing

### Unit Tests

Unit tests are located in `__tests__/` directory using Jest and Testing Library:

```bash
npm test                    # Run all tests
npm run test:watch         # Watch mode
npm run test:coverage      # With coverage
```

### End-to-End Tests

E2E tests are located in `e2e/` directory using Playwright:

```bash
npm run test:e2e           # Run E2E tests
npm run test:e2e:ui        # With UI mode
npm run test:e2e:headed    # In headed mode
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `prettier.config.js` - Prettier configuration
- `jest.config.js` - Jest configuration
- `playwright.config.ts` - Playwright configuration
- `.editorconfig` - Editor configuration
- `next-sitemap.config.js` - Sitemap configuration

## 🚀 Deployment

### Build

```bash
npm run build
```

This will create an optimized production build and generate sitemap automatically.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Environment Variables

Create `.env.local` for local development:

```env
SITE_URL=https://your-domain.com
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 📝 Git Workflow

This project uses conventional commits and automated releases:

### Making Commits

Use Commitizen for conventional commits:

```bash
npm run commit
```

### Pre-commit Hooks

Husky runs the following checks before each commit:

- ESLint with auto-fix
- Prettier formatting
- Type checking

### Releases

Releases are automated using Release Please. When you merge to main:

1. Release Please creates/updates a release PR
2. When the release PR is merged, it creates a GitHub release
3. Version bumping follows semantic versioning

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `npm run commit`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have any questions or need help, please open an issue in the GitHub repository.
