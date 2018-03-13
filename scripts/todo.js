var list = document.getElementById("list");

var oldRows = {}

//function for showing/hiding to-do items
function show(type){
    //send request to show right tasks
    var url = "show/" + type;
    window.location.href="/" + url
}

//function for sorting
function sort(dateType){
    //make appropriate backend calls for sorting
    var url = "sort/" + dateType
    window.location.href="/" + url
}

//function for deleting a task from the server's DB
function deleteTask(deleteButton){
    //get ID of task
    var row = deleteButton.parentElement.parentElement;
    var rowId = row.childNodes[1];
    rowId = rowId.innerHTML;

    var url = "delete/" + rowId;
    window.location.href="/" + url
}

//function to insert edit form in place
function editTask(edit, row){
    // console.log(row);
    var rowElement = edit.parentElement.parentElement;

    fetch('/edit/' + row)
    .then(function(response) {
        // content.appendChild(response);
        response.text().then(function (text){
            // console.log(text);
            var parser = new DOMParser();
            var newFormDoc = parser.parseFromString(text, "text/html");
            var newRow = document.createElement("tr");
            var formCell = document.createElement("td");
            formCell.appendChild(newFormDoc.getElementsByTagName("div")[0]);
            newRow.appendChild(formCell);

            //save row in case user clicks cancel
            var taskNum = rowElement.getElementsByTagName("td")[0].innerText;
            oldRows[taskNum] = rowElement.cloneNode(true);
            //clear row
            while (rowElement.firstChild) {
                rowElement.removeChild(rowElement.firstChild);
            }
            //add new row with edit form in it
            rowElement.appendChild(formCell);
        });
    })
    .catch(function(err) {
        var errorHeading = document.createElement("h3");
        errorHeading.className = "error";
        var errStr = document.createTextNode(String(err));
        errorHeading.appendChild(errStr);
        content.appendChild(errorHeading);
        setTimeout(() => {content.removeChild(errorHeading)}, 5000);
    });
}

function removeEditForm(cancel, id){
    //remove edit form
    var newForm = cancel.parentElement.parentElement;
    var content = newForm.parentElement; //the cells which holds the form
    content.removeChild(newForm);

    //replace with old cells
    content = content.parentElement; //set content to the row so we can append old cells
    content.removeChild(content.firstChild);
    var oldCells = oldRows[id].getElementsByClassName("element");
    // content.parentElement.insertBefore(oldRows[id],content.parentElement.childNodes[id]);
    content.parentElement.appendChild(oldRows[id]);
}

//references
addRef("http://www.sqlitetutorial.net/sqlite-order-by/", "sorting SQL tables");
