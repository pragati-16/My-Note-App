showNotes();
// id user adds a note add it to local storage 

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    //my earlier notes
    let notes = localStorage.getItem("notes");
    //we will store notes in array
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes); //(notes is actually an array)
    }
    notesObj.push(addTxt.value);
    //making change in localstorage also 
    localStorage.setItem("notes", JSON.stringify(notesObj));
    //to make textarea clear
    addTxt.value = "";
    console.log(notesObj);
    //function for displaying notes
    showNotes();
});

//functions to show elements from local storage i.e ls se read karega
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes); //(notes is actually an array)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text" id="addTxt">${element}</p> 
          <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)" >Delete Node</button>
        </div>
      </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`;
    }
}

//function to delete a note
//index:array index to be deleted
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes); //(notes is actually an array)
    }
    notesObj.splice(index,1);
    //we have to update our local storage also
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search=document.getElementById("searchTxt");
search.addEventListener("input",function() {
let inputVal=search.value.toLowerCase();     //for both small and large
//checking content of every notecard
let noteCards=document.getElementsByClassName("noteCard");
Array.from(noteCards).forEach(function(element) {
    let cardTxt=element.getElementsByTagName("p")[0].innerText;
      if(cardTxt.includes(inputVal)) {
       element.style.display="block";
      }
      else {
        element.style.display="none";
      }
})
});