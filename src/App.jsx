import './index.css'
import { useState } from 'react'
import { useEffect } from 'react'
import NewForm from './NewForm'
import ToDoList from './ToDoList'


function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEM')
    if (!localValue) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEM', JSON.stringify(todos))
  }, [todos])

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

  // Add new item 
  function addTodos(title) {
    setTodos([...todos, { id: crypto.randomUUID(), title, state: false }])
  }

  return (
    <>
      <h1>React - TodoList</h1>
      <NewForm addTodos={addTodos} />
      <ToDoList todos={todos} handleDelete={handleDelete} toggleItem={toggleItem} />
    </>
  )
}

export default App
