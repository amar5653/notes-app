const btn = document.querySelector(".btn");
let notesBox = document.querySelector(".notes-box");
let notes = document.querySelectorAll(".notes");


function showNotes(){
   notesBox.innerHTML = localStorage.getItem("data");
}
showNotes();


btn.addEventListener("click", () => {
  let p = document.createElement("p");
  let img = document.createElement("img");
  p.classList.add("notes");
  p.setAttribute("contenteditable", "true");
  img.setAttribute("src", "images/delete.png");
  notesBox.appendChild(p).appendChild(img);
});

function updateStorage() {
    localStorage.setItem("data", notesBox.innerHTML);
    showNotes();
}

notesBox.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tageName === "P") {
    notes = document.querySelectorAll(".notes");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateStorage();
      };
    });
  }
});



document.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
