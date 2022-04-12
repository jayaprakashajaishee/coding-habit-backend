const Sum = require('./Sum.cjs')

test('Adds two numbers', () => {
    expect(Sum(1,2)).toBe(3)
})

test('Returns a number ', () => {
    expect(typeof Sum(1,2)).toBe("number")
})

test('Works with negative numbers', () => {
    expect(Sum(2,-4)).toBe(-2)
})

