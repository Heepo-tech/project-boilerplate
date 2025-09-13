'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Zap,
  Shield,
  Palette,
  Code2,
  TestTube,
  Rocket,
  Star,
  CheckCircle,
  Copy,
} from 'lucide-react'
import { useEffect, useState } from 'react'

// Enhanced Tech Stack Data with Visual Elements
const techStackCategories = [
  {
    id: 'core',
    category: 'Core Stack',
    icon: Code2,
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
    features: [
      'App Router',
      'Concurrent Features',
      'Type Safety',
      'Utility-First',
    ],
    color: '#667eea',
  },
  {
    id: 'ui',
    category: 'UI & UX',
    icon: Palette,
    technologies: [
      'Framer Motion',
      'Radix UI',
      'Lucide React',
      'React Hook Form',
    ],
    features: [
      'Smooth Animations',
      'Accessible Components',
      'Beautiful Icons',
      'Form Validation',
    ],
    color: '#764ba2',
  },
  {
    id: 'dev',
    category: 'Development Tools',
    icon: Shield,
    technologies: [
      'ESLint + Prettier',
      'Husky + Lint-staged',
      'Commitizen',
      'Release Please',
      'TypeScript Config',
      'Git Hooks',
    ],
    features: [
      'Code Quality',
      'Pre-commit Checks',
      'Conventional Commits',
      'Automated Releases',
      'Type Safety',
      'Git Integration',
    ],
    color: '#42a5f5',
    isLarge: true,
  },
  {
    id: 'test',
    category: 'Testing',
    icon: TestTube,
    technologies: ['Jest', 'Playwright', 'Testing Library', 'Coverage'],
    features: [
      'Unit Tests',
      'E2E Testing',
      'Component Tests',
      'Coverage Reports',
    ],
    color: '#26a69a',
  },
  {
    id: 'perf',
    category: 'Performance',
    icon: Zap,
    technologies: [
      'Vercel Analytics',
      'Speed Insights',
      'Bundle Analyzer',
      'SEO',
    ],
    features: [
      'Web Vitals',
      'Performance Monitoring',
      'Size Analysis',
      'Search Optimization',
    ],
    color: '#ffa726',
  },
  {
    id: 'content',
    category: 'Content & More',
    icon: Rocket,
    technologies: [
      'MDX',
      'Gray Matter',
      'Reading Time',
      'Error Boundaries',
      'Structured Data',
    ],
    features: [
      'Markdown + JSX',
      'Frontmatter',
      'Reading Stats',
      'Error Handling',
      'SEO Data',
    ],
    color: '#ab47bc',
  },
]

// Scroll-triggered animation hook
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right'
    )
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, -50])

  useScrollAnimation()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="scrollable-page-container">
      <div className="content-wrapper">
        {/* Enhanced Hero Section */}
        <motion.section style={{ y: heroY }} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: 'var(--primary-soft-blue)',
                color: 'var(--text-accent)',
              }}
            >
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">
                Production Ready Boilerplate
              </span>
            </motion.div>

            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Next.js Landing Page
              <span
                className="block bg-gradient-to-r bg-clip-text text-transparent mt-2"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              >
                Boilerplate
              </span>
            </h1>

            <p
              className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              A comprehensive, production-ready Next.js boilerplate with
              cutting-edge tools, best practices, and stunning visual design for
              modern landing pages.
            </p>

            {/* Get Started Section - Moved Up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-12"
            >
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: 'var(--text-primary)' }}
              >
                Get Started in Minutes
              </h3>

              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  {
                    step: '1',
                    command:
                      'git clone https://github.com/Heepo-tech/project-boilerplate.git',
                    description: 'Clone the repository',
                  },
                  {
                    step: '2',
                    command: 'npm install',
                    description: 'Install dependencies',
                  },
                  {
                    step: '3',
                    command: 'npm run dev',
                    description: 'Start development server',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-4 rounded-xl border h-full flex flex-col"
                    style={{
                      backgroundColor: 'var(--neutral-white)',
                      border: '1px solid var(--neutral-medium)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold text-white"
                      style={{
                        background:
                          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      }}
                    >
                      {item.step}
                    </div>
                    <h4
                      className="font-semibold mb-2 flex-shrink-0"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.description}
                    </h4>
                    <div className="relative mt-auto">
                      <div
                        className="p-2 pr-12 rounded-lg font-mono text-sm min-h-[2.5rem] flex items-center"
                        style={{
                          backgroundColor: 'var(--neutral-light)',
                          color: 'var(--text-primary)',
                          wordBreak: 'break-all',
                        }}
                      >
                        {item.command}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          navigator.clipboard.writeText(item.command)
                        }
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-md transition-all duration-200 hover:bg-white/80"
                        style={{ color: 'var(--text-muted)' }}
                        title="Copy to clipboard"
                      >
                        <Copy className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Enhanced Bento Grid */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Complete Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-center mb-10 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Modern tools and frameworks carefully selected for optimal developer
            experience and production performance
          </motion.p>

          <div className="bento-grid">
            {/* Hero Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hero-showcase-card bento-card"
            >
              <div className="floating-shapes">
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center text-center">
                <div className="hero-content-backdrop">
                  <h3 className="text-2xl font-bold mb-3">Next.js 15 Ready</h3>
                  <p className="text-base opacity-90 mb-4">
                    Built with the latest Next.js features including App Router,
                    Server Components, and Turbopack for lightning-fast
                    development.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Cards */}
            {techStackCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bento-card bento-${category.id} card-type-${category.id} ${category.isLarge ? 'scroll-fade-in' : 'scroll-slide-right'}`}
              >
                <div className="mb-4">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {category.category}
                  </h3>
                </div>

                <div className="flex-1">
                  {category.isLarge ? (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {category.technologies.map(tech => (
                        <div
                          key={tech}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/50"
                        >
                          <span
                            className="text-sm font-medium"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {tech}
                          </span>
                          <CheckCircle
                            className="w-4 h-4"
                            style={{ color: category.color }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-1 mb-3">
                      {category.technologies.slice(0, 4).map(tech => (
                        <div key={tech} className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
