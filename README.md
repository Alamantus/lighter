# lighter 🔥

[![npm](https://img.shields.io/npm/v/@alamantus/lighter.svg)](https://www.npmjs.com/package/@alamantus/lighter)
[![min+gzipped size](http://img.badgesize.io/https://cdn.jsdelivr.net/npm/@alamantus/lighter@latest/dist/lighter.css.gz)](https://cdn.jsdelivr.net/npm/@alamantus/lighter@latest/dist/lighter.css)
[![install size](https://packagephobia.now.sh/badge?p=@alamantus/lighter)](https://packagephobia.now.sh/result?p=@alamantus/lighter)
[![Downloads](https://img.shields.io/npm/dt/@alamantus/lighter.svg)](https://www.npmjs.com/package/@alamantus/lighter)

a ridiculously small responsive css framework.

[ajusa](https://github.com/ajusa) challenged themself to see how small they could go, but preserve everything Skeleton, Milligram, and other micro frameworks have to offer.

## Features
* 12 Column Responsive Grid
* Typography for h1-h6, and body text
* Three types of buttons
* Cards
* Inputs
* Table Styles

and a little bit more...

## fuel
fuel is an atomic css addon for lighter. Check it out at https://alamantus.github.io/lighter/docs/fuel.html, and check back occasionally for new features!

## Getting Started
1. Install lighter.css with one of the following:
  - NPM: `npm install --save @alamantus/lighter`
  - CSS3: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alamantus/lighter@1.2.0/dist/lighter.css" />`
  - CSSNext: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alamantus/lighter@1.2.0/src/lighter.css" />`
2. (Optional) Add fuel.css if you want more:
  - CSS3: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alamantus/lighter@1.2.0/dist/fuel.css" />`
  - CSSNext: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alamantus/lighter@1.2.0/src/fuel.css" />`
3. [Read the Docs](https://alamantus.github.io/lighter/) to see usage

Note: lighter uses `node-sass` to transform from SCSS to CSS3. Each element of lighter and fuel is split into separate "modules"
in `src/modules`, so you can pick and choose what elements to use if you want to customize your style with Sass by `@import`ing
what you need.  
There is also a CSSNext version preserved and updated from the fork from [lit](https://github.com/ajusa/lit). If you are comfortable outright using CSSNext, you can directly include the `lighter.css` file in the `src` directory. Otherwise, use the `dist/lighter.css` file.

## Supported Browsers
lighter supports most modern browsers (Chrome, Firefox, Edge, Opera) but it also has impressive support for older browsers.
lighter has been tested on Internet Explorer 11 with no issues.

## Development Setup
1. Clone this repository (https://www.github.com/alamantus/lighter)
2. Make sure you have [npm](https://www.npmjs.com/get-npm) installed
3. (for Windows) Install `windows-build-tools` so you can install stuff
4. Run `npm install` in the root directory of `lighter`
5. Once that is completed, run `npm run build` to build the minified version and the gzipped file.
6. If you are making changes live, use `npm run watch`. `watch` will build the minified css file in `./dist` whenever there is a change in `./src/lighter.css`.
