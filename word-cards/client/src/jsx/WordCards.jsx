import React from "react";

function WordCards({backendData}) {


    return (
        <div>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>LESSON ID</th>
                    <th>CHALLENGE WORD</th>
                    <th>SECRET WORD</th>
                </tr>
                </thead>
                <tbody>
                {(backendData.length === 0) ? (
                    <p>Loading...</p>
                ) : (
                    backendData.map((wordcard, i) => (
                        <tr>
                            <td key={i}>{wordcard.wordcard_id}</td>
                            <td key={i}>{wordcard.lesson_id}</td>
                            <td key={i}>{wordcard.challenge_word}</td>
                            <td key={i}>{wordcard.secret_word}</td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>)
}

export default WordCards;