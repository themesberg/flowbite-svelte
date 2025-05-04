import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./e2e/",
  workers: 4,
  webServer: {
    command: "npm run build && npm run preview",
    timeout: 600000,
    port: 4173
  }
};

export default config;
