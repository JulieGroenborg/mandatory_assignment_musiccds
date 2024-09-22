

document.getElementById("theform").addEventListener("submit", function(e) {
    e.preventDefault();

// Getting the values of the submited inputfields
const authorValue = e.target.author.value;
const titleValue = e.target.title.value;
const yearValue = e.target.year.value;

// Creating a new row (<tr>) in the table
const newRow = document.getElementById("table").insertRow();

// Creating cells (<td>) for each input values
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);
const cell4 = newRow.insertCell(3);
// Set the text content of the cells to the values of the inputfields
cell1.textContent = authorValue;
cell2.textContent = titleValue;
cell3.textContent = yearValue;

// Emptying the inputfields (this can be used because I use a traditional function and NOT an arrow function)
this.reset()

// Creates cell4 with "slet" and are adding the class="delete"
cell4.textContent = "slet";
cell4.classList.add("delete");
cell4.style.cursor = "pointer";
})

// Creating a function which deletes the specifik row
document.querySelector("#table").addEventListener("click", (e) => {
    //If the element that has been clicked contains class="delete" then.
    if (e.target.classList.contains("delete")) {
        // Get the parent row (the <tr> element)
        const row = e.target.closest("tr");
        // Remove the row from the table
        if (row) {
            row.remove();
        }
    }
})