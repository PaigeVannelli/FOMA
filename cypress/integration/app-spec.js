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
  beforeEach(() => {
    cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', {fixture: 'artIDs'})
    .intercept('https://collectionapi.metmuseum.org/public/collection/v1/objects/436965', {fixture: 'art'})
    .visit('http://localhost:3000/')
  })

  it('Should allows a user to search a keyword and display a related art piece image and details', () => {
    cy.get('[data-cy=search-input]')
    .type('monet')
    .get('[data-cy=search-button]')
    .click()
    .get('[data-cy=art-image]')
    .should('have.attr', 'src')
    .should('include','DT1562.jpg')
    .get('[data-cy=art-title]')
    .contains('The Monet Family')
    .get('[data-cy=art-artist]')
    .contains('Edouard Manet')
  });

  it('Should not allow user to click search when no search term is provided', () => {
    cy.get('[data-cy=search-input]')
    .clear()
    .get('[data-cy=search-button]')
    .should('not.exist');
  });

});

// describe('Art Page Functionality', () => {
//   beforeEach(() => {
//     cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', {fixture: 'artIDs'})
//     .intercept('https://collectionapi.metmuseum.org/public/collection/v1/objects/436965', {fixture: 'art'})
//     .visit('http://localhost:3000/')
//     .get('[data-cy=search-input]')
//     .type('monet')
//     .get('[data-cy=search-button]')
//     .click()
//   })

  // it('Should allow users to click to next art piece', () => {
  //   cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/objects/438738', {fixture: 'secondArt'})
  //   .get('')
  //   // cy.get('[data-cy=search-input]')
  //   // .clear()
  //   // .get('[data-cy=search-button]')
  //   // .should('not.exist');
  // });

// })



    // 435882,
    // 438738,
    // 671456,
    // 436085,
    // 669033,
    // 248068