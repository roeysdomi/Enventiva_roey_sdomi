
describe("test2", () => {
  it("tests test2", () => {
    cy.viewport(1422, 632);
    cy.visit("http://localhost:5173/");
    cy.wait(1000)

    cy.get("[data-testid=amount-input]").click();

    cy.get("[data-testid=amount-input]").type("22222");

    cy.get(
      "html > body > div:nth-child(1) > div > div > div.layout-con.h-full.w-full.flex.flex-row > div > div > div.con-currencyFormSection.flex-col.flex-center-center.w-\\[100\\%\\].md\\:w-\\[40\\%\\].h-full.relative.overflow-hidden > div.scroll-section.w-full.h-\\[100\\%\\].flex-col.gap-4.flex-center-center.overflow-scroll.overflow-x-hidden.md\\:overflow-y-hidden > form > div:nth-child(4) > select"
    ).select('GBP');

    cy.get(
      "html > body > div:nth-child(1) > div > div > div.layout-con.h-full.w-full.flex.flex-row > div > div > div.con-currencyFormSection.flex-col.flex-center-center.w-\\[100\\%\\].md\\:w-\\[40\\%\\].h-full.relative.overflow-hidden > div.scroll-section.w-full.h-\\[100\\%\\].flex-col.gap-4.flex-center-center.overflow-scroll.overflow-x-hidden.md\\:overflow-y-hidden > form > div:nth-child(4) > select"
    ).select("GBP");

    cy.get("[data-testid=switch-button] > div").click();

    cy.get("[data-testid=submit-button]").click();
  });
});
