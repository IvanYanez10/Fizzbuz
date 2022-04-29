const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Testing ExplorerController", () => {

    test("Filter explorers by mission", () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);
    });

    test("Return usernames of explorers in mission", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers[0]).toBe("ajolonauta1");
    });

    test("Return amount of explrers in mission", () => {
        const explorers = ExplorerController.getExplorersAmountByMission("node");
        expect(explorers).toBe(10);
    });

    test("Fizzbuzz status testing", () => {
        const result = ExplorerController.getFizzbuzzStatus(15);
        expect(result).toBe("FIZZBUZZ");
    });

});