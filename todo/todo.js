const fs = require('fs')
const colors = require('colors')

let listTodo = []

const saveDb = () => {
    
    let data = JSON.stringify(listTodo)
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('Cannot save the task')
    })
}

const loadDb = () => {
    
    try {

        listTodo = require('../db/data.json')

    } catch (error) {

        listTodo = []

    }
}

const create = (description) => {

    loadDb()

    let todo = {
        description,
        complete: false,
    }
    listTodo.push(todo)

    saveDb()
    console.log('Task added in To Do List')

    return console.log(todo)
}

const list = () => {
    
    loadDb()

    console.log('================================  To Do list  ================================'.green)
    listTodo.forEach(task => {
        console.log('=============================================================================='.green)
        console.log(`${task.description}`)
        console.log(`status: ${task.complete != true ? 'Pending'.red : 'Completed'.cyan}`.yellow)
    });
}

const update = (desc, complete = true) => {

    loadDb()

    let index = listTodo.findIndex(task => task.description === desc)

    if(index >= 0){
        listTodo[index].complete = complete
        saveDb()
        console.log('Task status updated successfully')
    }
    else{
        console.log(`The task "${desc}" do not exist in To Do list`)
        return false
    }
}

const remove = (desc) => {
    
    loadDb()

    let index = listTodo.findIndex(task => task.description === desc)
    
    if(index >= 0){
        listTodo.splice(index, 1)
        saveDb()
        console.log('Task removed successfully')
    }
    else{
        console.log(`The task "${desc}" do not exist in To Do list`)
        return false
    }
}

module.exports = {
    create,
    list,
    update,
    remove
}