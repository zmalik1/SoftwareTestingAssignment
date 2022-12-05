import filter from '../filter'

describe('filter', () => {
  it('should return only a', () => {
    expect(filter('abcabcabc', char => char === 'a')).toStrictEqual(['a', 'a', 'a'])
  })
})