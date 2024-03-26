import { GustoAppIntegrations } from "./index";

describe("gusto-app-integrations-typescript-sdk", () => {
    it("initialize client", async () => {
        const gustoappintegrations = new GustoAppIntegrations({
            apiKey: "API_KEY",
        });
    });
});
