const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
const eject = chalk.red('Ejected into the ravine!')

console.log('Stop!')

let askForName = {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: answer => {
        if(/Arthur,? King of the Britons[.!]?/i.test(answer)){
            return true
        }
        throw new Error(eject)
    }
}

let askAboutQuest = {
    type: 'input',
    message: 'What is your quest?',
    name:'quest',
    validate: answer => {
        if(/to seek the holy grail[.!]?/i.test(answer)){
            return true
        }
        throw new Error(eject)
    }
}

let askAboutSwallows = {
    type: 'input',
    name: 'favColor',
    message: 'What is the airspeed velocity of an unladen swallow?',
    validate: answer => {
        if(/What do you mean\? African or European swallow\?/i.test(answer)){
            return true
        }
        throw new Error(eject)
    }
}

inquirer.prompt([askForName, askAboutQuest, askAboutSwallows])
    .then(() => {console.log(`Huh? I... I don't know that! ${eject}`)})
    .catch((error) => {console.log(error)})
