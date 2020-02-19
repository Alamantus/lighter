# lighter 🔥

[![npm](https://img.shields.io/npm/v/@alamantus/lighter.svg)](https://www.npmjs.com/package/@alamantus/lighter)
[![size](http://img.badgesize.io/https://cdn.jsdelivr.net/npm/@alamantus/lighter@latest/src/lighter.css?compression=gzip)](https://cdn.jsdelivr.net/npm/@alamantus/lighter@latest/src/lighter.css)
[![install size](https://packagephobia.now.sh/badge?p=@alamantus/lighter)](https://packagephobia.now.sh/result?p=@alamantus/lighter)
[![Downloads](https://img.shields.io/npm/dt/@alamantus/lighter.svg)](https://www.npmjs.com/package/@alamantus/lighter)
<a href="https://twitter.com/intent/tweet?text=World's+smallest+responsive+CSS+framework:&url=https%3A%2F%2Fgithub.com%2Falamantus%2Flit&hashtags=github&original_referer=http%3A%2F%2Fgithub.com%2F&tw_p=tweetbutton" target="_blank">
  <img src="http://jpillora.com/github-twitter-button/img/tweet.png"
       alt="tweet button" title="lighter"></img>
</a>

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
  - CSS3: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alamantus/lighter@1.0.1/dist/lighter.css" />`
  - CSSNext: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alamantus/lighter@1.0.1/src/lighter.css" />`
2. [Read the Docs](https://alamantus.github.io/lighter/) to see usage

Note: lighter uses PostCSS to transform from CSSNext to CSS3. If you are comfortable outright using CSSNext, you can directly
include the `lighter.css` file in the src directory. Otherwise, use the `dist/lighter.css` file.

## Supported Browsers
lighter supports most modern browsers (Chrome, Firefox, Edge, Opera) but it also has impressive support for older browsers.
lighter has been tested on Internet Explorer 11 with no issues.

## Development Setup
1. Clone this repository (https://www.github.com/alamantus/lighter)
2. Make sure you have [npm](https://www.npmjs.com/get-npm) installed
3. Run `npm install` in the root directory of `lighter`
4. Once that is completed, run `npm run build` to build the minified version and the gzipped file.
5. If you are making changes live, use `npm run watch`. `watch` will build the minified css file in `./dist` whenever there is a change in `./src/lighter.css`.
