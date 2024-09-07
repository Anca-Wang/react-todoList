import ListItem from "./ListItem"

export default function ToDoList({ todos, toggleItem, handleDelete }) {

  return (
    <>
      {todos.length === 0 ? <h2>No todos</h2> : <h2>Todos Today</h2>}

      <ul>
        {todos.map(item =>
        (
          <ListItem key={item.id} {...item} toggleItem={toggleItem} handleDelete={handleDelete} />
        ))}
      </ul >
    </>
  )
}