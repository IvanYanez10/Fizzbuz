const Reader = require("../../lib/utils/Reader");

describe("Test for Reader", () => {

    test("Obtain quantity explorers", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        expect(explorers.length).toBe(15);
    });

});