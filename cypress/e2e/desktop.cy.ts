import { InputText } from "./../../src/components/shared/inputs";
describe("desktop Application home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it('should convert 1 ils to eur and show its 0.25', () => {
    cy.wait(2000);
    cy.get("[data-testid=amount-input]").click();
    cy.get("[data-testid=amount-input]").type("1");
    cy.get("[data-testid=options-input]").eq(0).select("ILS");
    cy.get("[data-testid=options-input]").eq(1).select("EUR");
    cy.get("[data-testid=submit-button]").click();
    cy.wait(2000)
    cy.contains('0.25').should('be.visible')
  })
  it('should switch between', () => {
    cy.wait(2000);
    cy.get("[data-testid=amount-input]").click();
    cy.get("[data-testid=amount-input]").type("1");
    cy.get("[data-testid=options-input]").eq(0).select("ILS");
    cy.get("[data-testid=options-input]").eq(1).select("EUR");
    cy.get("[data-testid=switch-button]").click();
    cy.get("[data-testid=options-input]").eq(0).should('have.value', 'EUR');
    cy.get("[data-testid=options-input]").eq(1).should('have.value', 'ILS');

  })

  it("should move to about page between", () => {
    cy.wait(2000);
    cy.get(".con-MenoIcon").click();
    cy.get(".menuOption").eq(1).click();
    cy.get(".con-MenoIcon").click();
    cy.get(".menuOption").eq(0).click();

   
  });
});
