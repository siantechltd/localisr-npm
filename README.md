<h1 align="center">
   <b>
        <a href="https://localisr.com"><img src="https://localisr.com/static/media/logo@512.74f2598560a95ff14e47.png" /></a><br />
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
$ yarn add axios
```

Once the package is installed, you can import the library using `import` approach:

```js
import {LocalisrClient} from 'localisr';
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