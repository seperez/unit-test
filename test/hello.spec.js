describe('greet module', function () {

    it('should say Hello', function () {
        expect(greet('sebas')).toEqual('Hello');
    });

    it('should say Hello to the World', function () {
        expect(greet('World')).toEqual('Hello World!');
    });
});