//put form for new item at the top of the content div
function newItem(){
    var content = document.getElementById("content");
    fetch('/new')
    .then(function(response) {
        // content.appendChild(response);
        response.text().then(function (text){
            // console.log(text);
            var parser = new DOMParser();
            var newFormDoc = parser.parseFromString(text, "text/html");
            content.insertBefore(newFormDoc.getElementsByTagName("div")[0], content.childNodes[0]);
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

//add link to each reference
addRef("https://stackoverflow.com/questions/29358230/bottle-web-app-not-serving-static-css-files", "linking static files with bottle");
addRef("https://bottlepy.org/docs/dev/tutorial_app.html", "bottle to-do tutorial");

//add notes to notesList
addNote("Post Date/Time and Due Date");
addNote("Sort Todo List by Date");
