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
    var oldAction = document.form.action;
    document.form.action="";
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
    var date = new Date();

    if (String(task.value).length < 1){
        window.alert("Task field must not be blank");
        window.location = '/';
        return;
    }
    else if (String(due.value).length < 1){
        window.alert("Due date must be entered");
        return;
    }
   else if (dueArray[0] < year){
        window.alert("Due date's year must be today or later");
        return;
    }
    
    else if ((dueArray[0] == year) && (dueArray[1] < month)){
        console.log("old month");
        window.alert("Due date's month must be today or later");
        return;
    }
    else if ((dueArray[0] == year) && (dueArray[1] == month) && (dueArray[2] < date.getDate())){
        window.alert("Due date's date must be today or later");
        return;
    }
    //since entries are valid, we can submit form
    else{
        document.form.method="POST";
        document.form.action=oldAction;
    }
}

//function to remove 
function removeNewForm(cancel){
    var newForm = cancel.parentElement.parentElement;
    var content = newForm.parentElement;
    content.removeChild(newForm);
}

