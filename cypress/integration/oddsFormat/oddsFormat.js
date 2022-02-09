import { And, When, Then } from "cypress-cucumber-preprocessor/steps";

before(function() {
  const url = 'https://www.pokerstarssports.uk/'
  cy.visit(url)
  cy.get('button[id="onetrust-accept-btn-handler"]').contains("Accept All Cookies").click()
});


When('I select the odds format {string}', (decimalOdds) => {
  cy.get('div[id="priceFormat"]').click()
  cy.get(`div[id="priceFormat"]>ul>li>a[id=${decimalOdds}]`).click()
});

Then('I see {string} is the current odds format displayed', (decimalOdds) => {
   cy.get('div[id="priceFormat"]>a.currentFormat').should('contain', decimalOdds)
})

When('The dropdown is displayed', () => {
  cy.get('div[id="priceFormat"]').click()
  cy.get('div[id="priceFormat"]>ul').should('be.visible')
});

And('The cross icon is clicked', () => {
  cy.get('div[id="priceFormat"]>a>i.icon-close').click()
});

Then('The dropdown should no longer be displayed', () => {
  cy.get('div[id="priceFormat"]>ul').should('not.be.visible')
})


When('I select the odds format {string}', (americanOdds) => {
  cy.get('div[id="priceFormat"]').click()
  cy.get(`div[id="priceFormat"]>ul>li>a[id=${americanOdds}]`).click()
});

Then('I see {string} is the current odds format displayed', (americanOdds) => {
   cy.get('div[id="priceFormat"]>a.currentFormat').should('contain', americanOdds)
})