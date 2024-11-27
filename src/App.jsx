import { useState } from 'react'
import './App.css'

function App() {
  const [inputFields, setInputFields] = useState([{value : ""}])


  const handleOnChange = (index, event) => {
    const allFields = [...inputFields]
    allFields[index].value = event.target.value
    setInputFields(allFields)
  }

  const handleOnAdd = (value) => {
    if(!value) return
    const allFields = [...inputFields, {value : value}]
    setInputFields(allFields)
  }

  const handleOnRemove = (index) => {
    const allFields = [...inputFields]
    if(index === 0) return
    allFields.splice(index,1)
    setInputFields(allFields)
  }


  return (
    <>
      <div id="root">
        <div id="main">
                 <table border={1}>
                    <caption>Dynamic Form</caption>
                    <thead>
                      <tr>
                        <td>Type</td>
                        <td>input</td>
                        <td>Add</td>
                        <td>Delete</td>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          inputFields.map((field, index) => (
                            <tr key={index}>
                               <td><label htmlFor="index">{"inputField"}</label></td>
                               <td>
                                <input type="text" 
                                id="index" 
                                value={field.value}
                                onChange={(event) => handleOnChange(index,event)}
                                />
                               </td>
                               <td><button onClick={() => handleOnAdd(field.value)}>Add</button></td>
                               <td><button onClick={() => handleOnRemove(index)}>Delete</button></td>
                            </tr>
                          ))
                        }
                    </tbody>
                 </table>
        </div>
      </div>
    </>
  )
}

export default App
