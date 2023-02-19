import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests/',
	webServer: {
		command: 'npm run build && npm run preview',
		timeout: 240000,
		port: 4173
	}
};

export default config;
