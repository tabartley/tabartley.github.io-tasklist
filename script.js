var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
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
  addDeleteButton(li);
  addToggleListener(li);

}

function addDeleteButton(li){
  var btnDelete = document.createElement("button");
  btnDelete.innerHTML = "Delete";
  li.classList.add("delete");
  li.appendChild(btnDelete);

}



function deleteListItem() {

}

btnDelete.addEventListener("click", deleteListItem);








function addToggleListener(li){
  li.addEventListener("click",toggleItem);
}

function toggleItem(event){
  console.log("a click happened");
  event.target.classList.toggle("done");
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
