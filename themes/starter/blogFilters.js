import CONFIG, { starterConfig } from './config'

export function normalizeStarterBlogFilterList(value) {
  if (Array.isArray(value)) {
    return value
      .map(item => (typeof item === 'string' ? item.trim() : String(item).trim()))
      .filter(Boolean)
  }

  if (typeof value === 'string') {
    return value
      .split(/[\n,，]/)
      .map(item => item.trim())
      .filter(Boolean)
  }

  return []
}

export function filterStarterBlogPosts(posts = [], config = CONFIG) {
  const includeCategories = normalizeStarterBlogFilterList(
    config?.STARTER_BLOG_INCLUDE_CATEGORIES ??
      starterConfig('STARTER_BLOG_INCLUDE_CATEGORIES', [])
  )
  const excludeCategories = normalizeStarterBlogFilterList(
    config?.STARTER_BLOG_EXCLUDE_CATEGORIES ??
      starterConfig('STARTER_BLOG_EXCLUDE_CATEGORIES', [])
  )
  const includeTags = normalizeStarterBlogFilterList(
    config?.STARTER_BLOG_INCLUDE_TAGS ??
      starterConfig('STARTER_BLOG_INCLUDE_TAGS', [])
  )
  const excludeTags = normalizeStarterBlogFilterList(
    config?.STARTER_BLOG_EXCLUDE_TAGS ??
      starterConfig('STARTER_BLOG_EXCLUDE_TAGS', [])
  )

  return (Array.isArray(posts) ? posts : []).filter(post => {
    const categories = Array.isArray(post?.category)
      ? post.category
      : post?.category
        ? [post.category]
        : []
    const tags = Array.isArray(post?.tagItems)
      ? post.tagItems.map(tag => tag?.name).filter(Boolean)
      : Array.isArray(post?.tags)
        ? post.tags
        : []

    if (includeCategories.length > 0) {
      const hasIncludedCategory = categories.some(category =>
        includeCategories.includes(category)
      )
      if (!hasIncludedCategory) {
        return false
      }
    }

    if (excludeCategories.length > 0) {
      const hasExcludedCategory = categories.some(category =>
        excludeCategories.includes(category)
      )
      if (hasExcludedCategory) {
        return false
      }
    }

    if (includeTags.length > 0) {
      const hasIncludedTag = tags.some(tag => includeTags.includes(tag))
      if (!hasIncludedTag) {
        return false
      }
    }

    if (excludeTags.length > 0) {
      const hasExcludedTag = tags.some(tag => excludeTags.includes(tag))
      if (hasExcludedTag) {
        return false
      }
    }

    return true
  })
}
