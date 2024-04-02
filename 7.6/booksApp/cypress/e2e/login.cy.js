const { username, pass } = require("../lib/booksUser.js");
const { randomUsername, randomPass } = require("../lib/randomUser.js");
beforeEach(()=>{
  cy.visit("http://localhost:3000/");
})
describe("test logins", () => {
  it("test correct login", () => {
    cy.login(username, pass);
    cy.contains("Добро пожаловать " + username).should("be.visible");
  });
  it("test wrong login", () => {
    cy.login(randomUsername(), randomPass());
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });
  it("test cancel login", () => {
    cy.get(".ml-auto > .ml-2").click();
    cy.get("#mail").type(randomUsername());
    cy.get("#pass").type(randomPass());
    cy.get(".btn-dark").click();
    cy.get(".ml-auto > .ml-2").should("be.visible");
  });
  it("test abort login", () => {
    cy.get(".ml-auto > .ml-2").click();
    cy.get("#mail").type(randomUsername());
    cy.get("#pass").type(randomPass());
    cy.get('.close > [aria-hidden="true"]').click();
    cy.get(".ml-auto > .ml-2").should("be.visible");
  });
  it("test login without password", () => {
    cy.login(randomUsername(), null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
    })
  });
  it("test login without login", () => {
    cy.login(null, randomPass());
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
    })
  });
});
describe("test add books", () => {
  beforeEach(()=>{
    cy.login(username, pass);
    cy.contains("Добро пожаловать " + username).should("be.visible");
  });
  it("test add a book in library", () => {
    cy.contains("Add new").click();
    cy.get('#title').type("BookTitle");
    cy.get('#description').type("BookDescription");
    cy.get('#fileCover')
    cy.get('#fileBook')
    cy.get('#authors').type("authors");
    cy.contains("Submit").click();
  });
  it("test add book in favorite", () => {
    cy.contains('Add to favorite').click();
    cy.contains("Favorites").click();
    cy.contains('BookTitle').should("be.visible");
  });
  it("test delete book from favorite", () => {
    cy.contains("Favorites").click();
    cy.contains('BookTitle').should("be.visible");
    cy.contains('Delete from favorite').click();
  });
});