#to make initial db entries

import sqlite3

conn = sqlite3.connect('todo.db') # Warning: This file is created in the current directory
conn.execute("CREATE TABLE todo (id INTEGER PRIMARY KEY, task char(100) NOT NULL, notes char(200), due char(10) NOT NULL, "
    + "posted DATETIME NOT NULL, updated DATETIME NOT NULL, done bool NOT NULL)")
conn.execute("INSERT INTO todo (task,due,posted,updated,done) VALUES ('Get a good introduction into Python',"
    + "'2018-02-28','2018-02-28 18:52:23','2018-02-28 18:52:30',0)")
conn.execute("INSERT INTO todo (task,due,posted,updated,done) VALUES ('Finish todo list',"
    + "'2018-03-01','2018-02-28 18:52:25','2018-02-28 18:52:32',1)")
conn.execute("INSERT INTO todo (task,due,posted,updated,done) VALUES ('Make databse',"
    + "'2018-03-03','2018-02-28 18:52:29','2018-02-28 18:52:34',1)")
conn.execute("INSERT INTO todo (task,due,posted,updated,done) VALUES ('route on server',"
    + "'2018-03-05','2018-02-28 18:52:31','2018-02-28 18:52:36',0)")
conn.commit()
