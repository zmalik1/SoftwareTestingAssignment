import camelCase from '../camelCase'

describe('camelCase', () => {
    it('returns camelCase', () => {
        expect(camelCase('Foo Bar')).toBe(camelCase('fooBar'))
    })
    it('returns camelCase', () => {
        expect(camelCase('--foo-bar--')).toBe(camelCase('fooBar'))
    })
    it('returns camelCase', () => {
        expect(camelCase('__FOO_BAR__')).toBe(camelCase('fooBar'))
    })
    it('already a camelCase', () => {
        expect(camelCase('fooBar')).toBe(camelCase('fooBar'))
    })
    it('if undefined string', () => {
        expect(() => camelCase(undefined)).not.toThrow()
    })
})