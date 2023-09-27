const transpose = require("./matrix_transposition");
const wordSearch = (letters, word) => {

  if (word === "") {
    return false;
  }

  if (letters.length === 0) {
    return false;
  }

  //["h","e","l","l","o"] <--if we call join here,
  //"hello" <---after join

  //after map is finished completely
  //horizontal join looks like this
  [
    "hello",
    "world",
    "vadym"
  ];

  //this is for searching horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  //do the same thing for this matrix
  const newMatrix = transpose(letters);

  //this ALSO searches horizontally, BUT it's on a newly transposed matrix
  const verticalJoin = newMatrix.map(ls => ls.join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  //console.log(newMatrix);

  //return false if worsdSearch cannot find anything at all
  return false;
};

module.exports = wordSearch;


