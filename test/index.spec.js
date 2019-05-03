let chai = require("chai");
let expect = chai.expect;
let creditCard = require("../lib/index.js");

describe("Retornar true para cartão de crédito válido", () => {
    it("Deve retornar true para um cartão de crédito válido", () => {
        expect(creditCard.cardValidator(4916460392805686)).to.equal(true);
    })
}) 

describe("Retornar false para cartão de crédito inválido", () => {
    it("Deve retornar false para um cartão de crédito inválido", () => {
        expect(creditCard.cardValidator(12345678910)).to.equal(false);
    })
})