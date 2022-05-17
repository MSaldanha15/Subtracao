const { assert } = require("chai");
const soma = require("../funcoes/funcao-soma");

describe("Testando a função Soma", function () {
  describe("1º teste: Somente um parametro", function () {
    it("Recebendo somente um parametro", async function () {
      const Resultado = await soma(1);
      assert.equal(Resultado, 1);
    });
  });
  describe("2º teste: Usando 2 parametros", function () {
    it("Recebendo 2 parametro", async function () {
      const Resultado = await soma(1, 1);
      assert.equal(Resultado, 2);
    });
  });
  describe("3º teste: Somente parametros negativos", function () {
    it("Recebendo valores negativos como parametro", async function () {
      const Resultado = await soma(-1, -1);
      assert.equal(Resultado, -2);
    });
  });
  describe("4º teste: Somente um parametro negativo e um positivo", function () {
    it("Recebendo somente um parametro negativo", async function () {
      const Resultado = await soma(1, -1);
      assert.equal(Resultado, 0);
    });
  });
  describe("5º teste: Somente um parametro negativo", function () {
    it("Recebendo somente um parametro negativo", async function () {
      const Resultado = await soma(-1);
      assert.equal(Resultado, -1);
    });
  });
  describe("6º teste: trabalhando com 1 valor menor que 1", function () {
    it("Recebendo valor em 10^-1", async function () {
      const Resultado = await soma(0.5, 1);
      assert.equal(Resultado, 1.5);
    });
  });
  describe("7º teste: Trabalhando com 2 valores menores que 1", function () {
    it("Recebendo valores em 10^-1", async function () {
      const Resultado = await soma(0.5, 0.25);
      assert.equal(Resultado, 0.75);
    });
  });
  describe("8º teste: Trabalhando com entradas anternando positivo e negativo", function () {
    it("Recebendo parametro negativo e positivo", async function () {
      const Resultado = await soma(1, -1, 1, -1);
      assert.equal(Resultado, 0);
    });
  });
});

