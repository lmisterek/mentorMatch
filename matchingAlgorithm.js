
//  Matching Algorithm for 3 lists


//  Take in data from data sheet
//  TO DO:  Turn the data into a structure

// Sample Data
//  TO DO:  If the lists are not the same size, then some changes may be needed
var numRows = 4;
var numCols = 6;

var A = [[1, 0, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1], [1, 0, 1, 0, 1, 0], [0, 0, 1, 1, 0, 1]];
var B = [[0, 1, 1, 0, 0, 0], [1, 0, 0, 1, 1, 1], [0, 1, 1, 0, 1, 0], [1, 1, 0, 0, 1, 1]];
var C = [[0, 1, 1, 1, 0, 0], [1, 0, 1, 0, 0, 1], [1, 1, 0, 0, 0, 0], [1, 0, 1, 1, 1, 1]];
var D = [[1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1]];

var list = [A, B, C, D];


//  Create a function that will do this for a list of matches for one match

var matchList = {};


//  Match each Matrix against another matrix
for (var i = 0; i < list.length; i++) {

	for (var j = 0; j < list.length; j++) {
		
		  console.log(scoreMatch(checkMatches(list[i], list[j])));
	}

}

var A_B = checkMatches(A, B);
var A_C = checkMatches(A, C);


console.log(scoreMatch(A_B));
console.log(scoreMatch(A_C));


console.log(A_B);


// This function scores the match and returns the sum of the values
// It multiplies each match by a weight and then sums the matches and returns a scalar value

function scoreMatch (A) {

	// initialize score
	var score = 0;

	// Set weights for each list
	var weights = [5, 2, 2, 1];

	for (var i = 0; i < numRows; i++) {

		for (var j = 0; j < numCols; j++) {

			score += weights[i]*A[i][j];	

		}
	}

	return score;

}




// This function will return a matrix that records the number of matches in each position
function checkMatches (A, B) {

	// initial match matrix
	var D = [[], [], [], []];

	//  Loop through the entries to find if there are common entries
	for (var i = 0; i < numRows; i++) {


		for (var j = 0; j < numCols; j++) {

			// Determine if the entries are the same
			if (A[i][j] + B[i][j] == 2)
				D[i].push(1);
			else
				D[i].push(0);
		}
	}

	// return the match matrix
	return D;

}



