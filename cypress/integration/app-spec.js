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

describe('Art Page Functionality', () => {
  before(() => {
    cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', {fixture: 'artIDs'})
    .intercept('https://collectionapi.metmuseum.org/public/collection/v1/objects/436965', {fixture: 'art'})
    .visit('http://localhost:3000/')
    .get('[data-cy=search-input]')
    .type('monet')
    .get('[data-cy=search-button]')
    .click()
  })

  it('Should allow users to click to next art piece', () => {
    cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/objects/438738', {fixture: 'secondArt'})
    .get('[data-cy=advance-button]')
    .click()
    .get('[data-cy=art-image]')
    .should('have.attr', 'src')
    .should('include','DP-20613-001.jpg')
    .get('[data-cy=art-title]')
    .contains('Haystacks')
    .get('[data-cy=art-artist]')
    .contains('Camille')
  });

  it('Should not allow the user to click to the next piece if there are no more art pieces', () => {
    cy.get('[data-cy=advance-button]')
    .should('not.be.visible');
  });

  it('Should not allow the user to return home to the landing page', () => {
    cy.get('[data-cy=home-button]')
    .click()
    .get('h1')
    .contains('FOMO')
    .get('h2')
    .contains('Museum of Modern Art')
  });

})

describe('Favoriting View and Functionality', () => {
  beforeEach(() => {
    cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', {fixture: 'artIDs'})
    .intercept('https://collectionapi.metmuseum.org/public/collection/v1/objects/436965', {fixture: 'art'})
    .visit('http://localhost:3000/')
    .get('[data-cy=search-input]')
    .type('monet')
    .get('[data-cy=search-button]')
    .click()
  })

  it('Should allow a user to favorite an art piece', () => {
    cy.get('[data-cy=favorite-button-image]')
    .should('have.attr', 'src')
    .should('include','/static/media/bookmark.ece37765.svg')
    .get('[data-cy=favorite-button]')
    .click()
    .get('[data-cy=favorite-button-image]')
    .should('have.attr', 'src')
    .should('include','/static/media/bookmark-outline.99635f64.svg')
  });

  it('Should not allow a user to favorite an art piece twice', () => {
    cy.get('[data-cy=favorite-button]')
    .click()
    .get('[data-cy=view-favorites]')
    .click()
    .get('[data-cy=favorites-section]')
    .children()
    .should('have.length', 1)
  });

  it('Should allow user to view all favorited art pieces', () => {
    cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', {fixture: 'artIDs'})
    .intercept('https://collectionapi.metmuseum.org/public/collection/v1/objects/436965', {fixture: 'art'})
    .visit('http://localhost:3000/')
    .get('[data-cy=search-input]')
    .type('monet')
    .get('[data-cy=search-button]')
    .click()
    .get('[data-cy=favorite-button]')
    .click()
    .get('[data-cy=view-favorites]')
    .click()
    .get('[data-cy=favorites-section]')
    .children()
    .first()
    .contains('The Monet Family')
  });

  it('Should allow the user to return to searched art', () => {
    cy.get('[data-cy=view-favorites]')
    .click()
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

  it('Should allow the user to return home', () => {
    cy.get('[data-cy=view-favorites]')
    .click()
    .get('[data-cy=home-button]')
    .click()
    .get('h1')
    .contains('FOMO')
    .get('h2')
    .contains('Museum of Modern Art')
  });  
})

describe('Loading Screen', () => {
  it('Should display a loading screen when art is being fetched', () => {
    cy.visit('http://localhost:3000/gallery')
    .get('[data-cy=loading]')
    .should('exist');
  })
})

describe('Error Handling', () => {
  beforeEach(() => {
    cy.intercept('https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', {fixture: 'artIDs'})
    .intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet', {
      method: 'GET',
      url: 'https://collectionapi.metmuseum.org/public/collection/v1/objects/436965',
      status: 500,
      response: {
          message: 'Please try again later',
          
      }
    })
    .visit('http://localhost:3000/')
    .get('[data-cy=search-input]')
    .type('monet')
    .get('[data-cy=search-button]')
    .click()
  })

  it('Should allow the user to return to searched art', () => {
    cy.get('[data-cy=error-message]')
    .contains('Please try again later')
  });

  it('Should reroute to home when url does not match a route', () => {
    cy.visit('http://localhost:3000/test')
    .get('h1')
    .contains('FOMO')
    .get('h2')
    .contains('Museum of Modern Art')
  })
})


