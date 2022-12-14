import get from '../get'

describe('get', () => {
  function objPath(object, path){
    return path.match().reduce ((r, k) => r[k], object );
  }
  const object = { 'a': [{ 'b': { 'c': 3 } }] }

  it('path', () => {
    expect(get(objPath(object, 'a[0].b.c')))
  })

  it('returns default when default given', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default')
  })
})