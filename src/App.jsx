import './index.css'
import { useState } from 'react'

function App() {

  const [newItem, setNewItem] = useState('')

  const [todos, setTodos] = useState([])

  // Add new Item

  function handleAdd(e) {

    e.preventDefault()

    setTodos([...todos, { id: crypto.randomUUID(), title: newItem, state: false }])

    setNewItem('')
  }

  // Toggle item states

  function toggleItem(id, state) {

    setTodos(() => (

      todos.map(todo => {

        if (todo.id === id) return { ...todo, state: state }

        return todo

      })
    ))
  }


  // Delete item

  function handleDelete(id) {
    setTodos(() => todos.filter(todo => todo.id !== id))
  }



  return (
    <>
      <h1>React - TodoList</h1>

      <form onSubmit={handleAdd}>
        <div className='form'>
          <label>New Item</label>
          <div className='addNew'>
            <input className='newItem' value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
            <button className='addButton'>Add</button>
          </div>
        </div>
      </form>

      <ul>
        {todos.map(item =>
        (
          <li key={item.id}>
            <label className='list'>
              <input type='checkbox' checked={item.state} onClick={(e) => toggleItem(item.id, e.target.checked)}></input>
              {item.title}
            </label>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}


      </ul >
    </>
  )
}

export default App
