const mult = require("../src/mult")

it('Should return mult', () => {
    const result = mult(3, 5)
    expect(result).toBe(15)
})