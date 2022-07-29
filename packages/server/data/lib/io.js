/* eslint-disable consistent-return */

const fs = require('fs');
const { promisify } = require('util');

const mkdirP = promisify(fs.mkdir);
const statP = promisify(fs.stat);
const writeFileP = promisify(fs.writeFile);
const readFileP = promisify(fs.readFile);
const readDirP = promisify(fs.readdir);

/**
 * File operations
 *
 * @class IO
 */
class IO {

  static readFolder(filePath) {
    try {
      const res = readDirP(filePath);
      return res;
    } catch (err) {
      console.error(err.message);
    }
  }

  static addFolder(filePath) {
    try {
      const res = mkdirP(filePath);
      return res;
    } catch (err) {
      console.error(err.message);
    }
  }

  static readTextFile(filePath) {
    try {
      return readFileP(filePath, 'utf8');
    } catch (err) {
      console.error(err.message);
    }
  }

  static writeFile(filePath, json) {
    try {
      return writeFileP(filePath, json);
    } catch (err) {
      console.error(err.message);
    }
  }

  static async pathExists(path) {
    try {
      await statP(path);
      return true;
    } catch (err) {
      return false;
    }
  }

  static createWriteStream(path) {
    try {
      return fs.createWriteStream(path);
    } catch (err) {
      console.error(err.message);
    }
  }

}

module.exports = IO;
