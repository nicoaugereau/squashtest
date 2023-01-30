// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Commandes personnalisées
 *
 * Ajouter const { getVar, getElement } = require('support/commands.js')
 *
 * Usage :
 * cy.setVar('nomVariable', valeur)
 * console.log(getVar.nomVariable)
 *
 * cy.title().setElement('nomElement')
 * cy.get('.my-element').constains(getElement.nomElement)
 */
// Sauve une donnée en variable
export const getVar = {}
Cypress.Commands.add('setVar', (name, value) => {
    if (value) {
        getVar[name] = value
    }
    return getVar[name]
})
// Sauve les données d'un élément
export const getElement = {}
Cypress.Commands.add('setElement', { prevSubject: true }, (value, propName) => {
    console.log('setElement', value, propName)
    getElement[propName] = value
    return value
})

const VISIT_DELAY = Cypress.env('VISIT_DELAY') || 0
if (VISIT_DELAY > 0) {
    Cypress.Commands.overwrite('visit', (originalFn, ...args) => {
        const origVal = originalFn(...args)

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(origVal)
            }, VISIT_DELAY)
        })
    })
}
const COMMAND_DELAY = Cypress.env('COMMAND_DELAY') || 0
if (COMMAND_DELAY > 0) {
    for (const command of ['click', 'trigger', 'type', 'clear', 'reload']) {
        Cypress.Commands.overwrite(command, (originalFn, ...args) => {
            const origVal = originalFn(...args)

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(origVal)
                }, COMMAND_DELAY)
            })
        })
    }
}
