import map from '../map'

describe('map', () => {
  it('turns ones to zeroes', () => {
    expect(map([1,0,1,0,1,0], number => number === 1 ? 0 : number)).toStrictEqual([0,0,0,0,0,0])
  })

  it('returns empty array if empty array is given', () => {
    expect(map([], () => true)).toBeEmpty()
  })

  it('returns empty array if undefined is given', () => {
    expect(map(undefined, () => true)).toBeEmpty()
  })

  it('throws if predicate is not given', () => {
    expect(() => map([1,2,3,4,5])).toThrow()
  })

  it('handles changing of type', () => {
    expect(map([1,2,3,4], number => number.toString())).toStrictEqual(['1', '2', '3', '4'])
  })

  it('does not care about type mismathing', () => {
    expect(map([1,0,1,0], number => number === 1 ? number.toString() : number)).toStrictEqual(['1', 0, '1', 0])
  })

})