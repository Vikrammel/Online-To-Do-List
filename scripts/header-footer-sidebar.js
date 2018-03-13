//----------------------------------------------------------------HEADER
//make header element and set its id so css can style it
var header = document.getElementById("header");

//create header content (text and line)
var heading = document.createElement("h1");
var headingText = document.createTextNode("CMPS183: Homework 4");
heading.appendChild(headingText);
var line = document.createElement("hr");

//add header content to header div
header.appendChild(heading);
header.appendChild(line);

//make navbar
var navbar = document.getElementById("navbar");

//make footer element and set id
var footer = document.getElementById("footer");

//create footer content (div of links)
footer.appendChild(document.createElement("hr")); //line
var linksDiv = document.createElement("div");
linksDiv.setAttribute("id", "links");

function addLink(addToElement, link, text, title){
    var linkElem = document.createElement("a");
    linkText = document.createTextNode(text);
    linkElem.appendChild(linkText);
    linkElem.href = link;
    linkElem.title = title;
    if(addToElement=="navbar"){
        navbar.appendChild(linkElem);
    } else if (addToElement=="footer"){
        linksDiv.appendChild(linkElem);
    }
}

//make navbar links
// addLink("navbar", "index", "Home", "ho home");
addLink("navbar", "index", "To Do List", "view todo list");
// addLink("navbar", "new", "To Do Form", "enter new todo list items");

navbar.appendChild(document.createElement("hr")); //line

//make footer links
addLink("footer", "#", "About Us", "learn more about us");
addLink("footer", "#", "Contact", "contact us");
addLink("footer", "#", "Privacy", "privacy policy");
addLink("footer", "#", "Credits", "view credits");

footer.appendChild(linksDiv); //add linksdiv  to footer

//---------------------------------------------------------------SIDEBAR
//make sidebar skeleton
var sidebar = document.getElementById("sidebar");

//add References div to sidebar
var refsDiv = document.createElement("div");
refsDiv.setAttribute("id", "refsDiv");
var refsHeading = document.createElement("h3");
refsHeading.setAttribute("id", "refsHeading");
var refsHeadingText = document.createTextNode("Referenced");
refsHeading.appendChild(refsHeadingText);
refsDiv.appendChild(refsHeading);
// sidebar.appendChild(refsDiv);

//add list to refsDiv
var refList = document.createElement("ul");
refList.setAttribute("id", "refsList");
refsHeading.parentNode.insertBefore(refList, refsHeading.nextSibling);

//add notes div to sidebar
var notesDiv = document.createElement("div");
notesDiv.setAttribute("id", "notesDiv");
var notesHeading = document.createElement("h3");
notesHeading.setAttribute("id", "notesHeading");
var notesHeadingText = document.createTextNode("Bonus Features");
notesHeading.appendChild(notesHeadingText);
notesDiv.appendChild(notesHeading);
// sidebar.appendChild(notesDiv);

//refs and notes wrapper div
var refsNotesDiv = document.createElement("div");
refsNotesDiv.appendChild(refsDiv);
refsNotesDiv.appendChild(notesDiv);
sidebar.appendChild(refsNotesDiv);

//add list to notesDiv
var noteList = document.createElement("ul");
noteList.setAttribute("id", "notesList");
notesHeading.parentNode.insertBefore(noteList, notesHeading.nextSibling);

//add reference function
function addRef(link, text){
    var ref = document.createElement("li");
    var refLink = document.createElement("a");
    refLink.href = link;
    var refText = document.createTextNode(text);
    refLink.appendChild(refText);
    ref.appendChild(refLink);
    refList.appendChild(ref);
}

//add note function
function addNote(text){
    var note = document.createElement("li");
    var noteText = document.createTextNode(text);
    note.appendChild(noteText);
    noteList.appendChild(note);
}
