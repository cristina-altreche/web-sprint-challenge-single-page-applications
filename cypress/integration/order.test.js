describe("Input", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3000/Form");
    cy.url().should("include", "http://localhost:3000/Form");
  });

  it("can type text to text area", () => {
    cy.get("textarea[name=instructions]")
      .type("I can type here")
      .should("have.value", "I can type here");
  });

  it("can get and select multiple checkboxs", () => {
    cy.get("input[name=pepperoni]").check();
    cy.get("input[name=sausage]").check();
    cy.get("input[name=pineapple]").check();
    cy.get("input[name=extraCheese]").check();
  });

  it("can submit form", () => {
    cy.get("form").submit();
  });
});
