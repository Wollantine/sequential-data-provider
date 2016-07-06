#sequential-data-provider

Simple module that provides sequentially rows of data as objects to a function. The objects get their properties' names from the first row of the data.

It is intended to be used as a PHPUnit-like data-provider to provide data to unit tests, although it could be used for any other purpose that fits.

Inspired by:

- PHPUnit's [data-providers](https://phpunit.de/manual/current/en/writing-tests-for-phpunit.html)
- Their javascript counterpart: [nodeunit-dataprovider](https://github.com/ChiperSoft/nodeunit-dataprovider)
- Data-table support library [where.js](https://github.com/dfkaye/where.js)

##Installation

Just run

```
npm install sequential-data-provider --save-dev
```
Or if you will be using it in production environment, run

```
npm install sequential-data-provider --save
```


##Usage

```javascript
const populate = require('sequential-data-provider');

const data = [
    ['name', 'age'],
    ['Frodo', 50],
    ['Aragorn', 87],
    ['Legolas', 2931]
];

populate(data, console.log);
```
Prints:
```javascript
 { name: 'Frodo', age: 50 }
 { name: 'Aragorn', age: 87 }
 { name: 'Legolas', age: 2931 }
```
##Test

You can test it by doing:
```
cd node_modules/sequential-data-provider
npm install
npm run test
```
