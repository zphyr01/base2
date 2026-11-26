import { mount } from 'cypress/react';
import BackendStatus from '../../src/components/BackendStatus';

describe('BackendStatus', () => {
    it('shows loading and then the successful status', () => {
        cy.intercept('GET', 'http://localhost:4000/api/health', {
            statusCode: 200,
            body: { status: 'ok' },
            delay: 300,
        }).as('health');

        mount(<BackendStatus />);

        cy.contains('Checking backend...').should('be.visible');
        cy.wait('@health');
        cy.contains('Backend says: ok').should('be.visible');
    });

    it('shows an error when the request fails', () => {
        cy.intercept('GET', 'http://localhost:4000/api/health', {
            forceNetworkError: true,
        });

        mount(<BackendStatus />);

        cy.contains('Could not reach the backend').should('be.visible');
    });
});