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

    const heading = screen.getByRole('heading', {
      name: /next\.js landing page boilerplate/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders production ready badge', () => {
    render(<Home />)
    expect(
      screen.getByText(/production ready boilerplate/i)
    ).toBeInTheDocument()
  })

  it('renders get started section', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /get started in minutes/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/npm run dev/i)).toBeInTheDocument()
  })

  it('renders tech stack section', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /complete tech stack/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Next.js 15/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/Core Stack/i)).toBeInTheDocument()
    expect(screen.getByText(/UI & UX/i)).toBeInTheDocument()
  })
})
