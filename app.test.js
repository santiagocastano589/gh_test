const {
    areaTriangulo,
    volumenEsfera,
    division,
    valorAbsoluto,
    factorial,
} = require('./app.js');

test('El área de un triángulo de base 10 y altura 5 es 25', () => {
    expect(areaTriangulo(10, 5)).toBe(25);
});  

 
test('El volumen de una esfera de radio 3 es 113.097', () => {
    expect(volumenEsfera(3)).toBeCloseTo(113.097);
});

test('La división de 10 entre 5 es 2', () => {
    expect(division(10, 5)).toBe(2);
});

test('El valor absoluto de -10 es 10', () => {
    expect(valorAbsoluto(-10)).toBe(10);
});

test('El factorial de 7 es 5040', () => {
    expect(factorial(7)).toBe(5040);
});