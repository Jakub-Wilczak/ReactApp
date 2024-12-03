import './App.css';
import {useState} from "react";
import ListElement from "./ListElement";

function App() {
    const [name,setName] = useState('defaultNameState')
    const [nameInput,setInput] = useState('inputState')
    const [nameList,setList] = useState([])

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }

    const handleButtonClick = () => {
        if(name.length<3 || name==="TAK BYĆ NIE MOŻE LOL")
        setName("TAK BYĆ NIE MOŻE LOL")
        else {
            setName(nameInput)
            setList([...nameList,name])
        }
    }

    const handleButtonDelete = (e) => {
        console.log(e)
        }



    const listItems = nameList.map((name) =>
        <li>{name}
            <button onClick={handleButtonDelete}> delete </button>
    </li>);



  return (
      <div className="App">
          <p>{name}</p>
          <input onChange={handleNameChange}></input>
          <button onClick={handleButtonClick}> Click</button>

          <ul>{listItems}</ul>
      </div>
  );
}

export default App;
