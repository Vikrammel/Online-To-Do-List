<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>CMPS183: Homework 3 | List</title>
        <!-- link css stylesheets -->
        <link rel="stylesheet" href="css/header-footer-sidebar.css" type="text/css">
        <link rel="stylesheet" href="css/todo.css" type="text/css">
    </head>
    <body id="body">

            <div id="header"></div>
            <div id="navbar"></div>

            <div id="contentSidebarContainer"> <!-- div so that navbar is only as tall as content -->
                <div id="sidebar"></div>
                
                <div id="content">
                    <div id="buttons">
                        <button onclick="show('all');">show all</button>
                        <button onclick="show('done');">show completed</button>
                        <button onclick="show('notdone');">show remaining</button>
                    </div>

                    <table id="list">
                        <tr>
                            <th>Task</th>
                            <th>Notes</th>
                            <th style="cursor:s-resize;" onclick="sort('due');">Due ↕</th>
                            <th style="cursor:s-resize;" onclick="sort('posted');">Posted ↕</th>
                            <th style="cursor:s-resize;" onclick="sort('updated');">Updated ↕</th>
                            <th>Done</th>
                        </tr>
                        % for row in listFromDB:
                        % isDone = "checked" if row[6] else ""
                            <tr>
                                % for col in row:
                                    % if row[0] == col:
                                        % pass
                                    % elif row[-1] == col:
                                        <td><input type="checkbox" class="done" name=done value="done" {{isDone}}/></td>
                                    % else:
                                        <td>{{col}}</td>
                                    % end
                                % end
                                <td><button onclick="window.location.href='edit/{{row[0]}}'">edit</button></td>
                                <td><button onclick="deleteTask(this);">delete</button></td>
                            </tr>
                        % end
                    </table>

                    <h4>note: click on table headers to sort</h4>
                </div>
            </div>
            
            <div id ="footer"></div>
            <!-- link js scripts -->
            <script src="scripts/header-footer-sidebar.js" type="text/javascript"></script>
            <script src="scripts/todo.js" type="text/javascript"></script>
        </body>
</html>
