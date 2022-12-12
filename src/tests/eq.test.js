import eq from '../eq'

describe('eq', () => {
  const object = { 'a': 1 }
  const other = { 'a': 1 }
  it('compare objects', () => {
    expect(eq(object)).toEqual(eq(object), () => true )
  })
  it('compare NaN', () => {
    expect(eq(NaN)).toEqual(eq(NaN), () => true)
  })
  it('compare object with other', () => {
    expect(eq(object)).not.toEqual(expect(eq(other)), () => false);
  });
  it('compare strings', () => {
    expect(eq('a')).toEqual(eq('a'), () => true)
  })
  it('compare object with string', () => {
    expect(eq('a')).not.toEqual(expect(eq(object)), () => false);
  });
})