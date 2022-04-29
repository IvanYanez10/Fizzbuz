const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");

describe("Testing ExplorerService", () => {

    test("Obtain explorers on node mission", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorersFilter = ExplorerService.filterByMission(explorers, "node");
        expect(explorersFilter.length).toBe(10);
    });

    test("Obtain quatity of explorers on node mission", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        const qtyExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(qtyExplorers).toBe(10);
    });

    test("Obtain username of explorers on node mission", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        const nameExplorers = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(nameExplorers[0]).toBe("ajolonauta1");
    });

});