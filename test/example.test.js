const assert = require('assert');

class Car {

    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

describe('Test Example', () => {
    let car;

    beforeEach(() => {
        car = new Car();
    });

    it('park should stop the car', () => {
        assert.equal(car.park(), 'stopped')
    });

    it('drive should start the car', () => {
        assert.equal(car.drive(), 'vroom')
    });
});