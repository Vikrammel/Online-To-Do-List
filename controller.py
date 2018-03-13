import sqlite3
from bottle import *

#seperate routes rather than general route for any file for
#security so users can't make server serve up non html/css/image files

#global vars to keep track of sorting and filter settings
dateType='posted'
order='ASC'
subset='all'

#serve scripts,images,css
@route('/scripts/<filename>')
def serveScript(filename):
    return static_file(filename, root='./scripts/')

@route('/images/<filename>')
def serveImage(filename):
    return static_file(filename, root='./images/')

@route('/css/<filename>')
def serveStyle(filename):
    return static_file(filename, root='./css/')

#home routes
# @route('/')
# @route('/index')
# def serveIndex():
#     return static_file('index.html', root="./")

#todo-list route
@route('/')
@route('/home')
@route('/index')
def serveTodo():
    conn = sqlite3.connect('todo.db')
    c = conn.cursor()
    if(subset=='done'):
        newTable = c.execute('SELECT * FROM todo WHERE done LIKE 1 ORDER BY ' + dateType + " " + order)
    elif(subset == 'notdone'):
        newTable = c.execute('SELECT * FROM todo WHERE done LIKE 0 ORDER BY ' + dateType + " " + order)
    else:
        newTable = c.execute('SELECT * FROM todo ORDER BY ' + dateType + " " + order)
    return template('index', listFromDB=newTable)

#new task route
@route('/new', method=['GET','POST'])
def new_item():

    if request.POST:
        #vars for task
        task = request.POST.get('task')
        notes = request.POST.get('notes')
        due = request.POST.get('due')
        posted = datetime.now()
        updated = datetime.now()
        conn = sqlite3.connect('todo.db')
        done = request.POST.get('done')
        if done: done = 1
        else: done = 0

        #db manipulation
        c = conn.cursor()
        cursor = c.execute('SELECT max(id) FROM todo')
        try: max_id = cursor.fetchone()[0] + 1
        except: max_id = 1
        c.execute("INSERT INTO todo VALUES (?,?,?,?,?,?,?)", (max_id,task,notes,due,posted,updated,done))
        conn.commit()

        return redirect('/')

    else:
        print("returning newTask")
        return template('./templates/newTask')

#edit routes (links from edit form go to /edit/<linkurl>)

@route ('/edit/<folder>/<filename>')
def serveEditFiles(folder, filename):
    return redirect('/'+folder+'/'+filename)

#edit task route
@route('/edit/<id:int>', method=['GET','POST'])
def serveEdit(id=0):

    if request.POST:
        #task variables
        task = request.POST.get('task')
        notes = request.POST.get('notes')
        due = request.POST.get('due')
        done = request.POST.get('done')
        if not done: done=0
        elif str(done)=='on': done=1
        updated = datetime.now()

        #db manipulation
        conn = sqlite3.connect('todo.db')
        c = conn.cursor()
        posted = c.execute("SELECT posted FROM todo WHERE id LIKE " + str(id)).fetchone()[0]
        c.execute('DELETE FROM todo WHERE id LIKE '+str(id))
        c.execute("INSERT INTO todo VALUES (?,?,?,?,?,?,?)", (id,task,notes,due,posted,updated,done))
        conn.commit()

        # redirect to todolist
        return redirect('/')

    else:
        #get task details to prepolulate form fields
        conn = sqlite3.connect('todo.db')
        c = conn.cursor()
        rowObj = c.execute("SELECT id, task, notes, due, posted, updated, done FROM todo WHERE id LIKE " + str(id))
        row = rowObj.fetchall()[0]

        #return template with edit form and task details
        return template('./templates/editTask', id=row[0], task=row[1], notes=row[2], due=row[3],
            posted=row[4], updated=row[5], done=row[6])

@route ('/edit/<linkurl>')
def redirectEditLink(linkurl):
    return redirect('/'+linkurl)

#delete task route
@route('/delete/<id:int>')
def serveDelete(id=0):
    #db manipulation
    conn = sqlite3.connect('todo.db')
    c = conn.cursor()
    c.execute('DELETE FROM todo WHERE id LIKE '+str(id))
    conn.commit()

    return redirect('/')


#route for showing different list elements based on completion
@route ('/show/<showType>')
def serveShow(showType):
    global subset
    if showType == 'notdone': 
        subset = showType
    elif showType == 'done': 
        subset = showType
    else:
        subset = 'all'

    return redirect('/')

#route for sorting list different ways
@route ('/sort/<sortBy>')
def serveSort(sortBy):
    global dateType, order
    dateType = sortBy
    if order == 'ASC': order = 'DESC'
    else: order = 'ASC'

    return redirect('/')

#run
run()

#run-dev
# debug(True)
# run(host='localhost', port=8080, reloader=True)
