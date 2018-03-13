<div id="newForm">
        <h3>New Task</h3>
        <form name="form" action="new" method="POST" onsubmit="submitForm();">
            <input type="text" id="task" name="task" placeholder="task name" /><br/>
            <input type="text" id="notes" name="notes" placeholder="task notes" /><br/>
            <input type="date" id="due" name="due" />
            <input type="checkbox" id="done" name="done" />
            <button type="submit">Save</button>
            <button type="button" onclick="removeNewForm(this);">Cancel</button>
        </form>
</div>