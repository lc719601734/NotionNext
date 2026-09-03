import { getMatchingLanguagePrefix } from '@/lib/utils/lang'

describe('getMatchingLanguagePrefix', () => {
  const pageIds = 'default-page,en:english-page,zh:chinese-page'

  it('matches a browser language with a region to its path prefix', () => {
    expect(getMatchingLanguagePrefix('en-US', pageIds)).toBe('en')
    expect(getMatchingLanguagePrefix('zh-CN', pageIds)).toBe('zh')
  })

  it('matches case-insensitively and returns an empty string when unavailable', () => {
    expect(getMatchingLanguagePrefix('EN_us', pageIds)).toBe('en')
    expect(getMatchingLanguagePrefix('fr-FR', pageIds)).toBe('')
  })
})