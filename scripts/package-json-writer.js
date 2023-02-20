import fs from 'fs';
import path from 'path';

const outputDirectory = './dist';

try {
  // read file into JSON
  const packageJson = fs.readFileSync('package.json', 'utf-8');
  const pkg = JSON.parse(packageJson);

  // adjust pkg json however you like ..

  // write it to your output directory
  const newPackagePath = path.join(outputDirectory, 'package.json');
  fs.writeFileSync(newPackagePath, JSON.stringify(pkg, null, 2));

  console.log(`The package.json file has been updated and written to ${newPackagePath}.`);
} catch (error) {
  console.error(`An error occurred while processing the package.json file: ${error.message}`);
}