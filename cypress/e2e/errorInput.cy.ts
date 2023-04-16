import { InputText } from "../../src/components/shared/inputs";
describe("form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("check it deny incorrect input above the format #.##", () => {
    cy.wait(2000);
    cy.get("[data-testid=amount-input]").click();
    cy.get("[data-testid=amount-input]").type("2.345454");
    cy.get("[data-testid=submit-button]").click();
    cy.contains("Please choose").should("be.visible");
  });

  it("check it deny incorrect input above the format total number 999999999999999", () => {
    cy.wait(2000);
    cy.get("[data-testid=amount-input]").click();
    cy.get("[data-testid=amount-input]").type("999999999999999999999999999999");
    cy.get("[data-testid=submit-button]").click();
    cy.wait(1000);
    cy.contains("27236099999.73").should("be.visible");
  });

  it("check it deny incorrect input (text)", () => {
    cy.wait(2000);
    cy.get("[data-testid=amount-input]").click();
    cy.get("[data-testid=amount-input]").type("test");
    cy.get("[data-testid=submit-button]").click();
    cy.wait(1000);
    cy.contains("loading").should("not.exist");
  });
  it("check it deny incorrect input (minus)", () => {
    cy.wait(2000);
    cy.get("[data-testid=amount-input]").click();
    cy.get("[data-testid=amount-input]").type("-1234");
    cy.get("[data-testid=submit-button]").click();
    cy.wait(1000);
    cy.contains("loading").should("not.exist");
    cy.get("[data-testid=options-input]").eq(0).select("ILS");
  });
});
