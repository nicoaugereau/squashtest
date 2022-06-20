/// <reference types="cypress" />

const environment = 'local'

describe(`Créer un burger et contrôler l'état de la commande`, () => {
    it('Playwright with Cypress', () => {
        cy.task('openPlaywright', 'safari')
    })

})
