import get from '../get'

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }

  it('returns 3', () => {
    expect(get(object, 'a[0].b.c')).toBe(3)
  })

  it('returns 3', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
  })

  it('check when object to be null', () => {
    expect(get(object)).toBe(get(null))
  })

  it('returns default when default given', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default')
  })
})