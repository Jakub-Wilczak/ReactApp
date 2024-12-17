import React, {useEffect, useState} from "react";
import './App.css';
function App() {
  const  [backendData, setBackendData] = useState([{}])
  const [nameList,setList] = useState([])

  useEffect(() => {
    fetch("/api").then(
        response => response.json()
    ).then(
        data=>{
          setBackendData(data)
        }
    )
  }, []);

  // const data = backendData.users.map((user, i) => {
  //   <p key={i}>{user}</p>
  // })

  //const data = backendData.users.map((user, i) => (<p key={i}>{user}</p>))

  const getUsers = () => {
    if (typeof backendData.users === "undefined"){
      return <p>undefined</p>
    }
    else {
      return backendData.users.map((user, i) => (<p key={i}>{user}</p>))
    }

  }


  return (
    <div>
        <div class="login">
            <button onClick={getUsers}> Login</button>
            <button onClick={getUsers}> Registration</button>
        </div>


        <h1>Word-Cards</h1>


        <ul>{getUsers()}</ul>


    </div>
  );
}

export default App;
