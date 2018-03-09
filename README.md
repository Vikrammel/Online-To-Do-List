# Online To-Do List
### By Vikram Melkote for CMPS 183 at UC Santa Cruz

Single-user to-do list web application. Adapted from previous homework for CMPS 183 which was a fully client-sided (js) to-do list.
Bottle.py webserver used to serve HTML templates for list tables, forms for creating/edtiing tasks and manage a database 
using SQLite3.

### Features
- User can sort to-do list by due date, time posted, time updated
- Can mark a task as done and filter visible tasks by completion status
- User's filter/sort settings persist (sorting and filtering done server-side as well)
- Can edit the title, notes, due date of a task
- Checking to make sure due date is not in the past before adding to list

### Usage
- [Install python](https://www.python.org/downloads/)
- Install `pip` with your package manager
- Install bottle with `pip install bottle`
- Clone/download the repository
- `python controller.py`
- navigate to [http://localhost:8080/list](http://localhost:8080/list)
