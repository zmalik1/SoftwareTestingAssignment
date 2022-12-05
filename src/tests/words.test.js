import words from '../words'

describe('words', () => {
  it('should return array of length 3', () => {
    expect(words('I am awesome').length).toBe(3)
  })
})