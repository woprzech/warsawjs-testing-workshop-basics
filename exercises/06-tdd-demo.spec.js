describe.skip('fizz buzz', () => {
    it('should return Fizz for n % 3', () => {
        const result = fizzBuzz(3);

        expect(result).toEqual('Fizz');
    });

    it('return Buzz for n % 5', () => {
        const result = fizzBuzz(5);

        expect(result).toEqual('Buzz');
    });

    it('return FizzBuzz for n % 3 and n % 5', () => {
        const result = fizzBuzz(15);

        expect(result).toEqual('FizzBuzz');
    });

    it('should return n for n not divided by 3 and 5', () => {
        const result = fizzBuzz(2);

        expect(result).toEqual(2);
    });
});

const fizzBuzz = (n) => {
    const dividedBy3 = n % 3 === 0;
    const dividedBy5 = n % 5 === 0;
    if (dividedBy3 && dividedBy5) {
        return 'FizzBuzz';
    } else if (dividedBy3) {
        return 'Fizz';
    } else if (dividedBy5) {
        return 'Buzz';
    } else {
        return n;
    }
}

