/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  //TO DO: If there is a rowconflict, skip to next row
  // return true if row conflict is found

  var solution = new Board({n: n});
  //0: row, 1: col
  var row = arguments[1] ? arguments[1] : 0;
  var col = arguments[2] ? arguments[2] : 0;

  var placeNextRook = function(row, col) {
    solution.togglePiece(row, col);

    if (solution.hasRowConflictAt(row) || solution.hasColConflictAt(col)) {
      solution.togglePiece(row, col);
    }
  };

  solution.togglePiece(row, col);
  //solution.togglePiece(0, 0);

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i !== row && j !== col) {
        placeNextRook(i, j);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
