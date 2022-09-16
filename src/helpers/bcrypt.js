const { compareSync, hashSync } = require("bcrypt");

const bcrypt = {
 
  generateHash: (text) => {
    return hashSync(text, 5);
  },
 
  compareHash: (text, hashed) => {
    return compareSync(text, hashed);
  },
};

module.exports = bcrypt;