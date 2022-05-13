const notes =[{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'habbits 2 work on',
    body: 'Exercise and eating'
},{
    title: 'Office Mmdifications',
    body: 'Get a new seat'
}]

//Remove o ultimo item do array
//console.log(notes.pop())
//Acrescenta no fim do array
//notes.push('My new note')


//Remove o 1º item do array
//console.log(notes.shift())
//Acrescenta na 1ª posição do array
//notes.unshift('My first note')

//notes.splice(1,1,'this is the new')

//notes[0]='new note 0'


//notes.forEach(function (item, index){
//    console.log(index)
//    console.log(item)
//})

const sortNotes =function(notes){
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        }else{
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

const findNote=function(notes,noteTitle){
    const index=notes.findIndex(function(note,index){
        return note.title.toLowerCase()===noteTitle.toLowerCase()
    })
    return notes[index]
}

const findNote2=function(notes,noteTitle){
    return notes.find(function(note,index){
        return note.title.toLowerCase()===noteTitle.toLowerCase()
    })
}

const filteredNotes = notes.filter(function(note,index){
    const isTitleMatch = note.title.toLowerCase().includes('office')
    const isBodyMatch= note.body.toLowerCase().includes('office')
    return isTitleMatch || isBodyMatch
})
//console.log(filteredNotes)


const findNotes=function(notes, query){
    return notes.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch= note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}
console.log(findNotes(notes,'new'))
//const note=findNote2(notes,'Office Mmdifications')
//console.log(note)

//console.log(notes.length)
//console.log(notes)

//const index= notes.findIndex(function(note,index){
//    console.log(note)
//    return note.title=== 'habbits 2 work on'
//})
//console.log(index)