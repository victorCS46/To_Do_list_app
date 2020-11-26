const description = {
    demand: true, 
    alias: 'd', 
    desc:"task To Do"
}

const argv = require('yargs')
.command('create', 'Create a new task', {
    description
})
.command('update', 'Update the status of some task', {
    description,

    completed: {
        default: true, 
        alias: 'c', 
        desc:"tag a task as pending or completed"
    }
})
.command('list', 'List all the tasks')
.command('remove', 'Remove a task from the list', {
    description
})
.help()
.argv

module.exports ={
    argv,
}