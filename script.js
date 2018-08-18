var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var remove =  document.getElementsByClassName("delete");
var li = document.querySelectorAll("li");



function inputLength(){
   return input.value.length;
}



// This adds input with delete button
function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  var button = document.createElement("Button");
  button.innerHTML = "Delete";
  li.appendChild(button);
}




function addListAfterClick() {

     if (inputLength() > 0) {
         createListElement();
     }
  }



function addListAfterKeypress(event){
      if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
      }
    }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);


// function removeListElement(classList.toggle("complete");
// // done.addEventListener("click", );


// function
// class.addEvent("delete")


//attempt to delete list item
function removeTask(){
document.querySelector("button").classList.remove("delete");
}
button.addEventListener("click", removeTask);


//attempt to cross out completed items
function checkListElement() {
  document.querySelectorAll("li").classList.toggle("done");
}
li.addEventListener("click", checkListElement);
