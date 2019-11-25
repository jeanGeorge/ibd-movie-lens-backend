const Connection = require("./connection");

const all = async () => {
  return new Promise((resolve, reject) => {
    Connection.query("SELECT * FROM avaliacoes", (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = all;

module.exports = {
  all
};
