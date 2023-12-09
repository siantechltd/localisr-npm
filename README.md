<h1 align="center">
   <b>
        <a href="https://localisr.com">
        <img src="https://localisr.com/images/localisr.png" height="50" alt="Localisr - Manage language translations at the click of a button" /></a><br />
    </b>
</h1>

<p align="center">Localisr exists to make a developer's life a bit easier when developing multi-language websites and apps.
</p>

<p align="center">
    <a href="https://localisr.com/"><b>Website</b></a> •
    <a href="https://web.localisr.com/register"><b>Create account</b></a>
</p>

[![npm version](https://img.shields.io/npm/v/localisr.svg?style=flat-square)](https://www.npmjs.org/package/localisr)
[![install size](https://packagephobia.now.sh/badge?p=localisr)](https://packagephobia.now.sh/result?p=localisr)
[![npm downloads](https://img.shields.io/npm/dm/localisr.svg?style=flat-square)](http://npm-stat.com/charts.html?package=localisr)

## Installing

Using npm:

```bash
$ npm install localisr
```

Using yarn:

```bash
$ yarn add localisr
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import {LocalisrClient} from 'localisr'
```
or

```js
const {LocalisrClient} = require('localisr')
```

## Example

> This shows the method for getting translations of all the keys within a group.

```js
import {LocalisrClient} from 'localisr'

// initialize Localisr client
const localisr = new LocalisrClient(
    <LOCALISR_ACCESS_TOKEN>, 
    <LOCALISR_PROJECT_KEY>
);

// get translations for all the keys in 'user-login' group
const translations = await localisr
    .setLanguage(<language>)
    .groups()
    .getTranslations(<group-name>)
    .catch((error) => {
        console.log(error.response)
    });
```
> Get all added documents

```js
// initialize Localisr client
const localisr = new LocalisrClient(
    <LOCALISR_ACCESS_TOKEN>, 
    <LOCALISR_PROJECT_KEY>
);

// get translations for all the keys in 'user-login' group
const documents = await localisr
    .documents()
    .catch((error) => {
        console.log(error.response)
    });
```
