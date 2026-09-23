import { filterStarterBlogPosts } from '@/themes/starter/blogFilters'

describe('starter blog filters', () => {
  it('shows only posts with the real tool tag when configured', () => {
    const posts = [
      {
        title: '技术分享 A',
        category: ['技术分享'],
        tagItems: [{ name: '工具' }]
      },
      {
        title: '公司动态',
        category: ['新闻'],
        tagItems: [{ name: '公告' }]
      },
      {
        title: '技术分享 B',
        category: ['技术分享'],
        tagItems: [{ name: '工具' }]
      }
    ]

    const filtered = filterStarterBlogPosts(posts, {
      STARTER_BLOG_INCLUDE_TAGS: ['工具'],
      STARTER_BLOG_EXCLUDE_TAGS: ['公告']
    })

    expect(filtered).toHaveLength(2)
    expect(filtered.map(post => post.title)).toEqual([
      '技术分享 A',
      '技术分享 B'
    ])
  })
})
