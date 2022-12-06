import words from '../words'

describe('words', () => {
  it('returns array of length 3', () => {
    expect(words('I am awesome').length).toBe(3)
  })

  it('returns empty array if given empty string', () => {
    expect(words('')).toBeEmpty()
  })  

  it('ignores unicode characters as words by default', () => {
    expect(words('fred, barney, & pebbles')).toStrictEqual(['fred', 'barney', 'pebbles'])
  })

  it('counts unicode characters as words if regex is given', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toStrictEqual(['fred', 'barney', '&', 'pebbles'])
  })

  it('throws if string is undefined', () => {
    expect(() => words(undefined)).toThrow()
  })

  it('does not throw if pattern is undefined', () => {
    expect(() => words('some string here', undefined)).not.toThrow()
  })
})