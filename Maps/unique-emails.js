function numUniqueEmails(emails) {
  const set = new Set();
  for (let email of emails) {
      set.add(formatEmail(email));
  }
  console.log(set);
  return set.size;
};

function formatEmail(email) {
  let s = '';
  let isLocal = true;
  for (let i=0;i<email.length;i++) {
      if (email[i] === '.' && isLocal) {
          continue;
      } else if (email[i] === '+' && isLocal) {
          while (email[i] !== '@') {
              i++;
          }
          isLocal = false;
          s += email[i];
      } else if (email[i] === '@') {
        isLocal = false;
        s += email[i];
      } else {
          s += email[i];
      }
  }
  return s;
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.email@leetcode.com"]));