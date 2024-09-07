export default function ListItem({ id, state, title, toggleItem, handleDelete }) {
  return (
    <>
      <li>
        <label className='list'>
          <input type='checkbox' checked={state} onClick={(e) => toggleItem(id, e.target.checked)}></input>
          {title}
        </label>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </li>
    </>
  )
}