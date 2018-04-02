import React from 'react'


const AddForm = ({ parent }) => {
  return (
    <form>
      <h3>Lisää uusi</h3>
      <div>
        nimi: <input value={parent.state.newName} onChange={parent.handleNameChange} />
        <br />
        numero: <input value={parent.state.newNumber} onChange={parent.handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={parent.submitHandler}>lisää</button>
      </div>
    </form>
  )
}

export default AddForm
