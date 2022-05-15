const notes =[{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'habbits 2 work on',
    body: 'Exercise and eating'
},{
    title: 'Office Modifications',
    body: 'Get a new seat'
}]

// DOM - Document Object Model

//Query and remove
//const p=document.querySelector('p')
//console.log(p)
//p.remove()

// Query all and remove
//const ps = document.querySelectorAll('p')
//ps.forEach(function(p){
//    p.textContent='******'
    //console.log(p.textContent)
    //p.remove()
//})

// Add a new element
//const newP = document.createElement('p')
//newP.textContent='This is a new elemenent form JS'
//document.querySelector('body').appendChild(newP)

document.querySelector('#create-note').addEventListener('click',function(e){
    e.target.textContent='The button was clicked'
})

//# seleciona por ID . seleciona por class

document.querySelector('#remove-all').addEventListener('click',function(){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input',function(e){
    console.log(e.target.value)
})