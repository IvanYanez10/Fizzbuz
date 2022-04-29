const FizzbuzzService = require("../../lib/services/FizzbuzService");

describe("Testing FizzbuzService", () => {

    test("Trick number retun score", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerResult.trick).toBe(1);
    });

    test("Return Fizz", () => {
        const explorer3 = { name: "Explorer3", score: 3 };
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerResult.trick).toBe("FIZZ");
    });

    test("Return Buzz", () => {
        const explorer5 = { name: "Explorer5", score: 5 };
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerResult.trick).toBe("BUZZ");
    });

    test("Return fizzbuzz", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        const explorerResult = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerResult.trick).toBe("FIZZBUZZ");
    });

});