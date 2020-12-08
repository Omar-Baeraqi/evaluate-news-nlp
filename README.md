# Evaluate a News Article with Natural Language Processing
Project 4 of Udacity's Front End Web Development course.

## Overview
This project will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Project prerequisites:
- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
- External script - Service Worker
- External API - meaningcloud

## Instructions

### Stage 1: Setting up the Project
- Clone the project file from the Github repo
- From the terminal, install the Node package manager: npm install
- install the required loaders as follow:
  - npm i -D @babel/core @babel/preset-env babel-loader
  - npm i -D style-loader node-sass css-loader sass-loader
  - npm i -D clean-webpack-plugin
  - npm i -D html-webpack-plugin
  - npm i -D mini-css-extract-plugin
  - npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

### Stage 2: Setting up the API
Using the MeaningCloud Sentiment Analysis API for this project.
- Go the MeaningCloud webiste and sign up for an API key

### Stage 3: Project Enhancement
Make enhancement in your project code to ensure most of the requirements are met.

### Stage 4: Unit Testing using Jest Framework
Adding The Jest framework provides us the ability to create, and run unit tests.
- Install Jest: npm install --save-dev jest
- Create a test folder in the project directory and add test files inside it (<function_name>.test.js)
- In each test file, the general flow of the test block should be:
  - Import the js file to test
  - Define the input for the function
  - Define the expected output
  - Check if the function produces the expected output
- Configure an npm script named "test" in package.json to run your tests from the command line:
"scripts": {
    "test": "jest"
}
- Run the (npm run test) command

### Stage 5: Service Workers
Add service workers to webpack.prod.js config file to allow offline access.
- In webpack.prod.js config file, 
  - require the plugin by appending the new plugin statement: const WorkboxPlugin = require('workbox-webpack-plugin');
  - Instantiate the new plugin in the plugin list: new WorkboxPlugin.GenerateSW()
- On the terminal, install the plugin using: npm install workbox-webpack-plugin --save-dev
- Add this code to the bottom of your html file, just above the closing body tag:
<script>
 // Check that service workers are supported
 if ('serviceWorker' in navigator) {
     // Use the window load event to keep the page load performant
     window.addEventListener('load', () => {
         navigator.serviceWorker.register('/service-worker.js');
     });
 }
</script>
