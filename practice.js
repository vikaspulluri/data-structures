const bcrypt = require('bcryptjs');

function createHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

const hash = createHash('Vikgmail@2017');
console.log({hash, isSame: bcrypt.compareSync(hash, '$2a$10$/b4TotXihM45ljowk3iPa.5dhxEf6x8q5vptg6KaicLXTE2zAZiAW')});