import slice from '../slice'

describe('slice', () => {
  it('should not include last letter', () => {
    expect(slice('qwerty', 0, 5)).toStrictEqual(['q', 'w', 'e', 'r', 't'])
  })
})