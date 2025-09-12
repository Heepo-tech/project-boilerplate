import {
  cn,
  capitalize,
  formatCurrency,
  formatRelativeTime,
  debounce,
  generateId,
} from '@/utils/cn'

describe('cn utility', () => {
  it('combines class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('filters out falsy values', () => {
    expect(cn('class1', null, undefined, false, 'class2')).toBe('class1 class2')
  })

  it('handles empty input', () => {
    expect(cn()).toBe('')
  })
})

describe('capitalize utility', () => {
  it('capitalizes first letter and lowercases rest', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('WORLD')).toBe('World')
    expect(capitalize('tEST')).toBe('Test')
  })

  it('handles single character', () => {
    expect(capitalize('a')).toBe('A')
  })

  it('handles empty string', () => {
    expect(capitalize('')).toBe('')
  })
})

describe('formatCurrency utility', () => {
  it('formats USD by default', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56')
  })

  it('formats different currencies', () => {
    const result = formatCurrency(1234.56, 'EUR', 'de-DE')
    expect(result).toContain('1.234,56')
    expect(result).toContain('€')
  })

  it('handles zero', () => {
    expect(formatCurrency(0)).toBe('$0.00')
  })
})

describe('formatRelativeTime utility', () => {
  beforeAll(() => {
    // Mock current time
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2024-01-01T12:00:00Z'))
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('formats recent time as "just now"', () => {
    const date = new Date('2024-01-01T11:59:50Z') // 10 seconds ago
    expect(formatRelativeTime(date)).toBe('just now')
  })

  it('formats minutes ago', () => {
    const date = new Date('2024-01-01T11:55:00Z') // 5 minutes ago
    expect(formatRelativeTime(date)).toBe('5 minutes ago')
  })

  it('formats single minute ago', () => {
    const date = new Date('2024-01-01T11:59:00Z') // 1 minute ago
    expect(formatRelativeTime(date)).toBe('1 minute ago')
  })

  it('formats hours ago', () => {
    const date = new Date('2024-01-01T10:00:00Z') // 2 hours ago
    expect(formatRelativeTime(date)).toBe('2 hours ago')
  })
})

describe('debounce utility', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('delays function execution', () => {
    const func = jest.fn()
    const debouncedFunc = debounce(func, 100)

    debouncedFunc()
    expect(func).not.toHaveBeenCalled()

    jest.advanceTimersByTime(100)
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('cancels previous calls', () => {
    const func = jest.fn()
    const debouncedFunc = debounce(func, 100)

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()

    jest.advanceTimersByTime(100)
    expect(func).toHaveBeenCalledTimes(1)
  })
})

describe('generateId utility', () => {
  it('generates string of default length', () => {
    const id = generateId()
    expect(id).toHaveLength(8)
    expect(typeof id).toBe('string')
  })

  it('generates string of custom length', () => {
    const id = generateId(12)
    expect(id).toHaveLength(12)
  })

  it('generates unique IDs', () => {
    const id1 = generateId()
    const id2 = generateId()
    expect(id1).not.toBe(id2)
  })

  it('uses only valid characters', () => {
    const id = generateId(100)
    const validChars = /^[A-Za-z0-9]+$/
    expect(validChars.test(id)).toBe(true)
  })
})
