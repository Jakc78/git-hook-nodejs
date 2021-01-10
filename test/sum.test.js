const sum = require("../src/sum")

it('Should return sum', () => {
    const result = sum(2, 5)
    expect(result).toBe(7)
})