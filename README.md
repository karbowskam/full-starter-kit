# Installation

Simple toolkit for my static websites development.

## How to use it?

Go to https://github.com/karbowskam/full-starter-kit (this repository) and click on `Use this template` button to generate a new repository based on this starter kit. 
After clone it to your computer, go to the project directory in console and type `npm install`.
If you want to use gh pages, you need to configure it in gh pages settings. It's require to change your project visibility to public.

## Available scripts

`npm run start` - runs development mode with validation

`npm run build` - runs build process for production and creates dist folder (ready to publish) with validation

`npm run build-dev` - runs development mode without validation

`npm run build-prod`- runs build process for production and creates dist folder (ready to publish) without validation

`npm run publish` - runs build process and publish the page using `gh-pages` branch (you have to configure using gh pages on github first)

`npm run test` - runs validation (html, css, js)

`npm run test-html` - runs html validation

`npm run test-html-lint` - runs html linting (format code)

`npm run test-css` - runs css validation

`npm run test-css-lint` - runs css linting (format code)

`npm run test-js` - runs js validation

`npm run test-js-lint` - runs js linting (format code)
