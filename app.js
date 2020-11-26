// const argv2 = require('yargs').argv;
const { argv } = require('./config/yargs')
const { create, list, update, remove } = require('./todo/todo')


let command = argv._[0]
let desc = argv.description
let status = argv.complete


switch(command){
    
    case 'create':
        create(desc)
    break
    
    case 'list':
        list()
    break

    case 'update':
        update(desc, status)
    break

    case 'remove':
        remove(desc)
    break

    default:
        console.log('Unknown command')
}