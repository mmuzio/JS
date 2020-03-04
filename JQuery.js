/*
1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.
*/
function getUSA() {
    let searchText = "USA";
  
    $(document).ready(function(){
  
      let list = $("span");
  
      for (let i = 0; i < list.length ; i++) {
  
        if (list[i].textContent == searchText) {
  
          console.log(list[i].innerHTML);
  
        }
  
      }
  
    });
    
  }
  
  /*  
  2. Sales
  Define function getPeopleInSales()
  Print the names of all the people in the sales department.
  */
  function getPeopleInSales() {
  
    let searchText = "Sales";
  
    $(document).ready(function(){
  
      let list = $("*");
  
      for (let i = 0; i < list.length ; i++) {
  
        if (list[i].textContent == searchText) {
  
          foundSearch = list[i];
  
          parent = foundSearch.parentElement;
  
          name = parent.getElementsByClassName("empName")[0].innerHTML;
  
          console.log(name);
  
        }
  
      }
  
    });
  
    return;
  
  }
  
  
  
  /*
  3. Click Here
  Define function getAnchorChildren()
  Find all anchor elements with a <span> child.
  Print the contents of <span>
    */
  function getAnchorChildren() {
  
    $(document).ready(function(){
  
      let allAnchorElements = $("a");
  
      for (let i = 0; i < allAnchorElements.length ; i++) {
  
        var allChildNodes = allAnchorElements[i].childNodes;
  
        for (let j = 0; j < allChildNodes.length; j++) {
  
            if (allChildNodes[j].nodeName == "SPAN") {
  
                foundSpan = allChildNodes[j].innerHTML;
  
                console.log(foundSpan);
  
            } 
  
        }
  
      }
  
    });
  
    return;
  
   }
  
  
    /*
  4. Hobbies
  Define function getHobbies()
  Find the checked option in the 'hobbies' select element.
  Print the value and the contents.
  */
  function getHobbies() {
  
    $(document).ready(function(){
  
      var hobby = $('[name="hobbies"] option').filter(':selected').text();
  
      console.log(hobby);
  
    });
  
    return;
  
  }
  
  /*  
  5. Custom Attribute
  Define function getCustomAttribute()
  Find all elements with "data-customAttr" attribute
  Print the value of the attribute.
  Print the element that has the attribute.
  */
  function getCustomAttribute() {
  
    $(document).ready(function(){
  
      let custom = $("[data-customAttr]").attr("data-customAttr");
  
      console.log(custom);
  
    });
  
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
  
      let num1 = $("#num1").val();
  
      var num2 = $("#num2").val();
  
      var sum = parseInt(num1) + parseInt(num2);
  
      if (isNaN(sum)) {
  
        $("#sum").html("Cannot add");
  
      } else {
  
        $("#sum").html(sum);        
  
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
  
    $(document).ready(function(){
  
      var skills = $('[name="skills"] option').filter(':selected').text();
  
      alert("Are you you sure " + skills + " is one of your skills?");
  
      });
  
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
  var colorHistory = new Array();
  
  colorHistory[0] = "blue";
  
  function colorEvent() {
  
      var faveColor = $("#firstForm input[name=favoriteColor]:checked").val();//.html();//.filter(':selected').text();
  
      colorHistory[1] = faveColor;
  
      alert("So you like " + colorHistory[1] + " more than " + colorHistory[0] + " now?");
  
      colorHistory[0] = faveColor;
  
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
      
      if($(this).css("color") == "rgb(0, 0, 0)"){
  
        $(this).css("color", "white");
  
      } else {
        
        $(this).css("color", "black");
        
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
  
      $('#currentTime').html(hours + ":" + minutes + ":" + seconds + " " + ampm);
  
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
  
    helloWorld = $('#helloWorld');
  
    console.log('here');
  
      setTimeout(function () {
  
          let colors = ["blue", "red", "green", "orange", "black"];
  
          let randomColor = colors[Math.floor(Math.random() * colors.length)];
  
          helloWorld.css("color", randomColor);
        
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
  
      node = $(`${node}:first-child`)
  
      while (node) {
  
          walkTheDOM(node, func);
  
          node = $(`${node}`).next();
  
      }
  
      return;
  }
  
  window.onload = function() {
  
      currentTimeOnh5();
  
      var num1 = $("#num1");
  
      var num2 = $("#num2");
  
      var skills = $("select[name=skills]");
  
      var forms = $("#firstForm input[name=favoriteColor]");
  
      var employees = $('.empName');
      
      helloWorld = $('#helloWorld');
  
      $(document).ready(function() { 
  
        num1.change(sumEvent);
  
        num2.change( sumEvent);
  
        skills.change(skillEvent);
  
        forms.change(colorEvent);
  
        helloWorld.change(delayOnP);
  
      });
  
      employees.on("mouseenter", showHide);
  
  }