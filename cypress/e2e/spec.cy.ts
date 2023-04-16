describe("template spec", () => {
  it("passes", () => {
    cy.visit('http://localhost:5173/');
cy.get('[data-testid=amount-input]').click();
cy.get('[data-testid=amount-input]').type('22.33');
cy.get('[data-testid=options-input]').click();
cy.get('[data-testid=options-input]').type('FJD');
cy.get('[data-testid=options-input]').click();
cy.get('[data-testid=options-input]').click();
cy.get('[data-testid=options-input]').type('TJS');
cy.get('[data-testid=options-input]').click();
cy.get('.switchButton').click();
cy.get('[data-testid=submit-button]').click();
cy.get('.con-form').submit();
  });
});
