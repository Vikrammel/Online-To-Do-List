var list = document.getElementById("list");

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

//references
addRef("http://www.sqlitetutorial.net/sqlite-order-by/", "sorting SQL tables");

//notes
addNote("sorting server side was much easier than using JS");