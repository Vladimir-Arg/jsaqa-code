const { username, pass, username1, pass1 } = require("../lib/booksUser.js");
const { randomUsername, randomPass } = require("../lib/randomUser.js");

describe("test logins", () => {
  it("test correct login", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-auto > .ml-2").click();
    cy.get("#mail").type(username);
    cy.get("#pass").type(pass);
    cy.get("form > .ml-2").click();
    cy.contains("Добро пожаловать " + username).should("be.visible");
  });
  it("test wrong login", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-auto > .ml-2").click();
    cy.get("#mail").type(randomUsername());
    cy.get("#pass").type(randomPass());
    cy.get("form > .ml-2").click();
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });
  it("test cancel login", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-auto > .ml-2").click();
    cy.get("#mail").type(randomUsername());
    cy.get("#pass").type(randomPass());
    cy.get(".btn-dark").click();
    cy.get(".ml-auto > .ml-2").should("be.visible");
  });
  it("test abort login", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-auto > .ml-2").click();
    cy.get("#mail").type(randomUsername());
    cy.get("#pass").type(randomPass());
    cy.get('.close > [aria-hidden="true"]').click();
    cy.get(".ml-auto > .ml-2").should("be.visible");
  });
  it("test login without password", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-auto > .ml-2").click();
    cy.get("#mail").type(randomUsername());
    cy.get("form > .ml-2").click();
    cy.contains("Заполните это поле").should("be.visible");
  });
  it("test login without login", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ml-auto > .ml-2").click();
    cy.get("#pass").type(randomPass());
    cy.get("form > .ml-2").click();
    cy.contains("Заполните это поле").should("be.visible");
  });
});
