<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>CMPS183: Homework 3 | Edit</title>
    <!-- link css stylesheets -->
    <link rel="stylesheet" href="css/header-footer-sidebar.css" type="text/css">
    <link rel="stylesheet" href="css/todoForm.css" type="text/css">
</head>

<body id="body">

    <div id="header"></div>
    <div id="navbar"></div>

    <div id="contentSidebarContainer">
        <!-- div so that navbar is only as tall as content -->
        <div id="sidebar"></div>
        <div id="content">
            <h3>Edit Task</h3>
            <form name="form" action="{{id}}" method="POST" onsubmit="submitForm();">
                <input type="text" id="task" name="task" value={{task}}>
                <br>
                <input type="text" id="notes" name="notes" value={{notes}}>
                <br>
                % ticked = "checked" if done>0 else ""
                <input type="datetime-local" id="posted" name="posted" value={{posted}} disabled="true">
                <input type="datetime-local" id="updated" name="updated" value={{updated}} disabled="true"><br>
                <input type="date" id="due" name="due" value={{due}}>
                <input type="checkbox" class="done" name=done {{ticked}}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>

    <div id="footer"></div>
    <!-- link js scripts -->
    <script src="scripts/header-footer-sidebar.js" type="text/javascript"></script>
    <script src="scripts/todoForm.js" type="text/javascript"></script>
</body>

</html>