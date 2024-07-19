import simpleGit from 'simple-git';
import fs from 'fs-extra';
import path from 'path';

// Config directories
const repoUrl = 'https://github.com/scratchfoundation/scratch-gui.git';
const tempDir = path.join(__dirname, '../scratch-gui');
const buildDir = path.join(tempDir, 'dist');
const destDir = path.join(__dirname, '../src/assets/scratch-gui');

const git = simpleGit();

async function run() {
  try {
    console.log('Cloning repository...');
    await git.clone(repoUrl, tempDir);

    process.chdir(tempDir);

    console.log('Installing dependencies...');
    await git.raw(['npm', 'install']);

    console.log('Building project...');
    await git.raw(['npm', 'run', 'build']);

    console.log('Copying build files...');
    await fs.copy(buildDir, destDir);

    console.log('Build process completed successfully.');

    console.log('Cleaning up...');
    await fs.remove(tempDir);

  } catch (error) {
    console.error('Error during build process:', error);
  }
}

run();
