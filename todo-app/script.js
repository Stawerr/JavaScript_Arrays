const todos= [{
    text: 'Order cat food',
    completed: false
},{
    text: 'Clean kitchen',
    completed: true
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text: 'Execise',
    completed: true
}]

//Remove some p's
//const p = document.querySelectorAll('p')

//p.forEach(function(p){
//    if(p.textContent.includes('3'))
//    p.remove()
//})



const incompleteTodos=todos.filter(function(todo){
    return !todo.completed
})

const p1=document.createElement('p')
p1.textContent=`You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(p1)

todos.forEach(function(todo){
    const p= document.createElement('p')
    p.textContent=todo.text
    document.querySelector('p').appendChild(p)
})

const butt=document.createElement('button')
butt.textContent='Create a new Todo'
document.querySelector('p').appendChild(butt)

//Listen for new todo creation
document.querySelector('button').addEventListener('click',function(e){
    console.log('Add a new todo...')
})

document.querySelector('#add-todo').addEventListener('click',function(e){
    e.target.textContent="This button was clicked"
})