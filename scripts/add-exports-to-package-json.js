import fs from 'fs';
import path from 'path';

const distDir = './dist';
const packageJsonPath = './package.json';

const componentNames = fs.readdirSync(distDir);
const componentExports = {};

for (const componentName of componentNames) {
  const componentDir = path.join(distDir, componentName);
  if (!fs.existsSync(componentDir) || !fs.lstatSync(componentDir).isDirectory()) {
    continue;
  }
  const componentFiles = fs.readdirSync(componentDir);

  const svelteFiles = componentFiles.filter((file) => file.endsWith('.svelte'));

  for (const svelteFile of svelteFiles) {
    const dtsFile = `${svelteFile}.d.ts`;
    const exportKey = `./${svelteFile}`;

    componentExports[exportKey] = {
      types: `./dist/${componentName}/${dtsFile}`,
      svelte: `./dist/${componentName}/${svelteFile}`
    };
  }
}

const indexDtsPath = path.join(distDir, 'index.d.ts');
if (fs.existsSync(indexDtsPath) && fs.lstatSync(indexDtsPath).isFile()) {
  componentExports['.'] = {
    types: './dist/index.d.ts',
    svelte: './dist/index.js'
  };
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

packageJson.exports = componentExports;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
