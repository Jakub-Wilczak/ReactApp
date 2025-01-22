import React from "react";

function Students({backendData}) {
    
    
    return (
        <div>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    {/*<th>AGE</th>*/}
                    <th>GENDER</th>
                    <th>BIRTH DATE</th>
                </tr>
                </thead>
                <tbody>
                {(backendData.length === 0) ? (
                    <p>Loading...</p>
                ) : (
                    backendData.map((student, i) => (
                        <tr>
                            <td key={i}>{student.student_id}</td>
                            <td key={i}>{student.first_name}</td>
                            <td key={i}>{student.last_name}</td>
                            {/*<td key={i}>{student.age}</td>*/}
                            <td key={i}>{student.gender}</td>
                            <td key={i}>{student.birth_date}</td>
                        </tr>
                    )))}
                </tbody>
            </table>
</div>
)
}

export default Students;