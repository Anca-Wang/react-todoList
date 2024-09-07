import { useState } from "react"

export default function NewForm({ addTodos }) {

  const [newItem, setNewItem] = useState('')

  // Add new Item

  function handleAdd(e) {
    e.preventDefault()
    if (newItem === '') return
    addTodos(newItem)
    setNewItem('')
  }

  return (
    <>
      <form onSubmit={handleAdd}>
        <div className='form'>
          <label htmlFor="item">New Item</label>
          <div className='addNew'>
            <input className='newItem' id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
            <button className='addButton'>Add</button>
          </div>
        </div>
      </form>

    </>)
}