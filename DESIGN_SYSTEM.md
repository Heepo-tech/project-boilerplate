# Minimalist Pastel Design System

A comprehensive design system inspired by elegant, minimalist aesthetics with warm pastel colors and sophisticated typography.

## Color Palette

### Primary Colors

```css
--primary-cream: #f8f7f3 /* Main background - warm off-white */
  --primary-soft-blue: #e8f2ff /* Soft blue accent */
  --primary-pale-rose: #fdf2f2 /* Subtle warm accent */ --primary-sage: #f0f4f0
  /* Soft green accent */ --primary-lavender: #f5f2ff /* Gentle purple accent */;
```

### Text Colors

```css
--text-primary: #2d3748 /* Deep charcoal for main text */
  --text-secondary: #4a5568 /* Medium gray for secondary text */
  --text-muted: #718096 /* Light gray for muted text */ --text-accent: #3182ce
  /* Blue accent for links */;
```

### Neutral Colors

```css
--neutral-white: #fefefe /* Pure white with warmth */ --neutral-light: #f7f7f5
  /* Light warm gray */ --neutral-medium: #e2e4e1 /* Medium warm gray */
  --neutral-dark: #a0a4a0 /* Dark warm gray */;
```

### Semantic Colors (Pastel Variants)

```css
--success-pastel: #e8f5e8 /* Soft green */ --warning-pastel: #fff8e1
  /* Soft yellow */ --error-pastel: #ffebeb /* Soft red */
  --info-pastel: #e8f2ff /* Soft blue */;
```

## Typography

### Font Family

- **Primary**: Playfair Display (Serif) - For headings and main content
- **Secondary**: System sans-serif stack - For UI elements and captions

### Typography Scale

- **Display**: 3.5rem (56px) - Hero headlines
- **H1**: 2.5rem (40px) - Page titles
- **H2**: 2rem (32px) - Section headers
- **H3**: 1.5rem (24px) - Subsection headers
- **Body Large**: 1.125rem (18px) - Lead text
- **Body**: 1rem (16px) - Regular text
- **Body Small**: 0.875rem (14px) - Secondary text
- **Caption**: 0.75rem (12px) - Metadata and captions

### Typography Guidelines

- Line height: 1.7 for body text (excellent readability)
- Letter spacing: Slightly tighter for large headings (-0.02em to -0.01em)
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## Spacing System

### Minimalist Spacing Scale

```css
--space-xs: 0.5rem (8px) --space-sm: 0.75rem (12px) --space-md: 1rem (16px)
  --space-lg: 1.5rem (24px) --space-xl: 2rem (32px) --space-2xl: 3rem (48px)
  --space-3xl: 4rem (64px) --space-4xl: 6rem (96px);
```

### Layout Guidelines

- **Container max-width**: 1200px for optimal reading
- **Content max-width**: 800px for text-heavy sections
- **Generous white space**: Use larger spacing values for breathing room
- **Consistent vertical rhythm**: Use spacing scale consistently

## Border Radius & Shadows

### Border Radius

```css
--radius-sm: 0.375rem (6px) - Small elements --radius-md: 0.5rem (8px) -
  Standard components --radius-lg: 0.75rem (12px) - Cards and containers
  --radius-xl: 1rem (16px) - Large components --radius-full: 9999px - Circular
  elements;
```

### Shadows (Subtle & Soft)

```css
--shadow-soft:
  0 1px 3px rgba(0, 0, 0, 0.05),
  0 1px 2px rgba(0, 0, 0, 0.02) --shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.04),
  0 2px 4px rgba(0, 0, 0, 0.03) --shadow-large: 0 10px 15px rgba(0, 0, 0, 0.06),
  0 4px 6px rgba(0, 0, 0, 0.04);
```

## Component Styling Recommendations

### Cards

```css
.card-minimal {
  background: var(--neutral-white);
  border: 1px solid var(--neutral-medium);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: var(--space-xl);
}
```

### Notification Banners

```css
.notification-banner {
  background: var(--primary-soft-blue);
  border: 1px solid #d6e8ff;
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-lg);
  color: var(--text-accent);
}
```

### Buttons

- **Primary**: Blue accent background with white text
- **Secondary**: White background with blue accent border
- **Ghost**: Transparent background with accent color text
- **Subtle hover states**: Slight opacity or color shifts

### Navigation

- **Minimal approach**: Simple text links with subtle underlines on hover
- **Clean spacing**: Use consistent padding and margins
- **Sticky positioning**: For persistent navigation with soft shadow

### Forms

- **Input fields**: Light background with subtle borders
- **Focus states**: Blue accent outline with offset
- **Placeholder text**: Use muted text color
- **Validation**: Use pastel semantic colors for states

## Layout Patterns

### Hero Section

- **Centered content** with generous top/bottom spacing
- **Large typography** with display or H1 styles
- **Subtle background** using primary cream color
- **Minimal call-to-action** buttons

### Content Sections

- **Maximum reading width**: 800px for optimal readability
- **Consistent vertical spacing**: Use 2xl to 4xl spacing between sections
- **Clean typography hierarchy**: Clear distinction between heading levels

### Grid Systems

- **Generous gutters**: Use large spacing for breathing room
- **Responsive breakpoints**: Mobile-first approach
- **Asymmetric layouts**: Vary column widths for visual interest

## Accessibility Guidelines

### Color Contrast

- All text meets WCAG AA standards
- Link colors provide sufficient contrast
- Focus states are highly visible

### Typography

- Minimum 16px font size for body text
- Generous line height (1.7) for readability
- Clear hierarchy with consistent spacing

### Interactive Elements

- Sufficient touch targets (44px minimum)
- Clear focus indicators
- Keyboard navigation support

## Implementation Notes

### CSS Custom Properties

All design tokens are implemented as CSS custom properties for easy theming and maintenance.

### Responsive Design

- Mobile-first approach with progressive enhancement
- Fluid typography scaling
- Consistent spacing across breakpoints

### Performance

- Web fonts are loaded with display=swap for better performance
- Minimal CSS footprint with design system approach
- Optimized for fast rendering

### Browser Support

- Modern browsers with CSS custom properties support
- Graceful degradation for older browsers
- Progressive enhancement approach

## Usage Examples

### Personal Website/Portfolio

Perfect for:

- Professional portfolios
- Personal blogs
- Creative showcases
- Minimalist business sites

### Brand Characteristics

This design system conveys:

- **Sophistication**: Through careful typography and spacing
- **Approachability**: Via warm colors and soft edges
- **Professionalism**: With clean, consistent patterns
- **Creativity**: Through thoughtful color choices and layout
