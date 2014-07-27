describe("serialize", function() {
    it("should serialize single field object as is", function() {
       expect(serialize({a: 1})).toEqual("{a: 1}")
    });

    it("should serialize flat object as is", function() {
        expect(serialize({a: 1, b: 2})).toEqual("{a: 1, b: 2}");
    });

    it("should serialize 3 field object with a new line per field", function() {
        expect(serialize({a: 1, b: 2, c: 3})).toEqual("{\n  a: 1,\n  b: 2,\n  c: 3\n}");
    });

    it("should have literal strings in double quotes", function() {
        expect(serialize({a: 1, b: 2, c: 3, '-' : '+'})).toEqual("{\n  a: 1,\n  b: 2,\n  c: 3,\n  \"-\": \"+\"\n}");
    });

    it("should show each object fo a collection in a new line", function() {
       expect(serialize([{a: 1}, {b: 2}])).toEqual("[\n  {a: 1},\n  {b: 2}\n]");
    });
});