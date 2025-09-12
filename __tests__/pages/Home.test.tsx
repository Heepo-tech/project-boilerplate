import { render, screen } from '@testing-library/react'

import Home from '@/app/page'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { alt: string; [key: string]: unknown }) => {
    const { priority, ...otherProps } = props
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...otherProps} data-priority={priority} />
  },
}))

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)

    const nextLogo = screen.getByAltText('Next.js logo')
    expect(nextLogo).toBeInTheDocument()
  })

  it('renders getting started text', () => {
    render(<Home />)

    const gettingStartedText = screen.getByText(/Get started by editing/)
    expect(gettingStartedText).toBeInTheDocument()
  })

  it('renders deploy button', () => {
    render(<Home />)

    const deployButton = screen.getByRole('link', { name: /deploy now/i })
    expect(deployButton).toBeInTheDocument()
    expect(deployButton).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com')
    )
  })

  it('renders documentation link', () => {
    render(<Home />)

    const docsLink = screen.getByRole('link', { name: /read our docs/i })
    expect(docsLink).toBeInTheDocument()
    expect(docsLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/docs')
    )
  })

  it('renders footer links', () => {
    render(<Home />)

    const learnLink = screen.getByRole('link', { name: /learn/i })
    const examplesLink = screen.getByRole('link', { name: /examples/i })
    const nextjsLink = screen.getByRole('link', { name: /go to nextjs.org/i })

    expect(learnLink).toBeInTheDocument()
    expect(examplesLink).toBeInTheDocument()
    expect(nextjsLink).toBeInTheDocument()
  })
})
