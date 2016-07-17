/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

function random_num (min, max) {
	var num=(Math.random() * (max - min) + min).ToFixed();
	return num;
}
/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
Document.write ("Question 1 - Create an array of image source filenames: ")

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach loop function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here


/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */


// Your code here

// --- 2 ways to do Loop --------------------------------------------------

     var days=["Mon", "Tue", "Wed", "Thu", "Fri"];
     days.push("Sat");

     function printDay0(day) {
     	  var day;
     	  console.log("Fri")     	  
     }

    // Techquine #1 for looping over an array
    //  - using forEach method with callback function
     console.log ("------- Technique2: forEach -------")
     days.forEach(printDay); // setting up a callback
     function printDay(item, index) {
     	  console.log(index, item)  ;   	  
     }


     // Technique #2 for looping over an array
     //    - using the for loop
     console.log ("------- Technique2: forLoop -------")
     for (var i=0; i< days.length; i++) {
     	console.log( i + "==> " + days[i] );
     }


     console.log(Date());

