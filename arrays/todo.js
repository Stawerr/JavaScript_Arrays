//const vetor=['Todo1','Todo2','Todo3','Todo4','Todo5']

const vec= [{
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


const deleteTodo=function(vec, task){
    const index=vec.findIndex(function(todo,index){
        return todo.text.toLowerCase()===task.toLowerCase()
    })
    if(index>-1){
        vec.splice(index,1)
    }
}

deleteTodo(vec, 'Buy food')
//console.log(vec)

const getThingsToDo=function(vec){
    return vec.filter(function(todo,index){
        if(todo.completed===false)
        return todo
    })
}

//console.log(getThingsToDo(vec))

const sortTodos =function(vec){
    vec.sort(function(a, b){
         if(a.completed===b.completed){
            return 0
         }else if(a.completed>b.completed){
            return 1
         }else{
             return -1
         }
    })
}

sortTodos(vec)
console.log(vec)

//console.log('You have '+vetor.length+' todos')
//console.log('First: '+vetor[0]+' Last: '+vetor[vetor.length-2])

//Delete 3 item
//vetor.splice(2,1)
//console.log(vetor)

//add item onto the end
//vetor.push('New last item')
//console.log(vetor)

//remove first item from the list
//vetor.shift()
//console.log(vetor)

//vetor.forEach(function(item,index){
//    const num=index+1
//    console.log(`${num}. ${item}`)
//})