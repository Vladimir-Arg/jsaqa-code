describe("pets test api", () => {
    it("create new pet, get pet, selete pet", () => {
        let petId = 4545;
      cy.request(`POST`, `/pet`, {
        id: petId,
        name: "Dominik",
        photoUrl: [],
        tags: []
      }).then((response) => {
        expect(response.status).be.eq(200)
        cy.log(JSON.stringify(response.body))
        // expect(Response.body).be.eql({
        //   id: petId,
        //   name: "Dominik",
        //   photoUrl: [],
        //   tags: [],
        // })
        cy.request(`/pet/${petId}`).then((response) => {
            expect(response.status).be.eq(200)
            cy.log(JSON.stringify(response.body))
            cy.request(`DELETE`,`/pet/${response.body.id}`).then((response) => {
                expect(response.status).be.eq(200)
            })
        })
    })
  })
})
