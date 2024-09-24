const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You can`t leave box empty!");
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; //innerHTML mein jo bhi list mein task hogi woh input box ki value mein store hogi.
    listContainer.appendChild(li); //making changes visible to page
    let span= document.createElement("span"); //creating cross-sign element using span tag ie. can be used for manipulating with js , does not inherently show anything but used for styling files or scripting.
    span.innerHTML= "\u00d7";
    li.appendChild(span); 
  }
  inputBox.value='';
  saveData();
}

// for click function 
 listContainer.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle ("checked");
        saveData();
    } 
    else if (event.target.tagName==="SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false);

// we want to save the data each time it gets created on browser
function saveData() {
    // using localstorage
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
