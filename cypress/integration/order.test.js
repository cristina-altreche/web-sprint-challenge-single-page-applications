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
});
