import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	fullyParallel: true,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000
	}
};

export default config;
