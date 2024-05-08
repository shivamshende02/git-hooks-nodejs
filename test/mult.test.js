const mult = require('../src/mult')

it('should return the multiple',() => {
    const result = mult(2,5)
    expect(result).toBe(10)
} )
