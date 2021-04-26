# FOMA: Fear of Missing Art 
<p align="center">
<img src="./src/assets/foma-logo.png" alt="FOMA Logo" width="200">
</p>  

## Table of Contents

- [About the Project](#about-the-project)
  - [Final Product](#final-product)
- [Project Goals](#project-goals)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Wireframes](#wireframes)
- [Functionality](#functionality)
  - [General](#general)
  - [Adding a Post](#adding-a-post)
  - [Search](#search)
  - [Error Handling](#error-handling)
  - [Accessibility](#accessibility)
- [Contact the Contributers](#contact-the-contributers)


## About the Project

FOMA: Fear of Missing Art is an art gallery targeted to people stuck inside due to Covid and ready to get out in the world. FOMA brings the gallery viewing experience to your home. It allows user to search through [the Metropolitan Museum of Art Collection](https://metmuseum.github.io/) using search terms such as artists, subject, keyword etc. and displays high-res images and details about each art piece. Users can also save their favorite pieces for later viewing. This solo project was a chance to build out a React app from scratch in 6 days using Router and Cypress for testing. 

Project spec ->
https://frontend.turing.edu/projects/module-3/niche-audience.html

#### Final Product:
##### Home Page:
<img src="./src/assets/main-page.png" style="width:50px;"/>


##### Gallery View:
![](./src/assets/gallery-view.png)

## Project Goals
1. Use the technology you’ve been working with over the course of the past 6 weeks to demonstrate mastery of the following:
 - React
 - Router
 - Asynchronous JavaScript
 - End to end testing with Cypress
 - Create personas and user stories to describe your target audience.

## Installation

View the code ->

Front-End:
https://github.com/PaigeVannelli/FOMA

API:
https://metmuseum.github.io/

Run:
1. clone this repository to your local machine using the command ```git clone```
2. CD into the project 
3. Install the dependancies using the command ```npm install```
4. Start the site using the command ```npm start```
5. To view the functioning tests run the command ```npm run cypress:open```

Deployed Link ->
https://foma-gallery.herokuapp.com/

## Technologies Used

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

- <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Wireframes
Sketch was utilized to create wireframes. We tested all user stories with our wireframes/prototypes to ensure that our designs catered to the needs of our users.

![](src/assets/wireframes.png)

## Functionality

#### General
FOMA is an application that allows users to browse art based on their interest. When user first opene the app they are prompted to enter a search term. The term can be a favorite artists, topic, keyword etc. 
<img src="./src/assets/search.gif">

#### Art View
Users will then be taken to the gallery page to view their searched art. They can click through to see pieces displayed one at a time. 
<img src="./src/assets/next.gif">

#### Favoriting
Users can favorite different pieces of art on the gallery page and then view their favorited art pieces on the art page. 
<img src="./src/assets/favoriting.gif">

#### Error Handling
Error handling was considered when building the website. A loading screen will appear when art is still being retrieved from the API. When a user wants to search for art, they must fill out the search field in order for the Enter the Museum button to activate. The user will know that the button is activated because it turns blue and is underlined. If a user searches a term that returns no art, they will receive a descriptive message prompting them to try a new search. 

#### Accessibility
FOMA received a 100% from Lighthouse on Accessibility. Users can tab throughout the full application, making it accessible for those using keyboards to navigate through.

![](src/assets/accessibility.png)

## Contact the Contributer
[<img src="https://img.shields.io/badge/LinkedIn-paigevannelli-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin3]
[<img src="https://img.shields.io/badge/Github-PaigeVannelli-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github3]

<!-- Personal Definitions  -->
[linkedin3]: https://www.linkedin.com/in/paigevannelli/
[github3]: https://github.com/PaigeVannelli
