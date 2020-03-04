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
  /*
1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.
*/
function getUSA() {

    var allElements = document.body.getElementsByTagName("*");

    var searchText = 'USA';

    var foundSearch;

    for (var i = 0; i < allElements.length; i++) {

        if (allElements[i].textContent == searchText) {

          foundSearch = allElements[i].innerHTML;

          console.log(foundSearch);

        }

      }
    return;
}

/*  
2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.
*/
function getPeopleInSales() {

    var allElements = document.body.getElementsByTagName("*");

    var searchText = 'Sales';

    var foundSearch;

    var parent;

    var name;

    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].textContent == searchText) {

          foundSearch = allElements[i];

          parent = foundSearch.parentElement;

          name = parent.getElementsByClassName("empName")[0].innerHTML;

          console.log(name);

        }
      }
    return;
}



/*
3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>
  */
 function getAnchorChildren() {

    var allAnchorElements = document.body.getElementsByTagName("a");

    var foundSpan;

    for (var i = 0; i < allAnchorElements.length; i++) {

        var allChildNodes = allAnchorElements[i].childNodes;

        for (var j = 0; j < allChildNodes.length; j++) {

            if (allChildNodes[j].nodeName == "SPAN") {

                foundSpan = allChildNodes[j].innerHTML;

                console.log(foundSpan);

            } 

        }

      }

    return;

 }


  /*
4. Hobbies
Define function getHobbies()
Find the checked option in the 'hobbies' select element.
Print the value and the contents.
*/
function getHobbies() {

    var hobbies = document.getElementsByName("hobbies")[0];

    var selectedValue = hobbies.options[hobbies.selectedIndex].value;

    console.log(selectedValue);

}

/*  
5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.
*/
function getCustomAttribute() {

    var allElements = document.body.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {

        if (allElements[i].hasAttribute('data-customAttr')) {

          console.log("The value is: " + allElements[i].getAttribute("data-customAttr"));

          console.log("The element is: " + allElements[i].nodeName);

        }

      }

    return;
}



/*
6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element
*/


function sumEvent() {

    let num1 = document.getElementById("num1").value;

    let num2 = document.getElementById("num2").value

    let sum = parseInt(num1) + parseInt(num2);

    if (isNaN(sum)) {

        document.getElementById("sum").innerHTML = "Cannot add";

    } else {

        document.getElementById("sum").innerHTML = sum;        

    }

    return;

}


/*
7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.
*/
function skillEvent() {

    var skills = document.getElementsByName("skills")[0];

    var selectedValue = skills.options[skills.selectedIndex].value;

    alert("Try again, " + selectedValue + " is not one of your skills");

    return;
}


/*
8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
*/
function colorEvent() {

    var radios = document.forms["firstForm"].elements["favoriteColor"];
    
    var previousVal;

    // find what is currently checked, set its value to previousval
    for(var i = 0, max = radios.length; i < max; i++) {

        if (radios[i].checked) {

            previousVal = radios[i].value;

            break;

        }
    }

    // set onclick listener to return newly selected color
    // and output a message comparing newly selected to 
    // previous selected
    for(var i = 0, max = radios.length; i < max; i++) {

        radios[i].onclick = function() {

            alert("So you like " + this.value + " more than " + previousVal + " now?");
        
        }
    }

    return;
}

/*
9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
    Show the name if hidden.
*/
function showHide() {

    var tables = document.getElementsByTagName("table")[0];

    var names = tables.getElementsByClassName("empName");

    for (var i =  0; i < names.length; i++) {

        if (event.target == names[i]) {


            if (event.target.style.color == "white") {

                event.target.style.color = "black";

            } else {

                event.target.style.color = "white";

            }

        }

    }
    return;
}    


/*
10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.
*/
function currentTimeOnh5() {

    var date = new Date();

    var hours = date.getHours();

    var minutes = date.getMinutes();

    var seconds = date.getSeconds();

    var ampm = AMorPM(hours);

    hours = formatHours(hours);

    minutes = formatMinutesAndSeconds(minutes);

    seconds = formatMinutesAndSeconds(seconds);

    document.getElementById('currentTime').innerHTML = 
    hours + ":" + minutes + ":" + seconds + " " + ampm;

    var t = setTimeout(currentTimeOnh5, 500);

  }

  function formatMinutesAndSeconds(time) {

    if (time < 10) {time = "0" + time};

    return time;

  }
  
  function formatHours(hours) {

    if (hours > 12) {hours = hours - 12};  

    return hours;

  }

  function AMorPM(hours) {

    if (hours > 12) {return "PM"};

    return "AM"

  }


/*
11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.
*/
function delayOnP() {

    helloWorld = document.getElementById("helloWorld");

    helloWorld.onclick = setTimeout(function () {
         
        let colors = ["blue", "red", "green", "orange", "black"];

        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        helloWorld.style.color = randomColor;
      
      }, 3000);

    return;
}

/*
12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).
*/
function walkTheDOM(node, func) {

    console.log(node.tagName);

    func(node);

    // find the first child
    node = node.firstChild;

    while (node) {

        //walk the dom for the first child
        walkTheDOM(node, func);

        //walk the dom for every other child
        node = node.nextSibling;

    }

    return;
}

window.onload = function() {

    var helloW = this.document.getElementById("helloWorld");

    helloW.addEventListener("click", this.delayOnP);

    currentTimeOnh5();

    delayOnP();

    var num1 = document.getElementById("num1");

    var num2 = document.getElementById("num2");

    num1.addEventListener("change", sumEvent);

    num2.addEventListener("change", sumEvent);

    var skills = document.getElementsByName("skills")[0];

    skills.addEventListener("change", skillEvent);

    var form = document.getElementById("firstForm");

    form.addEventListener("change", colorEvent);

    var tables = document.getElementsByTagName("table")[0];
    
    tables.addEventListener("mouseover", showHide);

    var newElem = document.createElement('div')

    // make a wrapper div for favoriteColor radio buttons
    // so that I can set the background color 
    // COULDN'T GET THIS TO WORK!!!
    // var parent = radios[0].parentNode;
    /*

    Array.prototype.forEach.call(document.getElementsByName("favoriteColor"), function(c){
        newElem.appendChild(c);
    });
    form.appendChild(newElem);

    var wrapper = document.createElement('div');

    var children = document.getElementsByName("favoriteColor"); 

    let i = 0;

    let child = children[i];
    
    while (child) { 

        let parent = child.parentNode;

        this.console.log("parent is " + parent + "child is " + child + "actual parent is " + child.parentElement);

        wrapper.appendChild(child); 

        parent.removeChild(child); 

        i += 1;

        child = children[i];

        } 
        */

    // add div to form so that radio buttons are still 
    // contained within the form, but now within a div
    //form.appendChild(wrapper);

}