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
})