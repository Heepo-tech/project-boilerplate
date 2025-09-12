import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('/')
  })

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Next.js/)
  })

  test('has main heading', async ({ page }) => {
    // Check for Next.js logo
    const logo = page.getByAltText('Next.js logo')
    await expect(logo).toBeVisible()
  })

  test('has getting started text', async ({ page }) => {
    // Check for getting started instructions
    await expect(page.getByText('Get started by editing')).toBeVisible()
  })

  test('has deploy button', async ({ page }) => {
    // Check for deploy button
    const deployButton = page.getByRole('link', { name: /deploy now/i })
    await expect(deployButton).toBeVisible()
    await expect(deployButton).toHaveAttribute('href', /vercel\.com/)
  })

  test('has documentation link', async ({ page }) => {
    // Check for documentation link
    const docsLink = page.getByRole('link', { name: /read our docs/i })
    await expect(docsLink).toBeVisible()
    await expect(docsLink).toHaveAttribute('href', /nextjs\.org\/docs/)
  })

  test('footer navigation works', async ({ page }) => {
    // Check footer links are present
    await expect(page.getByRole('link', { name: /learn/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /examples/i })).toBeVisible()
    await expect(
      page.getByRole('link', { name: /go to nextjs\.org/i })
    ).toBeVisible()
  })

  test('responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.getByAltText('Next.js logo')).toBeVisible()

    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 })
    await expect(page.getByAltText('Next.js logo')).toBeVisible()
  })
})
