const fs = require('fs');
const path = require('path');

module.exports.generateSassBuild = function generateSassBuild() {
  return {
    name: 'generateSassBuild',
    buildStart(options) {
      // eslint-disable-next-line no-console
      console.log('BUILD START');
      // eslint-disable-next-line no-console
      console.log('BUILD START OPTIONS:', options);
    },
    generateBundle(options) {
      // eslint-disable-next-line no-console
      console.log('GENERATE BUILD');
      // eslint-disable-next-line no-console
      console.log('GENERATE BUILD OPTIONS:', options);

      // eslint-disable-next-line no-console
      console.log('PATH: ', path.join(__dirname, '../../build/esm'));

      // const stylesEsmPath = path.join(__dirname, '../../build/esm');
      // const stylesSrcPath = path.join(__dirname, '../../src/styles');
      //
      // copyFolderRecursiveSync(stylesSrcPath, stylesEsmPath);
    },
    writeBundle() {
      // eslint-disable-next-line no-console
      console.log('WRITE BUNDLE');

      const stylesEsmPath = path.join(__dirname, '../../build/esm');
      const stylesSrcPath = path.join(__dirname, '../../src/styles');

      copyFolderRecursiveSync(stylesSrcPath, stylesEsmPath);
    },
  };
};

function copyFileSync(source, target) {
  let targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  let files = [];

  // Check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}
