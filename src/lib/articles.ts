import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
  isPrivate?: boolean
  isFeatured: boolean
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles(includePrivate = false) {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // Filter out private articles unless explicitly requested
  const filteredArticles = includePrivate
    ? articles
    : articles.filter((article) => !article.isPrivate)

  return filteredArticles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
