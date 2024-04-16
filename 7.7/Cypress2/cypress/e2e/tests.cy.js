import tests from "../fixtures/seats"

describe("test session search",()=> {
    beforeEach(() => {
        cy.visit("https://qamid.tmweb.ru");
    })

    it("should display 7 days",() => {
        cy.get(".page-nav__day").should("have.length", 7)
    })

    tests.forEach((test) => {
        it(test.name,() => {
            cy.get(".page-nav__day").eq(3).click()
            cy.contains("11:00").click()
            test.data.forEach((seat) => {
                cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
            })
            cy.get('.acceptin-button').click();
            cy.contains('Вы выбрали билеты:').should('be.visible');
        })
    })    
})