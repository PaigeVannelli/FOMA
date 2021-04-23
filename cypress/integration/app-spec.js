describe('Landing Page View', () => {
  it('Should display a landing page when website is opened', () => {
    cy.visit('http://localhost:3000/')
    .get('h1')
    .contains('FOMO')
    .get('h2')
    .contains('Museum of Modern Art')
  });
});

describe('Search Functionality', () => {
  before(() => {
    cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', {fixture: 'artIDs'})
    .intercept('https://collectionapi.metmuseum.org/public/collection/v1/objects/436965', {fixture: 'art'})
    .visit('http://localhost:3000/')
  })

  it('Should allows a user to type a search word', () => {
    cy.get('[data-cy=search-input]')
    .type('monet')
    .get('[data-cy=search-button]')
    .click()
  });
});


    // 435882,
    // 438738,
    // 671456,
    // 436085,
    // 669033,
    // 248068