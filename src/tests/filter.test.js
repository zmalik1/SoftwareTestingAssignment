import filter from '../filter'
describe('filter', () => {
  const products = [
    {
      Name: 'Apple',
      Price: 1.2,
      Available: true
    },
    {
      Name: 'Orange',
      Price: 2,
      Available: false
    },
    {
      Name: 'Cherry',
      Price: 0.5,
      Available: true
    },
    {
      Name: 'Pear',
      Price: 1,
      Available: true
    },
    {
      Name: 'Domestic Apple',
      Price: 2,
      Available: true
    }
  ]
  it('returns only a if predicate is equal to a', () => {
    expect(filter('abcabcabc', char => char === 'a')).toStrictEqual(['a', 'a', 'a'])
  })

  it('is pure', () => {
    const thisShouldNotBeAffected = [1,0,0,0,1]
    const filtered = filter(thisShouldNotBeAffected, number => number === 1)
    expect(filtered)
      .toBeArray()
      .toEqual([1,1])

    expect(thisShouldNotBeAffected)
      .toBeArray()
      .toEqual([1,0,0,0,1])
  })

  it('returns empty array if no predicate is matched', () => {
    expect(filter([1,1,1,1], number => number === 0))
      .toBeArray()
      .toBeEmpty()
  })

  it('returns undefined if array is undefined', () => {
    const array = undefined
    expect(filter(array, () => true))
      .toBeUndefined()
  })

  it('returns array of objects if matched with object property', () => {
    const filtered = filter(products, product => product.Available)
    expect(filtered.find(product => product.Name === 'Orange')).toBeUndefined()
    expect(filtered.length).toBe(4)
  })
})