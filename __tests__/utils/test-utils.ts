import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

// Add providers here if you have any (e.g., Theme, Context, etc.)
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return children as ReactElement
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

// Common test utilities
export const mockNextImage = {
  src: '/test-image.jpg',
  alt: 'Test image',
  width: 100,
  height: 100,
}

export const mockNextRouter = {
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  push: jest.fn(),
  pop: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: true,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false,
}
