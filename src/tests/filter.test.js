import filter from '../filter'

test('filter something', () => {
    expect(filter('abcabcabc', c => c === 'a')).toStrictEqual(['a', 'a', 'a'])
})