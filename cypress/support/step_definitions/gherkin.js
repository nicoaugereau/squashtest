// Cypress reference
/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { getVar } from '../commands'

/**
 * Given
 */
Given(/^le navigateur est paramétré pour "(.*?)"$/, d => {
    cy.screen(d)
})
Given(/^le navigateur est paramétré pour "(.*?)" en mode "(portrait|paysage)"$/, (d, m) => {
    cy.screen(d, m).then(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'))
    })
})

Given(/^(l'utilisateur est|je suis) sur la page "(.*?)"$/, (a, texte) => {
    titre.libelle = texte
})

/**
 * When
 */
When(/^(l'utilisateur saisit|je saisis) les informations de connexion$/, () => {
    cy.fixture('datas').then(users => {
        dashboard.login(users.auth[getVar.codeDistributeur].user, users.auth[getVar.codeDistributeur].pass)
    })
})
When(/^(l'utilisateur saisit|je saisis) le login "(.*?)" et le mot de passe "(.*?)"$/, (a, user, pass) => {
    dashboard.username = user
    dashboard.password = pass
})
