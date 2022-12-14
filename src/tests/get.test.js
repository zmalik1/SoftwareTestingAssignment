import get from '../get'

describe('get', () => {
    function objPath(object, path){
      return path.match().reduce ((r, k) => r[k], object );
    }
    const object = { 'a': [{ 'b': { 'c': 3 } }] }

  it('compare objects', () => {
    expect(get(objPath(object, 'a[0].b.c')))
  })
})