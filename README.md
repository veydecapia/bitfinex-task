
<div id="top"></div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#tools-used-and-why">Tools Used and Why</a></li>
    <li><a href="#scenarios-and-test-cases">Scenarios and Test Cases</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Project contains API Automated Test written in TypeScript using [Axios](https://www.protractortest.org/#/infrastructure) as HTTP client. 

My task is to automate API testing of [Bitfinex ticker endpoint]([https://docs.bitfinex.com/reference/rest-public-ticker]), covering some of the critical path.
The API automated test covers the following test cases.
* 200 response status code
* Contain 10 values
* Values are numbers
* Provide and present the response payload in the following format: A vertical list, and, order the list in descending order based on array index.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Mocha](https://mochajs.org/)
* [Axios](https://axios-http.com/docs/api_intro)
* [TypeScript](https://www.typescriptlang.org/)
* [Chai](https://www.chaijs.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get automated test in your local copy up and running follow these simple example steps.


### Prerequisites
To publish and install packages to and from the public npm registry or a private npm registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer.

Note: to download the latest version of npm, on the command line, run the following command:
   ```sh
   npm install -g npm
   ```
*Please refer to the following*
* [Download Node.js](https://nodejs.org/en/download/)
* [Downloading and installing node js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/veydecapia/bitfinex-task.git
   ```
2. Install NPM packages. This downloads dependencies defined in a package.json file and generates a node_modules folder with the installed modules.
   ```sh
   npm install
   ```
   
   
   It would install first the required npm packages.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. To run the created API Automated test. Run npm
   ```sh
   npm run test
   ```
<br/><br/>
This will run the automated test that covers the following test cases: <br/>
* should have 200 response status code
* should contain 10 values
* should be numbers
<br/>

2. While the test is running, the reporter will send updates of the test pass fail status on the command line.<br/> 

![API Sample run](https://github.com/user-attachments/assets/0ac3a63f-307a-4db4-b6cb-3461a4418ca4)<br/><br/>


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Tools Used and Why

- **[Mocha]** - Test Runner
   - [x] Flexible Framework: Allows asynchronous testing with customizable test flows.
   - [x] Widespread Adoption: Integrates well with libraries like Chai and Sinon.
   - [x] Detailed Reporting: Offers built-in and third-party reporters for better debugging.
     
- **[Axios]** - HTTP client
   - [x] Promise-Based: Makes handling asynchronous API calls more readable with async/await.
   - [x] Rich Features: Supports request interceptors, timeouts, and automatic JSON conversion.
   - [x] Browser & Node.js Support: Seamlessly works across environments.

- **[Chai]** - Assertions
   - [x] Readable Syntax: Supports BDD (Behavior-Driven Development) and TDD (Test-Driven Development) styles.
   - [x] Extensibility: Easily integrates with plugins to extend functionality.
   - [x] Clear Assertions: Provides expressive and descriptive assertions, aiding test clarity.
     

- **[Visual Studio Code/ VSCode]** - IDE/Text Editor
   - [x] Visual Studio Code has a large catalog different extensions to extend its own capabilities.
   - [x] Visual Studio Code Supports debugging for Typescript/Javascript based applications.
   - [x] Visual Studio Code (VSCode) is the most popular development environment.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Your Name - harveydecapia@gmail.com

Project Link: [https://github.com/veydecapia/bitfinex-task.git](https://github.com/veydecapia/bitfinex-task.git)

<p align="right">(<a href="#top">back to top</a>)</p>
