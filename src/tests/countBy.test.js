import countBy from '../countBy'

describe('countBy', () => {
    const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'betty', 'active': true },
       { 'user': 'fred', 'active': false }
    ]
    
    it('check object property', () => {
    const objPro = countBy(users, value => value.active)
    expect(objPro.hasOwnProperty(value => value.user === 'barney'))
    })

    it('check object property', () => {
        const objPro = countBy(users, value => value.active)
        expect(objPro.hasOwnProperty(value => value.user === 'betty'))
    })

    it('check object property', () => {
        const objPro = countBy(users, value => value.active)
        expect(objPro.hasOwnProperty(value => value.user === 'fred'))
    })

    it('return right amount when counting by active status', () => {
        const result = countBy(users, value => value.active)
        expect(result).toStrictEqual({'true': 2, 'false': 1})
    })
})