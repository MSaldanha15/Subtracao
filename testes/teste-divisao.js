const { assert } = require("chai");
const divisao = require("../funcoes/funcao-divisao");

describe("Testando a função Divisão", function () {
  describe("1º teste: Usando 2 parametros", function () {
    it("Recebendo 2 parametro", async function () {
      const Resultado = await divisao(1, 1);
      assert.equal(Resultado, 1);
    });
  });
  describe("2º teste: Somente um parametro negativo e um positivo", function () {
    it("Recebendo somente um parametro negativo", async function () {
      const Resultado = await divisao(1, -1);
      assert.equal(Resultado, -1);
    });
  });
  describe("3º teste: Somente um parametro negativo", function () {
    it("Recebendo somente um parametro negativo", async function () {
      const Resultado = await divisao(-1);
      assert.equal(Resultado, -1);
    });
  });
  describe("4º teste: trabalhando com 1 valor menor que 1", function () {
    it("Recebendo valor em 10^-1", async function () {
      const Resultado = await divisao(0.5, 1);
      assert.equal(Resultado, 0.5);
    });
  });
  describe("5º teste: Trabalhando com 2 valores menores que 1", function () {
    it("Recebendo valores em 10^-1", async function () {
      const Resultado = await divisao(0.5, 0.25);
      assert.equal(Resultado, 2);
    });
  });
});
