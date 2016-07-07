/*
sequential-data-provider

Provides sequentially rows of data as objects to a function. The objects get
their properties names from the first row of the data.

------Example:
const data = [
    ['name', 'age'],
    ['Frodo', 50],
    ['Aragorn', 87],
    ['Legolas', 2931]
];

populate(data, console.log);

------Prints:
 { name: 'Frodo', age: 50 }
 { name: 'Aragorn', age: 87 }
 { name: 'Legolas', age: 2931 }

 */
const populate = (data, test) => {

    if (!Array.isArray(data)) throw new TypeError('Type of data should be array');
    if (typeof test != 'function') throw new TypeError('Type of test should be function');

    for (let i = 1; i < data.length; i++) {

        // Generate the data object with the first row of the data as keys
        // and the i-th row of the data as values
        let datum = data[i].reduce((result, item, index) => {
            if (index <= data[0].length-1) result[data[0][index]] = item;
            return result;
        }, {});

        // Call the test with every row
        test(datum);

    }

};

module.exports = populate;
