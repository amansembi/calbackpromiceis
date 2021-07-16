const yargs = require('yargs')
const fs = require('fs')
const yargVal = yargs.argv
//result = {}

// result.title = yargVal.title;
// result.name = yargVal.name;
// result.work = yargVal.work;
// dataJson = JSON.stringify(yargVal)
// fs.writeFile('node.json',dataJson,(err)=>{
//     if(err) throw 'Somthing missing'
//     console.log('Write file successfully')
// })
// const event = {
//     name:"Birthday Party",
//     setFunction: function(){
//         // console.log(`I am going to ${this.name}`)
//         console.log("I am going to " +this.name)
        
//     }
// }
// const event = {
//         name:"Birthday Party",
//         guestList:['Androw','Jen','Mike'],
//         setFunction(){
//             const thi = this
//             // console.log(`I am going to ${this.name}`)
//             console.log("I am going to " +this.name)
//             this.guestList.forEach(function (guest){
//                 console.log(guest + ' is attending ' +thi.name)
//             })
            
//         }
//     }

const event = {
    name:"Birthday Party",
    guestList:['Androw','Jen','Mike'],
    setFunction(){
        const thi = this
        // console.log(`I am going to ${this.name}`)
        console.log("I am going to " +this.name)
        this.guestList.forEach( (guest)=>{
            console.log(guest + ' is attending ' +thi.name)
        })
        
    }
}
event.setFunction()
