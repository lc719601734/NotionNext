import { filterStarterBlogPosts } from '@/themes/starter/index'

describe('starter blog filters', () => {
  it('shows only selected categories and hides excluded tags', () => {
    const posts = [
      {
        title: '技术分享 A',
        category: ['技术分享'],
        tagItems: [{ name: '教程' }]
      },
      {
        title: '公司动态',
        category: ['新闻'],
        tagItems: [{ name: '公告' }]
      },
      {
        title: '技术分享 B',
        category: ['技术分享'],
        tagItems: [{ name: '公告' }]
      }
    ]

    const filtered = filterStarterBlogPosts(posts, {
      STARTER_BLOG_INCLUDE_CATEGORIES: ['技术分享'],
      STARTER_BLOG_EXCLUDE_TAGS: ['公告']
    })

    expect(filtered).toHaveLength(1)
    expect(filtered[0].title).toBe('技术分享 A')
  })
})
