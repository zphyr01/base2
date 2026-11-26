describe ("Backend health API", () => {
    it("returns a healthy status", () => {
        cy.request('GET', 'http://localhost:4000/api/health').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.deep.equal({
                status: 'ok',
                service: 'bit-api',
            })
        });
    });
});

describe('Home page backend integration', () => {
  it('shows the backend health status', () => {
    cy.intercept('GET', 'http://localhost:4000/api/health').as('health');

    cy.visit('/');

    cy.wait('@health')
      .its('response.statusCode')
      .should('equal', 200);

    cy.contains('p', 'Backend says: ok').should('be.visible');
  });
});