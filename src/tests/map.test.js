import map from '../map'

describe('map', () => {
  it('should turn ones to zeroes', () => {
    expect(map([1,0,1,0,1,0], number => number === 1 ? 0 : number)).toStrictEqual([0,0,0,0,0,0])
  })
})