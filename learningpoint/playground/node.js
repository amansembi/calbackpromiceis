const fs = require('fs');
const { join } = require('path');
// const getNotes = ()=>{
//     return 'Testing add notes'
// }
// const  addNotes = (title, body)=>{
//     const notes = loadNotes()
//     notes.push({
//         title:title,
//         body:body
//     })
//     saveNotes(notes)

// }

// const saveNotes = (notes)=>{
//     const datajson = JSON.stringify(notes)
//     fs.writeFileSync('nodejs.json',datajson)

// }
// const loadNotes = () =>{
//     try{
//         const dataBuffer = fs.readFileSync('nodejs.json')
//         const dataJson = dataBuffer.toString()
//         return JSON.parse(dataJson)
//     }catch(e){
//         return [];
//     }
// }
// module.exports = {
//     getNotes: getNotes,
//     addNotes: addNotes
// }

 const dataBuffer = fs.readFileSync('data.json')
 const realData = dataBuffer.toString()
 const objData = JSON.parse(realData)
 objData.name = "Amrinder singh";
 objData.age = "30";
 fs.writeFileSync('data.json',JSON.stringify(objData))