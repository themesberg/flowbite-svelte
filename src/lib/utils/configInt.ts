import type { Config } from 'config.js';
import tryConfig from 'config.js';

const modules = import.meta.glob('../../config.js', { eager: true, import: 'default' }),
  config: Config = (modules['../../config.js'] ?? { frame: {} }) as Config;

console.log(modules);
export default config;
