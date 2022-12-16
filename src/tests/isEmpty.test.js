import isEmpty from '../isEmpty'

describe('isEmpty', () => {
  const mapOne = new Map();
  const setOne = new Set();
  const myObject = {
    color: "Green",
    funt(){
      console.log(`Color is ${this.color}`);
    },
  };
  it('check empty map', () => {
    expect(isEmpty(mapOne)).toBe(true)
  })
  it('check empty set', () => {
    expect(isEmpty(setOne)).toBe(true)
  })
  it('check null value', () => {
    expect(isEmpty(null)).toBe(true)
  })
  it('check boolean to be true', () => {
    expect(isEmpty(true)).toBe(true)
  })
  it('check number', () => {
    expect(isEmpty(1)).toBe(true)
  })
  it('check array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })
  it('check string', () => {
    expect(isEmpty('abc')).toBe(false)
  })
  it('check object', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false)
  })
  it('Check prototype', () => {
    expect(isEmpty((Object.getPrototypeOf(myObject)), () => true)).toBeEmpty
  })
})