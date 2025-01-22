import React, {useEffect, useState} from "react";
import './App.css';
import Home from "./jsx/Home.jsx"
import Students from "./jsx/Students.jsx";
import Lessons from "./jsx/Lessons.jsx";
import WordCards from "./jsx/WordCards.jsx";

function App() {
    const  [studentData, setStudentData] = useState([{}])
    const  [lessonData, setLessonData] = useState([{}])
    const  [wordCardsData, setWordCardsData] = useState([{}])
    const [nameList,setList] = useState([])
    const [currentPage,setCurrentPage] = useState([]) 
    
    console.log(process.env.REACT_APP_PROXY+"/api/wordcards")
    

    useEffect(()=> {
        setCurrentPage(<Home/>)
        
        fetch(process.env.REACT_APP_PROXY+"/api/students")
            .then(res => res.json())
            .then(data => {setStudentData(data);})
            .catch(error => console.error('Error:', error));

        fetch(process.env.REACT_APP_PROXY+"/api/lessons")
            .then(res => res.json())
            .then(data => {setLessonData(data);})
            .catch(error => console.error('Error:', error));
        

        fetch(process.env.REACT_APP_PROXY+"/api/wordcards")
            .then(res => res.json())
            .then(data => {setWordCardsData(data);})
            .catch(error => console.error('Error:', error));
    }, []) // this empty array is here to run only on the first render of the component
    
    // useEffect(()=> {
    //     setCurrentPage(<Home/>)
    // }, [])
    
    const handleHomeButton = () =>{
        setCurrentPage(<Home/>)
    }
    const handleStudentsButton = () =>{
        setCurrentPage(<Students backendData={studentData}/>)
    }
    const handleLessonsButton = () =>{
        setCurrentPage(<Lessons backendData={lessonData}/>)
    }
    const handleWordCardsButton = () =>{
        setCurrentPage(<WordCards backendData={wordCardsData}/>)
    }
    

  return (
      <div>
          <div className="top-buttons">
              <div className="main-buttons">
                  <button onClick={handleHomeButton}>Home</button>
                  <button onClick={handleStudentsButton}>Students</button>
                  <button onClick={handleLessonsButton}>Lessons</button>
                  <button onClick={handleWordCardsButton}>Wordcards</button>
              </div>

              <div>
                  <button>
                      <img src="images/user-login-305.png" alt="Button Icon" width="30vh"
                           height="30vh"/>
                      <span>Log in</span>
                  </button>
              </div>
          </div>


          

          {currentPage}


          {/*<div className="footer">*/}
          {/*    <p>Jakub Wilczak s21344</p>*/}
          {/*</div>*/}


      </div>
  );
}

export default App;
