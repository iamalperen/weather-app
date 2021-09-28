# Weather App

Angular weather app that displays the weather and forecast of the defined cities by consuming OpenWeather Data API.

[![Packagist](https://img.shields.io/badge/backbase_task-v1.0.0-blue)]()
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)]() 
[![PyPI](https://img.shields.io/pypi/status/Django.svg)]()

### Details
- This project was generated with Angular CLI version 12.2.6
- TypeScript is used for development
- BEM is used for CSS and HTML conventions
- SASS is used for CSS-Preprocessor
- Fully Responsive
- Normalize.css
- Font-awesome
- Karma for unit tests

### Project Folder Structure

📦 app <br/>
┣ 📂 components <br/>
┃ ┣ 📂 city-weather-card <br/>
┃ ┣ 📂 forecast <br/>
┃ ┣ 📂 header <br/>
┃ ┣ 📂 weather-detail <br/>
┣ 📂 constants <br/>
┃ ┣ 📂 city <br/>
┃ ┣ 📂 icon <br/>
┣ 📂 containers <br/>
┃ ┣ 📂 city-weather-card-list <br/>
┃ ┣ 📂 city-weather-detail <br/>
┣ 📂 models <br/>
┃ ┣ 📂 city <br/>
┃ ┣ 📂 forecast <br/>
┃ ┣ 📂 weather <br/>
┣ 📂 pipes <br/>
┃ ┣ 📂 icon-map <br/>
┗ 📂 services <br/>
  ┣ 📂 city <br/>
  ┗ 📂 weather <br/>


### City List

The cities are loaded from a list in `app/constants/city/city.constants.ts`. 

Example CityList:

```js script
export const CityList: City[] = [
  {name: 'Amsterdam'},
  {name: 'Berlin'},
  {name: 'Barcelona'},
  {name: 'Paris'},
  {name: 'Rome'},
  {name: 'Istanbul'}
];
```

You can add or remove city from this list.


## Project Overview

Screenshoots:

![](https://github.com/iamalperen/weather-app/blob/master/ss1.png)

![](https://github.com/iamalperen/weather-app/blob/master/ss2.png)


## Build

- Make sure that you have `npm` on your dev machine

- Run `npm install -g @angular/cli` to install angular-cli tool

- Run `npm install` to install npm dependencies of project

- Run `ng build` to build project


## Development Environment

- Run `ng serve` for a dev server after first build.

- Navigate to `http://localhost:4200/`.

- The app will automatically reload if you change any of the source files.


## Production Environment

- Run `ng build --configuration=production` to build project in prod environment

- Run `ng serve --configuration=production` to serve project in prod environment

- Navigate to `http://localhost:4200/`.


## Test Environment

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Meta

Created and maintained by [Alperen](https://github.com/iamalperen) under [MIT](LICENSE.md) License

