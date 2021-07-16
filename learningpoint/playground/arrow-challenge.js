const tasks = {
    tasks:[{
        text:"Shopping",
        comleted: true
    },{
        text:"Cloth clean",
        comleted: false
    },{
        text:"Watch movies",
        comleted: false
    }
],
// getTaskToDo(){
//     const taskToDo = this.tasks.filter((task)=>{
//         return task.comleted === false
//     })
//     return taskToDo
// }
    getTaskToDo(){
        return this.tasks.filter((task) => task.comleted === false)
        return taskToDo
    }
}

console.log(tasks.getTaskToDo())