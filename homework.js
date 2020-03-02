/*
Homework.js
Michael Muzio
*/

/*
1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence.
*/
function fib(n) {

    if (n == 1 | n == 2) {

        return 1;

    } else {

        return fib(n-1) + fib(n-2);

    }

}

/*
2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
*/
function bubbleSort(numArray) {

    for (j=0; j<numArray.length-1; j++) {

        for (i=0; i<numArray.length-1; i++) {

            if (numArray[i] > numArray[i+1]) {

                let first = numArray[i];

                numArray[i] = numArray[i+1];

                numArray[i+1] = first;

            }

        }

    }

    return numArray;
}
/*
3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.
*/
function reverseStr(someStr) {

    let first;

    let last;

    let length = someStr.length;

    for (i = 0; i < length / 2 ; i++) {

        first = someStr.charAt(i);

        last = someStr.charAt(length-1-i);

        someStr = setCharByIndex(someStr, i, last);

        someStr = setCharByIndex(someStr,length-1-i, first);

    }

    return someStr;

}

function setCharByIndex(str,index,chr) {

    if(index > str.length-1) return str;

    return str.substr(0,index) + chr + str.substr(index+1);

}

/*
4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.
*/
function factorial(someNum) {

    if (someNum == 1) {

        return 1;

    } else {

        return someNum * factorial(someNum-1);

    }

}

/*
5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.
*/
function substring(someStr, length, offset) {

    if (offset < 0 | length < 0) {

        alert("You can't have negative length or offset");

    } else if (offset + length > someStr.length - 1) {

        alert("You can't have length + offset greater than length of input string");

    }  else {

        return someStr.substr(offset, length);

    }

}

/*
6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
*/
function isEven(someNum) {

    let floored = Math.floor(someNum / 2)*2;

    if (floored == someNum) {

        return true;

    } else {

        return false;

    }

}


/*
7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false
*/
function isPalindrome(someStr) {

    if (someStr == reverseStr(someStr)) {
        
        return true;

    } else {

        return false;

    }
}
/*
8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  *
*/
function printShape(shape, height, character) {

    switch(shape) {

        case "Square":

            for (i=1; i <= height; i++) {

                console.log(character.repeat(height));

            }

            break;

        case "Triangle":

            for (i=1; i <= height; i++) {

                console.log(character.repeat(i));

            }

            break;

        case "Diamond":

            let count = 0;

            for (i=1; i <= height; i+=2) {

                console.log(" ".repeat((height-i)/2) + character.repeat(i) + " ".repeat((height-i)/2) + "           first" + i);

            }

            for (i = height - 2; i > 0; i-=2) {

                console.log(" ".repeat((height-i)/2) + character.repeat(i) + " ".repeat((height-i)/2) + "           second" + i);

            }

            break;

        default: 

            break;
    
    }

    return;
}

/*
9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.
*/
function traverseObject(someObj) {

    for (var key in someObj) {

        console.log(key + ": " + someObj[key]);

    }

    return;
}
/*
10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.
*/
function deleteElement(someArr) {

    console.log(someArr.length);

    //traverseObject(someArr);

    delete(someArr[2]);
    
    console.log(someArr.length);

    //traverseObject(someArr);

    return;
}

/*
11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.
*/
function spliceElement(someArr) {

    console.log(someArr.length);

    //traverseObject(someArr);

    someArr.splice(2,1);

    console.log(someArr.length);

    //traverseObject(someArr);

    return;
}

/*
12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
    var john = new Person("John", 30);
    */
function Person(name, age) {

    this.name = name;

    this.age  = age;

}

/*
13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
	var john = getPerson("John", 30);
*/

function getPerson(name, age) {

    return {name: name, age: age};
    
}

 
 
/* 
-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
Put your Javascript in the provided <script> element at the bottom of the page.
Please put the question itself as a comment above each answer.

NOTE: Part II will be done twice: once with Javascript and once with jQuery.
	  They should be done separately.
	  Copy the index.html file and rename them to: indexJavascript.html and indexJQuery.html
-----------------------------------------------------------------------------------
