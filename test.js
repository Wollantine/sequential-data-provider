const test = require('tape');
const sinon = require('sinon');
const populate = require('./index');

const data = [
    ['name', 'age'],
    ['Frodo', 50],
    ['Aragorn', 87],
    ['Legolas', 2931]
];

const expected = [
    { name: 'Frodo', age: 50 },
    { name: 'Aragorn', age: 87 },
    { name: 'Legolas', age: 2931 }
];

test('sequential-sequential-data-provider', (assert) => {
    let actual = [];
    populate(data, (result) => {
        actual.push(result);
    });

    assert.deepEqual(actual, expected, 'Example is right');


    let spy = sinon.spy();
    populate([], spy);
    assert.notOk(spy.called, 'Empty data produces no calls');

    let exception = false;
    try {
        populate(undefined, spy);
    }
    catch (e) {
        exception = true;
    }
    assert.ok(exception, 'Undefined data throws exception');

    exception = false;
    try {
        populate(null, spy);
    } catch (e) {
        exception = true;
    }
    assert.ok(exception, 'Null data throws exception');

    exception = false;
    try {
        populate('omg this is not valid data', spy);
    } catch (e) {
        exception = true;
    }
    assert.ok(exception, 'Any non-array data throws exception');

    spy.reset();
    populate([['a', 'b']], spy);
    assert.notOk(spy.called, 'A matrix with just one row produces no calls');

    exception = false;
    try {
        populate([['part1', 'part2', 'part3'], ['Completely ', 'valid ', 'data.']], null);
    } catch (e) {
        exception = true;
    }
    assert.ok(exception, 'Any non-function test throws exception');

    assert.end();
});
