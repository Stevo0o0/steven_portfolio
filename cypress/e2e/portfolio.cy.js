describe("Portfolio Full Flow", () => {
  const email = `steven_${Date.now()}@test.com`;
  const password = "123456";

  it("Sign Up", () => {
    cy.visit("http://localhost:3000/signup");

    cy.url().should("include", "/signup");

    cy.get('input[name="firstname"]', { timeout: 10000 }).should("be.visible").type("Steven");
    cy.get('input[name="lastname"]').type("Ikharo");
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.contains("button", "Sign Up").click();

    cy.url().should("include", "/signin");
  });

  it("Sign In", () => {
    cy.visit("http://localhost:3000/signin");

    cy.get('input[name="email"]', { timeout: 10000 }).should("be.visible").clear().type(email);
    cy.get('input[name="password"]').clear().type(password);

    cy.contains("button", "Sign In").click();

    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("exist");
  });

  it("Add Project", () => {
    cy.visit("http://localhost:3000/signin");

    cy.get('input[name="email"]', { timeout: 10000 }).should("be.visible").clear().type(email);
    cy.get('input[name="password"]').clear().type(password);
    cy.contains("button", "Sign In").click();

    cy.url().should("include", "/dashboard");

    cy.visit("http://localhost:3000/projects/add");

    cy.get('input[name="title"]', { timeout: 10000 }).should("be.visible").type("Cypress Project");
    cy.get('textarea[name="description"]').type("Test project");
    cy.get('input[name="techStack"]').type("React");
    cy.get('input[name="keyFeatures"]').type("Testing");
    cy.get('input[name="completion"]').type("2026-04-10");

    cy.contains("button", "Add Project").click();

    cy.url().should("include", "/projects");
    cy.contains("Cypress Project").should("exist");
  });

  it("Edit Project", () => {
    cy.visit("http://localhost:3000/signin");

    cy.get('input[name="email"]', { timeout: 10000 }).should("be.visible").clear().type(email);
    cy.get('input[name="password"]').clear().type(password);
    cy.contains("button", "Sign In").click();

    cy.url().should("include", "/dashboard");

    cy.visit("http://localhost:3000/projects");
    cy.contains("Cypress Project", { timeout: 10000 }).should("exist");
    cy.contains("Cypress Project")
      .parent()
      .contains("Edit")
      .click();

    cy.get('input[name="title"]', { timeout: 10000 }).should("be.visible").clear().type("Updated Cypress Project");

    cy.contains("button", "Update Project").click();

    cy.url().should("include", "/projects");
    cy.contains("Updated Cypress Project").should("exist");
  });

  it("Sign Out", () => {
    cy.visit("http://localhost:3000/signin");

    cy.get('input[name="email"]', { timeout: 10000 }).should("be.visible").clear().type(email);
    cy.get('input[name="password"]').clear().type(password);
    cy.contains("button", "Sign In").click();

    cy.url().should("include", "/dashboard");

    cy.contains("button", "Sign Out").click();

    cy.url().should("include", "/signin");
  });
});