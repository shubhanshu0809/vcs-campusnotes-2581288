
function addNote() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please enter title and notes!");
        return;
    }

    const note = document.createElement("div");
    note.className = "note";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function() {
        if (confirm("Are you sure you want to delete this note?")) {
            note.remove();
        }
    };

    note.appendChild(heading);
    note.appendChild(paragraph);
    note.appendChild(deleteButton);

    document.getElementById("notes").appendChild(note);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

