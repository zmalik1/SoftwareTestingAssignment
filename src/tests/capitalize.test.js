import capitalize from '../capitalize'

describe('capitalize', () => {
  it('returns capitalized name', () => {
    expect(capitalize('john')).toBe('John')
  })

  it('capitalizes only the first word of multiple word string', () => {
    expect(capitalize('john is the test person')).toBe('John is the test person')
  })

  it('turns the rest of the string to lowercase', () => {
    expect(capitalize('JoHn iS tHe TEST perSOn')).toBe('John is the test person')
  })

  it('does not throw if string is undefined', () => {
    expect(() => capitalize(undefined)).not.toThrow()
  })

  it('return null if the string is null', () => {
    expect(capitalize(null)).toBeNull()
  })

  it('does not do anything if the string is already capitalized', () => {
    expect(capitalize('Capitalized')).toBe('Capitalized')
  })
})