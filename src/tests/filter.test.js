import filter from '../filter'


describe('filter', () => {
  it('should return only a', () => {
    expect(filter('abcabcabc', char => char === 'a')).toStrictEqual(['a', 'a', 'a'])
  })

  it('should be pure', () => {
    const thisShouldNotBeAffected = [1,0,0,0,1]
    const filtered = filter(thisShouldNotBeAffected, number => number === 1)
    expect(filtered)
      .toBeArray()
      .toEqual([1,1])

    expect(thisShouldNotBeAffected)
      .toBeArray()
      .toEqual([1,0,0,0,1])
  })

  it('should return empty array if no predicate is matched', () => {
    expect(filter([1,1,1,1], number => number === 0))
      .toBeArray()
      .toEqual([])
  })

  it('should return undefined if array is undefined', () => {
    const array = undefined
    expect(filter(array, () => true))
      .toBeUndefined()
  })

  it('should not match uppercase when only lowercase if given', () => {
    const word = 'abcabc'
    expect(filter(word, char => char === 'A')).toEqual([])
  })
})