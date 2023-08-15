import { students } from "../model/modelStudents.js";
import {studentsViewList} from "../view/viewStudents.js";
import {insertTitleList} from "../view/viewStudents.js";

const buttonCall = document.getElementById("btnListar");

const getListStudents = (students) => {
    let datos = [];
    for (let s of students){
        let datosTemplate = `${s.name} ${s.lastName} ${s.age}`;
        datos.push(datosTemplate);
    }
    return datos;
}

buttonCall.addEventListener("click", ()=>{
    const response = getListStudents(students);
    studentsViewList(response);
    insertTitleList();
});