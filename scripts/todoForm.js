//called on body load, sets default due date to today
function setDate(){
    var due = document.getElementById("due");
    var date = new Date();
    var year = parseInt(date.getFullYear());
    var month = parseInt(date.getMonth()) + 1;
    var date = parseInt(date.getDate());
    var dueString = year + "-";
    if (String(month).length < 2){
        dueString += "0" + month;
    } else{
        dueString += month;
    }
    dueString += "-"
    if (String(date).length < 2){
        dueString += "0" + date;
    } else{
        dueString += date;
    }
    due.value = dueString;
}

//function to validate form and alert if entries are invalid
function submitForm(){
    document.form.method="GET"; //so that form doesn't submit until we're sure entries are valid
    var task = document.getElementById("task");
    var notes = document.getElementById("notes");
    var due = document.getElementById("due");

    var dueArray = (String(due.value).split("-")); //split incoming data into numbers
    var date = new Date();
    for(var i=0; i<3; i++){
        dueArray[i] = parseInt(dueArray[i]);
    }
    var year = parseInt(date.getFullYear());
    var month = parseInt(date.getMonth()) + 1;
    var date = parseInt(date.getDate());

    if (String(task.value).length < 1){
        window.alert("Task field must not be blank");
        return;
    }
    if (String(due.value).length < 1){
        window.alert("Due date must be entered");
        return;
    }
    if (dueArray[0] < year){
        window.alert("Due date's year must be today or later");
        return;
    }
    
    if ((dueArray[0] == year) && (dueArray[1] < month)){
        console.log("old month");
        window.alert("Due date's month must be today or later");
        return;
    }
    var date = new Date();
    if ((dueArray[0] == year) && (dueArray[1] == month) && (dueArray[2] < date.getDate())){
        window.alert("Due date's date must be today or later");
        return;
    }
    document.form.method="POST"; //since entries are valid, we can submit form
}

//refs
addRef("http://javascript-coder.com/html-form/html-form-action.phtml", "managing form actions with js");

//notes
addNote("There were very few issues adapting this page from client-side work to server-side");