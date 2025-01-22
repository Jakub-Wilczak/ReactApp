import React, {useEffect, useState} from "react";

function Lessons({backendData}) {

    const  [studentLessonsData, setStudentLessonsData] = useState([{}])
    const  [backendDataTable, setbackendDataTable] = useState([basicbackendDataTable()])

    useEffect(()=> {
        fetch(process.env.REACT_APP_PROXY+"/api/studentslessons")
            .then(res => res.json())
            .then(data => {setStudentLessonsData(data);})
            .catch(error => console.error('Error:', error));

        basicbackendDataTable()
        
        
    },[])
    
    // function fetchStudentLessons() {
    //     fetch("/api/studentslessons").then(
    //         res => res.json()
    //     ).then(
    //         data => {
    //             setStudentLessonsData(data);
    //             handleConnectedView()
    //         }
    //     )
    // }

    function handleConnectedView(){
        setbackendDataTable(<table className="styled-table">
            <thead>
            <tr>
                <th>ID LESSON</th>
                <th>LESSON NAME</th>
                <th>TEACHER ID</th>
                <th>CREATION DATE</th>
                <th>STUDENT JOIN DATE</th>
                <th>ID STUDENT</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>BIRTH DATE</th>
            </tr>
            </thead>
            <tbody>
            {(backendData.length === 0) ? (
                <p>Loading...</p>
            ) : (
                studentLessonsData.map((lesson, i) => (
                    <tr>
                        <td key={i}>{lesson.lesson_id}</td>
                        <td key={i}>{lesson.lesson_name}</td>
                        <td key={i}>{lesson.teacher_id}</td>
                        <td key={i}>{lesson.creation_date}</td>


                        <td key={i}>{lesson.join_date}</td>
                        <td key={i}>{lesson.student_id}</td>
                        <td key={i}>{lesson.first_name}</td>
                        <td key={i}>{lesson.last_name}</td>
                        <td key={i}>{lesson.age}</td>
                        <td key={i}>{lesson.gender}</td>
                        <td key={i}>{lesson.birth_date}</td>
                    </tr>
                )))}
            </tbody>
        </table>)
            
        
    }

    function handleDetailedView() {
        setbackendDataTable(<table className="styled-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>LESSON NAME</th>
                <th>TEACHER ID</th>
                <th>CREATION DATE</th>
            </tr>
            </thead>
            <tbody>
            {(backendData.length === 0) ? (
                <p>Loading...</p>
            ) : (
                backendData.map((lesson, i) => (
                    <tr>
                        <td key={i}>{lesson.lesson_id}</td>
                        <td key={i}>{lesson.lesson_name}</td>
                        <td key={i}>{lesson.teacher_id}</td>
                        <td key={i}>{lesson.creation_date}</td>
                    </tr>
                )))}
            </tbody>
        </table>)
    }
    
    function basicbackendDataTable() {
        return <table className="styled-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>LESSON NAME</th>
                <th>TEACHER ID</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {(backendData.length === 0) ? (
                <p>Loading...</p>
            ) : (
                backendData.map((lesson, i) => (
                    <tr>
                        <td key={i}>{lesson.lesson_id}</td>
                        <td key={i}>{lesson.lesson_name}</td>
                        <td key={i}>{lesson.teacher_id}</td>
                        <td>
                            <button className="delete" onClick={()=>handleDelete(lesson)}>delete</button>
                        </td>
                    </tr>
                )))}
            </tbody>
        </table>
    }
    
    function handleDelete(lesson) {
        console.log(lesson)
        // backendDataTable.filter((e) => {lesson.lesson_id = e.id})
        // studentLessonsData.filter((e) => {lesson.lesson_id = e.id})
    }
        
    

    return (
        <div>
            <div className="database-buttons">
                <button onClick={handleConnectedView} className={"database"}>Connect Students with Lessons</button>
                <button onClick={handleDetailedView} className={"database"}>Detailed View</button>
            </div>
            {backendDataTable}
            

        </div>)
}

export default Lessons;