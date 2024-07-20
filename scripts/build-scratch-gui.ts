import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs-extra';
import path from 'path';

const REPO_URL = 'https://github.com/scratchfoundation/scratch-gui.git';
const TEMP_DIR = path.join(__dirname, '../scratch-gui');
const BUILD_DIR = path.join(TEMP_DIR, 'build');
const DEST_DIR = path.join(
  __dirname,
  '../projects/ngx-scratch/src/assets/scratch-gui',
);

const execPromise = promisify(exec);

async function run() {
  try {
    // Remove the previous temp directory if it exists
    if (fs.existsSync(TEMP_DIR)) await fs.remove(TEMP_DIR);

    // Remove the previous build directory if it exists
    if (fs.existsSync(DEST_DIR)) await fs.remove(DEST_DIR);

    await execPromise(`git clone ${REPO_URL} ${TEMP_DIR}`);

    // Navigate to the temp directory
    process.chdir(TEMP_DIR);

    // Install dependencies
    await execPromise('npm install');
    await execPromise('npm run build');
    console.log('Project built.');

    if (!fs.existsSync(BUILD_DIR)) throw new Error(`Build directory ${BUILD_DIR} does not exist.`);

    await fs.copy(BUILD_DIR, DEST_DIR);
    console.log('Build files copied.');

    await fs.remove(TEMP_DIR);
    console.log('Cleanup done.');
  } catch (error) {
    console.error('Error during build process:', error);
  }
}

run();
