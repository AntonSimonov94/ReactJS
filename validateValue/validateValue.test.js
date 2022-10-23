const validateValue = require("./validateValue")


test('Входит в диапозон', () => {
    expect(validateValue(50)).toBe(true)
})