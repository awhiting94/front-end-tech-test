# Frontend Technical Test

Welcome to The Stars Group technical test for frontend test engineers!

These tasks are open ended but we recommend that you spend no more than a few hours on them.

The site we would like you to test can be found at: https://www.pokerstarssports.uk. Please bear in mind that the site is highly dynamic and both the content and the layout may change over time. You will not need to register an account or log in to the website to complete this test.

### Task 1
Write a number of BDD scenarios using Gherkin to test the following features:
- Adding things to, and removing things from, the bet slip
- Changing the odds format

### Task 2
Create a simple test framework using NPM, Cypress and Cucumber to automate a selection of the scenarios you have created. You should include at least two scenarios from each feature.
- https://www.npmjs.com
- https://www.cypress.io
- https://www.npmjs.com/package/cypress-cucumber-preprocessor


After completing the tasks, please update the README.md file with your scenarios from Task 1 and instructions on how to run your tests, include any information you think is relevant, interesting or useful. The preferred delivery method for this project is via Github but we will also accept a zipped file sent as an email attachment.

### Aaron Whiting frontend technical test 

## How to run 

- Make sure that both node and npm are installed 
- Clone the project from GitHub
- Open the root of your project in a terminal and run 'npm install' 
- You can run the tests using the custom scripts I have created below:

## Custom scripts 

I have created two custom scripts placed in package.json to open and run cypress depending on whether you wish to run the tests using the test runner or headlessly using the command line. 

- To run using the test runner, enter 'npm run cy:open' in the terminal
- To run using the command line, enter 'npm run cy:run' in the terminal 

## My scenarios for Task 1 

I have created three scenarios for each feature described in Task 1 above. 

The following scenarios have been created for adding/removing things from the bet slip:

- Adding one selection to the bet slip 
- Adding a second selection to the bet slip 
- Removing all selections from the bet slip 

The following scenarios have been created for changing the odds format:

- Changing the odds format to decimal
- Closing the odds format dropdown 
- Changing the odds format to american 

## @Focus smart tagging 

When running the tests, if you wish to run select scenarios as opposed to running all of them then add a smart tag in the form of '@focus' just above where the scenario begins in the feature file, e.g. 

Feature: Bet slip

  I want to be able to add and remove things from the bet slip 

  @focus 
  Scenario: Adding a selection to the bet slip 
    When I click on my selection 
    Then My selection should be added to the bet slip where it is displayed 

  Scenario: Removing a selection from the bet slip 
    When I click the bin icon in the bet slip  
    Then My selection is removed from the bet slip  

This is particularly useful when developing or bug fixing as it saves you running all of the tests. 

## Hooks 

I have used two types of mocha hooks - before and before each. 

## Before hook 

The before hook has been placed in both step definition files to run before the first scenario of each feature. It does the following:

- Goes to https://www.pokerstarssports.uk/ 
- Once the page finishes loading, it clicks the 'Accept All Cookies' button on the web page 

## Before each 

The before each hook has been placed in the step definition file for the bet slip feature to run before each test. It does the following:

- Sets the viewport to a width of 1400px and a height of 900px 

This is because the website is responsive at different sizes of screen and I wanted to test the bet slip feature as if I was viewing it on a desktop screen size. 