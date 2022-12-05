import capitalize from '../capitalize'

describe('capitalize', () => {
  it('should capitalize my name', () => {
    expect(capitalize('eelis')).toBe('Eelis')
  })
})