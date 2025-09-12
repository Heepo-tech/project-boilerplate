import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const pagesDirectory = path.join(process.cwd(), 'content/pages')

export interface PostData {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  published: boolean
  readingTime: string
  content: string
}

export interface PageData {
  slug: string
  title: string
  description: string
  content: string
}

// Ensure directories exist
function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

export function getAllPosts(): PostData[] {
  ensureDirectoryExists(postsDirectory)

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))

  const allPostsData = fileNames
    .map(fileName => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        readingTime: readingTime(content).text,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Anonymous',
        tags: data.tags || [],
        published: data.published !== false,
      } as PostData
    })
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allPostsData
}

export function getPostBySlug(slug: string): PostData | null {
  ensureDirectoryExists(postsDirectory)

  const realSlug = slug.replace(/\.mdx?$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fullPathMdx = path.join(postsDirectory, `${realSlug}.mdx`)

  let filePath = ''
  if (fs.existsSync(fullPath)) {
    filePath = fullPath
  } else if (fs.existsSync(fullPathMdx)) {
    filePath = fullPathMdx
  }

  if (!filePath) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    content,
    readingTime: readingTime(content).text,
    title: data.title || realSlug,
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    author: data.author || 'Anonymous',
    tags: data.tags || [],
    published: data.published !== false,
  }
}

export function getAllPages(): PageData[] {
  ensureDirectoryExists(pagesDirectory)

  if (!fs.existsSync(pagesDirectory)) {
    return []
  }

  const fileNames = fs
    .readdirSync(pagesDirectory)
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))

  const allPagesData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.(md|mdx)$/, '')
    const fullPath = path.join(pagesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      title: data.title || slug,
      description: data.description || '',
    } as PageData
  })

  return allPagesData
}

export function getPageBySlug(slug: string): PageData | null {
  ensureDirectoryExists(pagesDirectory)

  const realSlug = slug.replace(/\.mdx?$/, '')
  const fullPath = path.join(pagesDirectory, `${realSlug}.md`)
  const fullPathMdx = path.join(pagesDirectory, `${realSlug}.mdx`)

  let filePath = ''
  if (fs.existsSync(fullPath)) {
    filePath = fullPath
  } else if (fs.existsSync(fullPathMdx)) {
    filePath = fullPathMdx
  }

  if (!filePath) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    content,
    title: data.title || realSlug,
    description: data.description || '',
  }
}

export function getPostSlugs(): string[] {
  ensureDirectoryExists(postsDirectory)

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
    .map(name => name.replace(/\.(md|mdx)$/, ''))
}

export function getPageSlugs(): string[] {
  ensureDirectoryExists(pagesDirectory)

  if (!fs.existsSync(pagesDirectory)) {
    return []
  }

  return fs
    .readdirSync(pagesDirectory)
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
    .map(name => name.replace(/\.(md|mdx)$/, ''))
}
