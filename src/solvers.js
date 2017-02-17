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
  var solutionCount = 0;

  var board = new Board({n: n});

  // var checkForRowConflict = function(row) {
  //   if (row >= n) {
  //     solutionCount++;
  //     return;
  //   }
  //   for (var j = 0; j < n; j++) {
  //     board.togglePiece(row, j);

  //     if (!board.hasColConflictAt(j)) {
  //       checkForRowConflict(row + 1);
  //     }

  //     board.togglePiece(row, j);
  //   }
  // };

  // checkForRowConflict(0);

  var findSolution = function(board, cols, row) {
    if (row === cols) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < cols; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        findSolution(board, cols, row++);
      }

      board.togglePiece(row, i);
    }
  };

  findSolution(board, n, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // if (n == 0) {
  //   return [];
  // }

  //var solution = new Board({n: n});
  //var n = solution.get('n');

  // var row = 0;
  // var col = 1;

  // var placeNextQueen = function(row, col) {
  //   solution.togglePiece(row, col);

  //   if (solution.hasAnyQueensConflicts()) {
  //     solution.togglePiece(row, col);
  //   }
  // };

  // solution.togglePiece(row, col);

  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     if (i !== row && j !== col) {
  //       placeNextQueen(i, j);
  //     }
  //   }
  // }

  // var inner = function(board, cols, row) {
  //   var count = 0;

  //   if(board.get('n') == row) {
  //     return count;
  //   }

  //   board.togglePiece(row, cols);
  //   count++;

  //   if (board.hasAnyQueensConflicts()) {
  //     count--;
  //     board.togglePiece(row, cols);
  //   }

  //   inner(board, cols, row++);
  // }

  // for (var i = 0; i < n; i++) {
  //   var temp = inner(solution, solution.rows()[i], 0);
  //   // check if queens is equal to n;
  //   if (temp == n) {
  //     break;
  //   }
  // }

  // var outer = function(board, col, row) {

  // };
  // outer(solution, 0, 0);

  // var inner = function(board, col) {
  //   var queens = n;

  //   for (var i = 0; i < n; i++) {
  //     for (var j = col; j < n; j++) {
  //       solution.togglePiece(i, j);
  //       queens--;

  //       //if (board.hasRowConflictAt(i) || board.hasColConflictAt(j) || board.hasMajorDiagonalConflictAt(j) || board.hasMinorDiagonalConflictAt(j)) {
  //       if (board.hasAnyQueensConflicts()) {
  //         board.togglePiece(i, j);
  //         queens++;
  //       }

  //       if (!queens) {
  //         return queens;
  //       }
  //     }
  //   }

  //   return queens;
  // };

  // var temp;

  // for (var i = 0; i < n; i++) {
  //   if (temp != 0) {
  //     solution = new Board({n:n});
  //     temp = inner(solution, i);
  //   }
  // }



  // var solution = new Board({n: n});

  // var checkForRowConflict = function(row) {
  //   if (row >= n) {
  //     solutionCount++;
  //     return;
  //   }
  //   for (var j = 0; j < n; j++) {
  //     board.togglePiece(row, j);

  //     if (!board.hasColConflictAt(j)) {
  //       checkForRowConflict(row + 1);
  //     }

  //     board.togglePiece(row, j);
  //   }
  // };

  // checkForRowConflict(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
