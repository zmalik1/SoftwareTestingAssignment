import slice from '../slice'

describe('slice', () => {
  it('does not include the element at the end index', () => {
    expect(slice('qwerty', 0, 5)).toStrictEqual(['q', 'w', 'e', 'r', 't'])
  })

  it('does not throw if index is out of bounds', () => {
    expect(() => slice('asdf', 0, 6)).not.toThrow()
  })

  it('returns the remaining elements if end is undefined', () => {
    expect(slice('asdf', 2)).toStrictEqual(['d', 'f'])
  })

  it('return elements from the end if index is negative', () => {
    expect(slice('asdf', -1)).toStrictEqual(['f'])
  })

  it('return empty array if start is greater than end', () => {
    expect(slice([1,2,3,4,5], 2, 1)).toBeEmpty()
  })
})