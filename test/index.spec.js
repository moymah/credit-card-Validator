let chai = require("chai");
let expect = chai.expect;
let creditCard = require("../lib/index.js");

describe("Retornar true para cartão de crédito válido", () => {
    it("Deve retornar true para um cartão de crédito válido (4916460392805686)", () => {
        expect(creditCard.cardValidator(4916460392805686)).to.equal(true);
    })
}) 

describe("Retornar false para cartão de crédito inválido", () => {
    it("Deve retornar false para um cartão de crédito inválido (12345678910)", () => {
        expect(creditCard.cardValidator(12345678910)).to.equal(false);
    })
    it("Deve retornar false para um cartão de crédito com todos caracteres repetidos (0000000000000000)", () => {
        expect(creditCard.cardValidator(0000000000000000)).to.equal(false);
    })
})