import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

beforeEach(function(){
    cy.fixture('ConduitData').as('data')
})

Given('I am on the Conduit Login page', function(){
    cy.visit('https://react-redux.realworld.io')
    cy.get('a[href="#loginSS"]').click()
})

When('I login with valid credentials', function(dataTable){
    cy.get('input[type="email"]').type(dataTable.rawTable[1][0])
    cy.get('input[type="password"]').type(dataTable.rawTable[1][1])
    cy.get('button[type="submit"]').click()
})

And('I click on the settings button', function(){
    cy.get('a[href="#settings"]').click()
})

And('I click on the Logout Button', function(){
    cy.contains('Or click here to logout.').click()
})

Then('I route back to the Login page', function(){
    cy.title().should('eq','Conduit')
})