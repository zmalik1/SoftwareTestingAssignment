import isEmpty from '../isEmpty'

describe('isEmpty', () => {
  it('check empty array', () => {
    expect(isEmpty([], () => true)).toBeEmpty
  })
  it('check empty object', () => {
    expect(isEmpty({}, () => true)).toBeEmpty
  })
  it('check empty string', () => {
    expect(isEmpty('')).toBeEmpty
  })
  it('check null value', () => {
    expect(isEmpty(null)).toBe(true)
  })
})