import { When, Then } from "cypress-cucumber-preprocessor/steps";

before(function() {
  const url = 'https://www.pokerstarssports.uk/'
  cy.visit(url)
  cy.get('button[id="onetrust-accept-btn-handler"]').contains("Accept All Cookies").click()
});

beforeEach(() => {
  cy.viewport(1400, 900)
})


When('I click on my first selection', () => {
  cy.get('a[id="tab-nav-betslip"]>span').should('contain', '(0)').should('be.visible')
  cy.get('div[id="bet-slip"] p.noBets').contains('Add selections to place a bet.').should('be.visible')
  cy.get('ul.homeHighlights>li[id="home-rab"]>div>section>div>ul>li:first>div.marketsList__amount>a').click()
});

Then('My selection should be added to the bet slip where it is displayed', () => {
    cy.get('a[id="tab-nav-betslip"]>span').should('contain', '(1)').should('be.visible')
    cy.get('div[id="bet-slip"] section.singles ul.bet-selections').should('be.visible')
    cy.get('div[id="bet-slip"] section.singles ul.bet-selections').children('[id^=single-bet]').should('have.length', 1)
});


When('I click on my second selection', () => {
  cy.get('a[id="tab-nav-betslip"]>span').should('contain', '(1)').should('be.visible')
  cy.get('ul.homeHighlights>li[id="home-rab"]>div>section>div>ul>li:last>div.marketsList__amount>a').click()
});

Then('My selection should be added to the bet slip where both selections are now displayed', () => {
    cy.get('a[id="tab-nav-betslip"]>span').should('contain', '(2)').should('be.visible')
    cy.get('div[id="bet-slip"] section.singles ul.bet-selections').should('be.visible')
    cy.get('div[id="bet-slip"] section.singles ul.bet-selections').children('[id^=single-bet]').should('have.length', 2)
});

When('I click the top bin icon in the bet slip', () => {
  cy.get('div[id="bet-slip"] section.singles header>a.remove-all').click()
  cy.get('div.yesNoPopup a').contains('Remove').click()
});

Then('Both selections are removed from the bet slip', () => {
  cy.get('a[id="tab-nav-betslip"]>span').should('contain', '(0)').should('be.visible')
  cy.get('div[id="bet-slip"] section.singles ul.bet-selections').should('not.exist')
  cy.get('div[id="bet-slip"] p.noBets').contains('Add selections to place a bet.').should('be.visible')
});





