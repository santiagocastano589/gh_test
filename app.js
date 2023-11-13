function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  

  function volumenEsfera(radio) {
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
  }


  function division(num1, num2) {
    return num1 / num2;
  }
  


function valorAbsoluto(numero) {
    return Math.abs(numero);
}
  


function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * factorial(numero - 1);
}
  
module.exports = {
    areaTriangulo,
    volumenEsfera,
    division,
    valorAbsoluto,
    factorial,
};