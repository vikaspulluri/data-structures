/**
 * 168. Excel Sheet Column Title
 * @param {*} columnNumber 
 * @returns 
 */
var convertToTitle = function (columnNumber) {
  let title = '';
  const codeAtA = 'A'.charCodeAt(0);
  while (columnNumber > 0) {
    columnNumber--;
    let code = codeAtA + (columnNumber % 26);
    title = String.fromCharCode(code) + title;
    columnNumber = Math.floor(columnNumber / 26);
    console.log({ code, title, columnNumber })
  }
  return title;
};

console.log(convertToTitle(1000));