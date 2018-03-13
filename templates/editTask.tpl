<div id="editForm">
    <h3>Edit Task</h3>
    <form name="form" action="edit/{{id}}" method="POST" onsubmit="submitForm();">
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
        <button type="button" onclick="removeEditForm(this,{{id}});">Cancel</button>
    </form>
</div>