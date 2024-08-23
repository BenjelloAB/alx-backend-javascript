import fs from 'fs';

/**
 * Reads the data of students in csv file
 * @param {String} dataPath The path to csv file
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGrps = {};
        const fieldsDb = fileLines[0].split(',');
        const studentProps = fieldsDb
          .slice(0, fieldsDb.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGrps).includes(field)) {
            studentGrps[field] = [];
          }
          const studentEntries = studentProps
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGrps[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGrps);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
