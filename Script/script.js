let addNoteBtn = document.getElementById('addNote');
showNotes()
addNoteBtn.addEventListener('click', function() {
    let addNote = document.getElementById('textarea').value;
    if (addNote == "") {
        alert("Add any Note");
        // break;
        exit;
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addNote);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes()
});

function showNotes() {
    let notes =localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="noteCard">
            <div class="card-body">
                <h4 class="card-title">Note ${index + 1}</h4>
                <hr>
                <p class="card-text">${element}</p>
                <hr>
                <button id="${index}" onclick="deleteNote(this.id)" class="Btn Btn2" id = "DeleteBtn">Delete</button>
            </div>
        </div>
        `;
    });

    let notesDisplay = document.getElementById('notesDisplay');
    notesDisplay.innerHTML = html;
}

function deleteNote(index){

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});


// TextUtils Functions Starts from here


let CTU = document.getElementById("CTU");
let CTL = document.getElementById("CTL");
let RLN = document.getElementById("RLN");
let RP = document.getElementById("RP");
let RES = document.getElementById("RES");
let Ctxt = document.getElementById("Ctxt");

CTU.addEventListener('click', function ConvertTextUppercase() {
    let textarea = document.getElementById('textarea')
    let txt = textarea.value;
    let CTUtxt = txt.toUpperCase();
    updateText(CTUtxt)
})


CTL.addEventListener('click', function ConvertTextLowercase() {
    let textarea = document.getElementById('textarea')
    let txt = textarea.value;
    let CTLtxt = txt.toLowerCase();
    updateText(CTLtxt)
})

// This Function Removes Puctuation's from the Text
RP.addEventListener('click', function removepunc() {
    let textarea = document.getElementById('textarea')
    let txt = textarea.value;
    let RPTxt = txt.replace(/[[.,\/#!$%\^&\*;:{}=\-_`~('")]/g, "")
    updateText(RPTxt)
})



// Function to Remove Numbers
RLN.addEventListener('click', function removenumbers() {
    let textarea = document.getElementById('textarea')
    let txt = textarea.value;
    let RLNTxt = txt.replace(/[0-9]/g, "");
    updateText(RLNTxt)
})


// This Function Removes Extra Spaces in the Text
RES.addEventListener('click', function removespaces() {
    let textarea = document.getElementById('textarea')
    let txt = textarea.value;
    RESTxt = txt.replace(/\s+/g, " ");
    updateText(RESTxt)
})



// This Function Clear's the Text
Ctxt.addEventListener('click', function cleartxt() {
    let textarea = document.getElementById('textarea')
    let txt = textarea.value;
    txt = "";
    CTxt = txt
    updateText(CTxt)
})



function updateText(CTtxt) {
    let textarea = document.getElementById('textarea')
    txt = CTtxt
    textarea.value = txt;
}