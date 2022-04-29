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

    test("Validation number return Fizzbuzz", () => {
        const explorerResult = FizzbuzzService.applyValidationInNumber(15);
        expect(explorerResult).toBe("FIZZBUZZ");
    });

    test("Validation number return Fizz", () => {
        const explorerResult = FizzbuzzService.applyValidationInNumber(3);
        expect(explorerResult).toBe("FIZZ");
    });

    test("Validation number return buzz", () => {
        const explorerResult = FizzbuzzService.applyValidationInNumber(5);
        expect(explorerResult).toBe("BUZZ");
    });

    test("Validation return number", () => {
        const explorerResult = FizzbuzzService.applyValidationInNumber(1);
        expect(explorerResult).toBe(1);
    });

});