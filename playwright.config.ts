import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./e2e/",
  workers: 4,
  webServer: {
    command: "vite build && vite preview",
    timeout: 600000,
    port: 4173
  }
};

export default config;
