import isEmpty from '../isEmpty'

describe('isEmpty', () => {
  const mapOne = new Map();
  const mapTwo= new Map();
  mapTwo.set('one', 1);
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
  it('check not empty array', () => {
    expect(isEmpty([1, 2, 3], () => false)).toBeEmpty
  })
  it('check not empty object', () => {
    expect(isEmpty({ 'a': 1 }, () => false)).toBeEmpty
  })
  it('check not empty string', () => {
    expect(isEmpty(('abc'), () => false)).toBeEmpty
  })
  it('check empty map', () => {
    expect(isEmpty((mapOne), () => true)).toBeEmpty
  })
  it('check not empty map', () => {
    expect(isEmpty((mapTwo), () => false)).toBeEmpty
  })
})