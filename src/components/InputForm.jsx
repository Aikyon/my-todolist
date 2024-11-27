import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   
    /*タスクの追加*/ 
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ]);
    /*入力した文字を消す*/ 
    setInputText("");
  }

  const handleChange = (event) => {
    setInputText(event.target.value);
    //console.log(inputText);
  }

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        onChange={handleChange} 
        value={inputText}
        />
        <button>
          <AddIcon />
        </button>
      </form>
    </div>
  )
}


